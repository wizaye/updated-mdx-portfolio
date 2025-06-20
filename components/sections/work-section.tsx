import BlurFade from "@/components/magicui/blur-fade";
import { WorkExperienceCard } from "@/components/work-experience-card";
import { DATA } from "@/data/resume";
import { processWorkExperiences } from "@/lib/work-processor";

const BLUR_FADE_DELAY = 0.04;

export function WorkSection() {
  const processedWork = processWorkExperiences(DATA.work);
  
  return (
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
                  duration={work.duration}
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
  );
}
