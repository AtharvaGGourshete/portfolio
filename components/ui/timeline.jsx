"use client";

import React from "react";

export const Timeline = ({ data = [] }) => {
  if (!data.length) {
    return (
      <div className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-white/60">
        Add your experience entries to display the timeline.
      </div>
    );
  }

  return (
    <div className="relative w-full rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-8 md:px-10">
      <div className="pointer-events-none absolute bottom-8 left-8 top-8 w-px bg-white/15 md:left-10" />

      <div className="space-y-10">
        {data.map((item, index) => {
          const role = item.role ?? item.title ?? "Role";
          const company = item.company ?? "";
          const duration = item.duration ?? "";
          const location = item.location ?? "";
          const description = item.description ?? "";
          const highlights = Array.isArray(item.highlights) ? item.highlights : [];
          const key = `${role}-${company}-${index}`;

          return (
            <article key={key} className="relative pl-10 md:pl-12">
              <span className="absolute left-[0.45rem] top-2 size-3 rounded-full bg-yellow-500 ring-4 ring-[#0f0f0f] md:left-[0.6rem]" />

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold text-white md:text-xl">
                  {role}
                </h3>
                {company ? (
                  <p className="text-sm font-medium text-yellow-300 md:text-base">
                    {company}
                  </p>
                ) : null}
              </div>

              {duration || location ? (
                <p className="mt-1 text-xs uppercase tracking-wider text-white/50 md:text-sm">
                  {duration}
                  {duration && location ? " • " : ""}
                  {location}
                </p>
              ) : null}

              {description ? (
                <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                  {description}
                </p>
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
};
