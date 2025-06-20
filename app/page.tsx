import {
  HeroSection,
  AboutSection,
  WorkSection,
  EducationSection,
  SkillsSection,
  ProjectsSection,
  HackathonsSection,
  ContactSection
} from "@/components/sections";

export default function Page() {
  return (
    <main className="flex flex-col min-h-dvh space-y-10">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <HackathonsSection />
      <ContactSection />
    </main>
  );
}
