import { MotionCarouselDemo } from "@/components/demo-components-community-motion-carousel";
import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";
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
      "https://storage.googleapis.com/online-degree-app-production-documents/CERTIFICATE/FOUNDATION_CERTIFICATE/F2_2025/0855d53f1e3bf5ab13bbe9114cd4cf902e23aa993b8854b523566dca56a35d02.pdf?Expires=1776539163&GoogleAccessId=production-document-storage-si%40online-degree-app.iam.gserviceaccount.com&Signature=Ua8n48y2xSv11168V%2FoHyDQP0i1hjfjXWbchSO7pJC7avth7kNoDHIpRhG4hNJ383YbQrNSS6JZ3aOOtfCi0G2u4faR59%2BcH%2FXjn8Mss1MRyqsD5HFroEMF907okijzrhrDw5dQBsiLzm%2BujsXMXhaAfMyfdVfIGdkpEII409V%2FZseOinG04IXz%2BlawfnCFaOj8zcPmx8aIPj49KZhzUJZKWvCH9d%2FVBjJLmfo1M0WKN09EplxVHeuL3wgQ5OeUCiY8MeCDsX90Kc7v3umCke4AtcP3kXvM7f9B%2Fpa%2FjYuMLmZAXJVJcjh3D5FbxwJbJLkv4%2BqbrwGsSbOJxpFqmcQ%3D%3D",
  },
];

const EXPERIENCES = [
  {
    role: "Google Developer Group Technical Head",
    company: "Google Developer Group on Campus APSIT",
    duration: "September 2025 - Present",
    location: "Mumbai, India",
    description:
      `Led technical initiatives as Technical Head at Google Developer Group on Campus APSIT, driving developer education and community engagement. Organized and facilitated workshops, events, and hands-on sessions to build technical skills across the campus community, fostering a culture of learning and collaboration among aspiring developers.`
  },
  {
    role: "Google Developer Group Community Volunteer",
    company: "Google Developer Group on Campus APSIT",
    duration: "September 2024 - May 2025",
    location: "Mumbai, India",
    description:
      `Served as a Community Volunteer at Google Developer Group on Campus APSIT, supporting the organization and execution of tech events, workshops, and developer community initiatives. Contributed to fostering a collaborative learning environment for students interested in Google technologies and software development.`
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Dakhya Financial Consultancy",
    duration: "June 2025 - July 2025",
    location: "Mumbai, India",
    description:
      `Delivered end-to-end website for Dakhya Financial Consultancy, from requirement breakdown to deployment and handover.Collaborated with a team to design and deliver a complete web presence for Dakhya Financial Consultancy including a conversion-focused landing page and a structured client onboarding website. Worked end-to-end from concept to deployment, ensuring a professional, trust-driven experience tailored to the firm's financial advisory audience.` 
  },
  {
    role: "Frontend Developer",
    company: "Enigma Webverse 3.0",
    duration: "Jan 2025",
    location: "Mumbai, India",
    description:
      "Secured 1st place in Enigma Webverse 3.0 Data Privacy Hackathon, SIES College.",
  },
];
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[52vh] mt-30 overflow-hidden scroll-mt-24"
        style={{ fontFamily: "var(--font-merriweather)" }}
      >
        <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-55">
          <GravityStarsBackground
            className="h-full w-full text-white/90"
            starsCount={110}
            starsSize={2.5}
            starsOpacity={0.85}
            movementSpeed={0.2}
            gravityStrength={60}
            mouseInfluence={140}
            glowIntensity={14}
          />
        </div>
        <div className="pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f0f0f]" />
        <div className="relative z-10 mx-30 flex min-h-[52vh]">
          <div className="px-12 py-14">
            <span className="text-8xl tracking-wider font-semibold block mb-2">
              Atharva Ganesh Gourshete
              <span className="text-yellow-500 text-8xl">.</span>
            </span>
            <span className="text-3xl tracking-wider text-white/50">
              Full Stack Web Developer
            </span>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-30 mt-50 flex scroll-mt-24">
        <div className="grid grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              About<span className="text-yellow-500 text-5xl">.</span>
            </h2>
            <p className="text-lg text-white/70 mb-2">
              Hi there! I'm <span className="font-bold text-white">Atharva Gourshete</span>. I am a final year Computer Science student
              at the <span className="font-bold text-white">Mumbai University</span>. I am also pursuing a BS degree in Data Science and Programming at <span className="font-bold text-white">IIT Madras</span>. Recently I completed my
              Foundation Program in Data Science and Programming. I’ve spent the
              last 2 years messing around with tech exploring stuff, breaking
              things, and finally figuring out how they actually work.
            </p>
            <p className="text-lg text-white/70">
              The only thing that I believe is <span className="font-bold text-white">'Minimalism Maximizes Impact'</span>.
              Small steps matter. Probably someone who loves to sneak out
              answers to <span className="font-bold text-white">'Why'</span> instead of <span className="font-bold text-white">'How'</span>.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-30 mt-50 flex scroll-mt-24">
        <div className="w-full">
          <h2 className="text-4xl font-bold mb-4">
            Projects<span className="text-yellow-500 text-5xl">.</span>
          </h2>
          <MotionCarouselDemo SLIDES={SLIDES} />
        </div>
      </section>

      <section id="certifications" className="mx-30 mt-50 flex scroll-mt-24">
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

      <section id="experience" className="mx-30 mt-50 mb-20 flex scroll-mt-24">
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
