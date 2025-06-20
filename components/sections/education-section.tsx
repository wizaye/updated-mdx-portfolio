import BlurFade from "@/components/magicui/blur-fade";
import { EducationCard } from "@/components/education-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export function EducationSection() {
  return (
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
  );
}
