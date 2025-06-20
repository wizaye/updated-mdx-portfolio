"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

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
  duration: string;
  description: string;
  location: string;
  logoUrl: string;
  roles?: Role[]; // Optional: for multiple roles within same company
}

// Individual Role Component with dropdown
function RoleCard({ role }: { role: Role }) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    if (role.description) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="space-y-1">
      <div 
        className={cn(
          "flex items-center justify-between cursor-pointer group/role min-h-[1.25rem]",
          role.description && "hover:bg-muted/50 rounded-md p-2 -m-2"
        )}
        onClick={handleClick}
      >
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <h3 className="text-sm font-medium truncate leading-tight">{role.title}</h3>
          {role.description && (
            <ChevronRightIcon
              className={cn(
                "size-3 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover/role:translate-x-1 group-hover/role:opacity-100 flex-shrink-0",
                isExpanded ? "rotate-90" : "rotate-0"
              )}
            />
          )}
        </div>
        <time className="text-xs text-muted-foreground flex-shrink-0 ml-2">{role.period}</time>
      </div>
      {role.description && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isExpanded ? 1 : 0,
            height: isExpanded ? "auto" : 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="overflow-hidden"
        >
          <div className="mt-1 ml-2">
            <span className="prose dark:prose-invert text-sm text-muted-foreground">
              {role.description}
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// Single Role Component with dropdown
function SingleRoleCard({ title, description }: { title: string; description: string }) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (description) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="space-y-1">
      <div 
        className={cn(
          "flex items-center gap-2 cursor-pointer group/role min-h-[1.25rem]",
          description && "hover:bg-muted/50 rounded-md p-2 -m-2"
        )}
        onClick={handleClick}
      >
        <h3 className="text-sm font-medium leading-tight">{title}</h3>
        {description && (
          <ChevronRightIcon
            className={cn(
              "size-3 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover/role:translate-x-1 group-hover/role:opacity-100",
              isExpanded ? "rotate-90" : "rotate-0"
            )}
          />
        )}
      </div>
      {description && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isExpanded ? 1 : 0,
            height: isExpanded ? "auto" : 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="overflow-hidden"
        >
          <div className="mt-1 ml-2">
            <span className="prose dark:prose-invert text-sm text-muted-foreground">
              {description}
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );

}

export function WorkExperienceCard({
  company,
  title,
  href,
  badges,
  period,
  duration,
  description,
  location,
  logoUrl,
  roles,
}: Props) {
  // Check if there are interactive elements (descriptions to show)
  const hasInteractiveElements = (roles && roles.some(role => role.description)) || 
                                (!roles && description);

  const CardContent = () => (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={logoUrl} alt={company} className="object-contain" />
          <AvatarFallback>{company[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {/* Company name and duration on the same line */}
        <div className="flex items-center justify-between">
          {/* Apply link only to company name if there are interactive elements */}
          {href && hasInteractiveElements ? (
            <Link href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
              <h2 className="font-semibold leading-none hover:underline">{company}</h2>
            </Link>
          ) : (
            <h2 className="font-semibold leading-none">{company}</h2>
          )}
          <div className="text-right">
            {period && (
              <time className="text-xs text-muted-foreground block">{period}</time>
            )}
            <span className="text-xs text-muted-foreground">({duration})</span>
          </div>
        </div>
        {location && (
          <p className="text-sm text-muted-foreground">{location}</p>
        )}
        
        {/* Multiple roles within same company */}
        {roles && roles.length > 0 ? (
          <div className="mt-3">
            {roles.length === 1 ? (
              // Single role - with timeline dot
              <div className="relative pl-6">
                {/* Single timeline dot */}
                <div className="absolute left-0 top-0.5 w-3 h-3 bg-muted-foreground/40 rounded-full border-2 border-background"></div>
                <div className="space-y-3">
                  {roles.map((role, index) => (
                    <RoleCard key={index} role={role} />
                  ))}
                </div>
              </div>
            ) : (
              // Multiple roles - timeline line and dots
              <div className="relative">
                {/* Timeline dashed line connecting all roles */}
                <div className="absolute left-1.5 top-2 bottom-2 w-px border-l border-dashed border-muted-foreground/30"></div>
                <div className="space-y-4">
                  {roles.map((role, index) => (
                    <div key={index} className="relative pl-6">
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-0.5 w-3 h-3 bg-muted-foreground/40 rounded-full border-2 border-background"></div>
                      <RoleCard role={role} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Single role with dot */
          title && (
            <div className="mt-3 relative pl-6">
              {/* Single timeline dot */}
              <div className="absolute left-0 top-0.5 w-3 h-3 bg-muted-foreground/40 rounded-full border-2 border-background"></div>
              <SingleRoleCard title={title} description={description} />
            </div>
          )
        )}
      </div>
    </li>
  );

  // Only wrap the entire card in a link if there are no interactive elements
  if (href && !hasInteractiveElements) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" className="block">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}
