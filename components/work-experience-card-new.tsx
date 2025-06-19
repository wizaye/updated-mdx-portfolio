import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

interface Role {
  title: string;
  period: string;
  description: string;
}

interface Props {
  company: string;
  title: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description: string;
  location: string;
  logoUrl: string;
  roles?: Role[]; // Optional: for multiple roles within same company
}

export function WorkExperienceCard({
  company,
  title,
  href,
  badges,
  period,
  description,
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
        {period && (
          <time className="text-xs text-muted-foreground">{period}</time>
        )}
        <h2 className="font-semibold leading-none">{company}</h2>
        {location && (
          <p className="text-sm text-muted-foreground">{location}</p>
        )}
        
        {/* Multiple roles within same company */}
        {roles && roles.length > 0 ? (
          <div className="mt-2 space-y-3">
            {roles.map((role, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">{role.title}</h3>
                  <time className="text-xs text-muted-foreground">{role.period}</time>
                </div>
                <span className="prose dark:prose-invert text-sm text-muted-foreground">
                  {role.description}
                </span>
              </div>
            ))}
          </div>
        ) : (
          /* Single role */
          <>
            <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
            {description && (
              <span className="prose dark:prose-invert text-sm text-muted-foreground mt-2">
                {description}
              </span>
            )}
          </>
        )}
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
