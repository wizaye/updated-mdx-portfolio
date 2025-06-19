export interface WorkExperience {
  readonly company: string;
  readonly href?: string;
  readonly badges?: readonly string[];
  readonly location: string;
  readonly title: string;
  readonly logoUrl: string;
  readonly start: string;
  readonly end?: string;
  readonly description: string;
}

export interface GroupedWorkExperience {
  company: string;
  href?: string;
  location: string;
  logoUrl: string;
  roles: {
    title: string;
    period: string;
    description: string;
    badges?: readonly string[];
  }[];
}

export function groupWorkExperiences(experiences: readonly WorkExperience[]): GroupedWorkExperience[] {
  const grouped = experiences.reduce((acc, exp) => {
    const existing = acc.find(group => group.company === exp.company);
    
    if (existing) {
      existing.roles.push({
        title: exp.title,
        period: `${exp.start} - ${exp.end ?? "Present"}`,
        description: exp.description,
        badges: exp.badges,
      });
    } else {
      acc.push({
        company: exp.company,
        href: exp.href,
        location: exp.location,
        logoUrl: exp.logoUrl,
        roles: [{
          title: exp.title,
          period: `${exp.start} - ${exp.end ?? "Present"}`,
          description: exp.description,
          badges: exp.badges,
        }],
      });
    }
    
    return acc;
  }, [] as GroupedWorkExperience[]);

  // Sort roles within each company by start date (most recent first)
  grouped.forEach(group => {
    group.roles.sort((a, b) => {
      const aDate = new Date(a.period.split(' - ')[0]);
      const bDate = new Date(b.period.split(' - ')[0]);
      return bDate.getTime() - aDate.getTime();
    });
  });

  return grouped;
}
