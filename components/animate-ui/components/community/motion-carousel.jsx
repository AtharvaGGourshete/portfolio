"use client";
import * as React from "react";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/animate-ui/components/buttons/button";
import { ChevronRight, ChevronLeft } from "lucide-react";

const transition = {
  type: "spring",
  stiffness: 240,
  damping: 24,
  mass: 1,
};

const useEmblaControls = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState([]);
  const [prevDisabled, setPrevDisabled] = React.useState(true);
  const [nextDisabled, setNextDisabled] = React.useState(true);

  const onDotClick = React.useCallback(
    (index) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const onNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const updateSelectionState = (api) => {
    setSelectedIndex(api.selectedScrollSnap());
    setPrevDisabled(!api.canScrollPrev());
    setNextDisabled(!api.canScrollNext());
  };

  const onInit = React.useCallback((api) => {
    setScrollSnaps(api.scrollSnapList());
    updateSelectionState(api);
  }, []);

  const onSelect = React.useCallback((api) => {
    updateSelectionState(api);
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    emblaApi.on("reInit", onInit).on("select", onSelect);

    return () => {
      emblaApi.off("reInit", onInit).off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    prevDisabled,
    nextDisabled,
    onDotClick,
    onPrev,
    onNext,
  };
};

function MotionCarousel(props) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const {
    selectedIndex,
    scrollSnaps,
    prevDisabled,
    nextDisabled,
    onDotClick,
    onPrev,
    onNext,
  } = useEmblaControls(emblaApi);

  return (
    <div className="w-full space-y-4 [--slide-height:21rem] sm:[--slide-height:23rem] md:[--slide-height:24rem] [--slide-spacing:1.5rem] [--slide-size:72%] md:[--slide-size:55%]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom">
          {slides.map((slide, index) => {
            const isActive = index === selectedIndex;
            const name = slide.name ?? slide.title ?? `Project ${index + 1}`;
            const descriptionLines = Array.isArray(slide.description)
              ? slide.description.slice(0, 3)
              : [];
            const technologies = Array.isArray(slide.technologies)
              ? slide.technologies
              : [];

            return (
              <motion.div
                key={index}
                className="h-[var(--slide-height)] mr-[var(--slide-spacing)] basis-[var(--slide-size)] flex-none flex min-w-0"
              >
                <motion.div
                  className="size-full rounded-xl border border-white/20 bg-white/[0.03] p-5 md:p-6 text-white"
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 0.9,
                  }}
                  transition={transition}
                >
                  <div className="flex h-full flex-col">
                    <a
                      href={slide.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl md:text-3xl font-semibold leading-tight underline-offset-4 hover:underline decoration-yellow-500"
                    >
                      {name}
                    </a>

                    <div className="mt-4 space-y-2 text-sm md:text-base text-white/70 leading-relaxed">
                      {descriptionLines.map((line, lineIndex) => (
                        <p key={`${index}-line-${lineIndex}`}>{line}</p>
                      ))}
                    </div>

                    <div className="mt-auto pt-4 flex flex-wrap gap-2">
                      {technologies.map((tech, techIndex) => (
                        <span
                          key={`${index}-tech-${techIndex}`}
                          className="rounded-full border border-yellow-500/50 bg-yellow-500/10 px-3 py-1 text-xs md:text-sm text-yellow-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between">
        <Button size="icon" onClick={onPrev} disabled={prevDisabled}>
          <ChevronLeft className="size-5" />
        </Button>

        <div className="flex flex-wrap justify-end items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => onDotClick(index)}
            />
          ))}
        </div>

        <Button size="icon" onClick={onNext} disabled={nextDisabled}>
          <ChevronRight className="size-5" />
        </Button>
      </div>
    </div>
  );
}

function DotButton({ selected = false, label, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      layout
      initial={false}
      className="flex cursor-pointer select-none items-center justify-center rounded-full border-none bg-primary text-primary-foreground text-sm"
      animate={{
        width: selected ? 68 : 12,
        height: selected ? 28 : 12,
      }}
      transition={transition}
    >
      <motion.span
        layout
        initial={false}
        className="block whitespace-nowrap px-3 py-1"
        animate={{
          opacity: selected ? 1 : 0,
          scale: selected ? 1 : 0,
          filter: selected ? "blur(0)" : "blur(4px)",
        }}
        transition={transition}
      >
        {label}
      </motion.span>
    </motion.button>
  );
}

export { MotionCarousel };
