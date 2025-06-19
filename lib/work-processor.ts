interface WorkItem {
  company: string;
  href?: string;
  badges?: readonly string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end?: string;
  description: string;
}

interface ProcessedWorkItem {
  company: string;
  href?: string;
  location: string;
  logoUrl: string;
  period: string;
  roles?: {
    title: string;
    period: string;
    description: string;
  }[];
  title?: string;
  description?: string;
}

export function processWorkExperiences(work: readonly WorkItem[]): ProcessedWorkItem[] {
  // Group by company
  const grouped = work.reduce((acc, item) => {
    const existing = acc.find(group => group.company === item.company);
    
    if (existing) {
      existing.items.push(item);
    } else {
      acc.push({
        company: item.company,
        href: item.href,
        location: item.location,
        logoUrl: item.logoUrl,
        items: [item]
      });
    }
    
    return acc;
  }, [] as Array<{
    company: string;
    href?: string;
    location: string;
    logoUrl: string;
    items: WorkItem[];
  }>);

  // Process each group
  return grouped.map(group => {
    if (group.items.length === 1) {
      // Single role at company
      const item = group.items[0];
      return {
        company: item.company,
        href: item.href,
        location: item.location,
        logoUrl: item.logoUrl,
        period: `${item.start} - ${item.end ?? "Present"}`,
        title: item.title,
        description: item.description,
      };
    } else {
      // Multiple roles (promotions) at same company
      const sortedItems = group.items.sort((a, b) => {
        const aDate = new Date(a.start);
        const bDate = new Date(b.start);
        return bDate.getTime() - aDate.getTime(); // Most recent first
      });
      
      const firstStart = sortedItems[sortedItems.length - 1].start;
      const lastEnd = sortedItems[0].end ?? "Present";
      
      return {
        company: group.company,
        href: group.href,
        location: group.location,
        logoUrl: group.logoUrl,
        period: `${firstStart} - ${lastEnd}`,
        roles: sortedItems.map(item => ({
          title: item.title,
          period: `${item.start} - ${item.end ?? "Present"}`,
          description: item.description,
        })),
      };
    }
  });
}
