import { MotionCarouselDemo } from "@/components/demo-components-community-motion-carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";

const SLIDES = [
  {
    name: "Chainsaw - Supply Chain Optimization",
    githubUrl: "https://github.com/AtharvaGGourshete/supply-chain-optimization",
    description: [
      "Built a real-time engineering dashboard for product and user health metrics.",
      "Implemented role-based access, alerting rules, and incident ownership flows.",
      "Cut debugging turnaround by exposing anomaly timelines and trace drill-downs.",
    ],
    technologies: ["React", "Javascript", "MongoDB", "Express", "Flask"],
  },
  {
    name: "Intellix - Context-Driven AI Search Engine",
    githubUrl: "https://github.com/AtharvaGGourshete/Intellix",
    description: [
      "Created an applicant tracking system for sourcing, screening, and interview stages.",
      "Added resume parsing, Kanban hiring pipelines, and recruiter activity logs.",
      "Improved team visibility with shared scorecards and status-based automation.",
    ],
    technologies: ["React", "Javascript", "Node.js", "Express", "Supabase"],
  },
  {
    name: "Prept - AI Interview Marketplace",
    githubUrl: "https://github.com/AtharvaGGourshete/",
    description: [
      "Developed a student collaboration portal for events, clubs, and academic communities.",
      "Integrated announcements, discussions, and RSVP workflows across departments.",
      "Increased event participation using personalized feeds and reminder notifications.",
    ],
    technologies: ["Next", "Javascript", "Prisma", "Supabase", "Clerk"],
  },
  {
    name: "Vehiql - AI Car Marketplace",
    githubUrl: "https://github.com/AtharvaGGourshete/ai-based-car-finder",
    description: [
      "Developed a comprehensive, AI-augmented car marketplace featuring end-to-end capabilities such as " +
        "AIpowered image search and auto-fill for listings, robust filtering with shareable URLs, detailed car pages " +
        "with an EMI calculator, real-time test-drive booking, secure authentication, and an administrative analytics " +
        "portal.",
    ],
    technologies: ["Next", "Javascript", "Prisma", "Supabase", "Clerk"],
  },
];

const CERTIFICATIONS = [
  {
    issuer: "Udemy",
    year: "2024",
    title: "Full Stack Web Development",
    description:
      "Demonstrated expertise in designing and deploying full stack web applications with production-ready architecture.",
    skills: ["React", "Node.js", "MongoDB", "REST APIs"],
    certificateUrl:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-cd5efa49-4223-44ac-bc1d-42f40dd9deb2.jpg?v=1727624932000",
  },
  {
    issuer: "IIT Madras",
    year: "2025",
    title: "Programming and Data Science (Foundation)",
    description:
      "Foundation-level certification in programming and data science from the Indian Institute of Technology Madras.",
    skills: ["Python", "Statistics", "Data Analysis", "Problem Solving"],
    certificateUrl:
      "https://storage.googleapis.com/online-degree-app-production-documents/CERTIFICATE/FOUNDATION_CERTIFICATE/F2_2025/0855d53f1e3bf5ab13bbe9114cd4cf902e23aa993b8854b523566dca56a35d02.pdf?Expires=1776515772&GoogleAccessId=production-document-storage-si%40online-degree-app.iam.gserviceaccount.com&Signature=AodT5qNg0D1Arq7RDA5pTa2M1OpKfugiaVrOEd%2FgXia3dPt11MalLqcxApWrwqFJ3qTMlckYa9wGEyH14ojfxuRiFtG5mf0GZ72z4F9xHwWK2qt6pPtUT%2Ftiy4deNf0PoFAGmfCjX2HdmAmYm178%2FLu87%2BbJLYCG7TVchf0XK%2B8RPDf3T%2BWe9Uv8FHKrUAuPEG19JSkuI3KIyLGRu8IT48cR7XnSK%2BlAj6pzdS%2FzKB%2BKE46x9NCB%2BfUSMpXtkB62KOhToQj%2BTzTvCzeRYnie9gSqamSVh0ynKzO56IBK3dBzv2sqtSasJDueoICMNyjgF9Tv9fDhV6fYLQLVOivn9Q%3D%3D",
  },
];

const EXPERIENCES = [
  {
    role: "Frontend Developer",
    company: "Enigma Webverse 3.0",
    duration: "Jan 2025",
    location: "Mumbai, India",
    description:
      "Secured 1st place in Enigma Webverse 3.0 Data Privacy Hackathon, SIES College.",
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Dakhya Financial Consultancy",
    duration: "June 2025 - July 2025",
    location: "Mumbai, India",
    description:
      "Delivered end-to-end website for Dakhya Financial Consultancy, from requirement breakdown to deployment and handover.",
    highlights: [
      "Developed scalable web apps using React, Node.js, and PostgreSQL.",
      "Integrated authentication, payment flows, and role-based dashboards.",
      "Set up CI/CD pipelines and cloud deployments with monitoring and error tracking.",
    ],
  },
  {
    role: "Google Developer Group Technical Head",
    company: "Google Developer Group on Campus APSIT",
    duration: "September 2025 - Present",
    location: "Mumbai, India",
    description:
      "Contributing fixes and enhancements to community projects while improving code quality practices.",
    highlights: [
      "Resolved UI and accessibility issues in component libraries and starter templates.",
      "Submitted bug fixes with tests and clear changelog notes for maintainers.",
      "Reviewed pull requests and improved developer documentation for onboarding.",
    ],
  },
];
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="mx-30 flex mt-50"
        style={{ fontFamily: "var(--font-merriweather)" }}
      >
        <div>
          <span className="text-8xl tracking-wider font-semibold block mb-2">
            Atharva Ganesh Gourshete
            <span className="text-yellow-500 text-8xl">.</span>
          </span>
          <span className="text-3xl tracking-wider text-white/50">
            Full Stack Web Developer
          </span>
        </div>
      </section>

      {/* About */}
      <section className="mx-30 flex mt-50">
        <div className="grid grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              About<span className="text-yellow-500 text-5xl">.</span>
            </h2>
            <p className="text-lg text-white/70 mb-2">
              Hi there! I'm Atharva. I am a final year Computer Science student
              at the Mumbai University. I am also pursuing a BS degree in Data
              Science and Programming at IIT Madras. Recently I completed my
              Foundation Program in Data Science and Programming. I’ve spent the
              last 2 years messing around with tech exploring stuff, breaking
              things, and finally figuring out how they actually work.
            </p>
            <p className="text-lg text-white/70">
              The only thing that I believe is 'Minimalism Maximizes Impact'.
              Small steps matter. Probably someone who loves to sneak out
              answers to 'Why' instead of 'How'.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-30 flex mt-50">
        <div className="w-full">
          <h2 className="text-4xl font-bold mb-4">
            Projects<span className="text-yellow-500 text-5xl">.</span>
          </h2>
          <MotionCarouselDemo SLIDES={SLIDES} />
        </div>
      </section>

      <section className="mx-30 flex mt-50">
        <div className="w-full">
          <h2 className="text-4xl font-bold mb-7">
            Certifications<span className="text-yellow-500 text-5xl">.</span>
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {CERTIFICATIONS.map((cert) => (
              <Card
                key={cert.title}
                className="h-full border border-white/10 bg-white/[0.03] ring-0"
              >
                <CardHeader className="gap-3">
                  <CardAction className="flex items-center gap-2">
                    <Badge variant="secondary">{cert.issuer}</Badge>
                    <Badge variant="secondary">{cert.year}</Badge>
                  </CardAction>
                  <CardTitle className="pr-24 text-lg md:text-xl">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-white/70">
                    {cert.description}
                  </CardDescription>
                </CardHeader>

                <CardFooter className="mt-auto border-white/10 bg-transparent">
                  <Button asChild className="w-full cursor-pointer">
                    <Link
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-30 flex mt-50 mb-20">
        <div className="w-full">
          <h2 className="text-4xl font-bold mb-7">
            Experience<span className="text-yellow-500 text-5xl">.</span>
          </h2>
          <Timeline data={EXPERIENCES} />
        </div>
      </section>
    </div>
  );
}
