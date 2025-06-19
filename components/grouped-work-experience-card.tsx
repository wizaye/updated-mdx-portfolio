import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Role {
  title: string;
  period: string;
  description: string;
  badges?: readonly string[];
}

interface Props {
  company: string;
  href?: string;
  location: string;
  logoUrl: string;
  roles: Role[];
}

export function GroupedWorkExperienceCard({
  company,
  href,
  location,
  logoUrl,
  roles,
}: Props) {
  const CardContent = () => (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={logoUrl} alt={company} className="object-contain" />
          <AvatarFallback>{company[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        <time className="text-xs text-muted-foreground">
          {roles[0]?.period.split(' - ')[0]} - {roles[roles.length - 1]?.period.split(' - ')[1] || 'Present'}
        </time>
        <h2 className="font-semibold leading-none">{company}</h2>
        <p className="text-sm text-muted-foreground">{location}</p>
        
        <div className="mt-3 space-y-4">
          {roles.map((role, index) => (
            <div key={index} className="border-l-2 border-muted pl-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-foreground">{role.title}</h3>
                  <time className="text-xs text-muted-foreground">{role.period}</time>
                </div>
                {role.badges && role.badges.length > 0 && (
                  <div className="flex flex-row flex-wrap items-start gap-1 mt-1">
                    {role.badges.map((badge, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}
                {role.description && (
                  <span className="prose dark:prose-invert text-sm text-muted-foreground mt-1">
                    {role.description}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </li>
  );

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}
