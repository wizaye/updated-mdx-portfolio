import BlurFade from "@/components/magicui/blur-fade";
import { SkillsSection as SkillsComponent } from "@/components/skills-section";

const BLUR_FADE_DELAY = 0.04;

export function SkillsSection() {
  return (
    <section id="skills">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Skills
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Technical Expertise
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A comprehensive overview of the technologies, tools, and frameworks 
                I use to build modern applications and solve complex problems.
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <SkillsComponent />
        </BlurFade>
      </div>
    </section>
  );
}
