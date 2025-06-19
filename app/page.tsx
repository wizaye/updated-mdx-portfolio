import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { WorkExperienceCard } from "@/components/work-experience-card";
import { EducationCard } from "@/components/education-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { processWorkExperiences } from "@/lib/work-processor";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const processedWork = processWorkExperiences(DATA.work);
  
  return (
    <main className="flex flex-col min-h-dvh space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
          
          {/* Header Components: Social Links, Resume, and Location */}
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex flex-col gap-2">
              {/* First line: Social Links, Resume, and Contact */}
              <div className="flex flex-wrap gap-2 items-center">
                <Link href={DATA.contact.social.GitHub.url} target="_blank">
                  <Badge variant="outline" className="flex items-center gap-1 hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
                    <DATA.contact.social.GitHub.icon className="size-3" />
                    GitHub
                  </Badge>
                </Link>
                <Link href={DATA.contact.social.LinkedIn.url} target="_blank">
                  <Badge variant="outline" className="flex items-center gap-1 hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
                    <DATA.contact.social.LinkedIn.icon className="size-3" />
                    LinkedIn
                  </Badge>
                </Link>
                <Link href={DATA.contact.social.X.url} target="_blank">
                  <Badge variant="outline" className="flex items-center gap-1 hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
                    <DATA.contact.social.X.icon className="size-3" />
                    Twitter
                  </Badge>
                </Link>
                <Link href={`mailto:${DATA.contact.email}`}>
                  <Badge variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
                    ✨ Get in touch
                  </Badge>
                </Link>
                <Link href="/resume" target="_blank">
                  <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer">
                    📄 View Resume
                  </Badge>
                </Link>
              </div>
              
              {/* Second line: Availability and Location */}
              <div className="flex gap-2 items-center">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <div className="size-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  Available
                </Badge>
                <Link href={DATA.locationLink} target="_blank">
                  <Badge variant="secondary" className="hover:bg-secondary/80 transition-colors cursor-pointer">
                    📍 {DATA.location}
                  </Badge>
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Work Experience
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Professional Journey
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Throughout my career, I&apos;ve had the opportunity to work with incredible teams 
                  and contribute to impactful projects across various industries and technologies.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {processedWork.map((work, id) => (
                <BlurFade
                  key={work.company}
                  delay={BLUR_FADE_DELAY * 7 + id * 0.05}
                >
                  <WorkExperienceCard
                    company={work.company}
                    title={work.title || ""}
                    href={work.href}
                    badges={[]}
                    period={work.period}
                    description={work.description || ""}
                    location={work.location}
                    logoUrl={work.logoUrl}
                    roles={work.roles}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Education
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Academic Background
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My educational journey across various institutions, 
                  building a strong foundation in computer science and business.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <ul className="mb-4 ml-4 border-l">
              {DATA.education.map((education, id) => (
                <BlurFade
                  key={education.school + education.start}
                  delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                >
                  <EducationCard
                    school={education.school}
                    degree={education.degree}
                    href={education.href}
                    period={`${education.start} - ${education.end}`}
                    logoUrl={education.logoUrl}
                    cgpa={(education as any).cgpa}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 14 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 17 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
