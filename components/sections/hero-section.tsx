'use client';
import {useState} from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { LiveTime } from "@/components/live-time";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { Lens } from "../ui/lens";

const BLUR_FADE_DELAY = 0.04;

export function HeroSection() {
  const[hovering, setHovering] = useState(false);
  return (
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
            <Lens hovering={hovering} setHovering={setHovering}>
                <Avatar className="size-28 border cursor-pointer rounded-none">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </Lens>
          </BlurFade>
        </div>
        
        {/* Header Components: Social Links, Location, and Actions */}
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col gap-3">
            {/* First line: Location, Local Time, GitHub, LinkedIn */}
            <div className="flex flex-wrap gap-2 items-center">
              <Link href={DATA.locationLink} target="_blank">
                <Badge 
                  variant="secondary" 
                  className="flex items-center gap-1.5 hover:bg-secondary/80 transition-colors cursor-pointer"
                >
                  📍 {DATA.location}
                </Badge>
              </Link>
              <Badge 
                variant="secondary" 
                className="flex items-center gap-1.5 hover:bg-secondary/80 transition-colors"
              >
                🕐 <LiveTime />
              </Badge>
              <Link href={DATA.contact.social.GitHub.url} target="_blank">
                <Badge 
                  variant="secondary" 
                  className="flex items-center gap-1.5 hover:bg-secondary/80 transition-colors cursor-pointer"
                >
                  <DATA.contact.social.GitHub.icon className="size-3" />
                  GitHub
                </Badge>
              </Link>
              <Link href={DATA.contact.social.LinkedIn.url} target="_blank">
                <Badge 
                  variant="secondary" 
                  className="flex items-center gap-1.5 hover:bg-secondary/80 transition-colors cursor-pointer"
                >
                  <DATA.contact.social.LinkedIn.icon className="size-3" />
                  LinkedIn
                </Badge>
              </Link>
            </div>
            
            {/* Second line: Get in touch and Resume */}
            <div className="flex gap-2 items-center">
              <Link href={`mailto:${DATA.contact.email}`}>
                <Badge 
                  variant="secondary" 
                  className="hover:bg-secondary/80 transition-colors cursor-pointer"
                >
                  ✨ Get in touch
                </Badge>
              </Link>
              <Link href="/resume" target="_blank">
                <Badge 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer"
                >
                  📄 View Resume
                </Badge>
              </Link>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
