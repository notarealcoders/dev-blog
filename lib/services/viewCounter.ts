const VIEW_COUNT_KEY = "blog_view_counts";

export const viewCounter = {
  increment(slug: string): number {
    if (typeof window === "undefined") return 0;

    const counts = this.getCounts();
    counts[slug] = (counts[slug] || 0) + 1;
    localStorage.setItem(VIEW_COUNT_KEY, JSON.stringify(counts));
    return counts[slug];
  },

  getCount(slug: string): number {
    if (typeof window === "undefined") return 0;
    return this.getCounts()[slug] || 0;
  },

  getCounts(): Record<string, number> {
    if (typeof window === "undefined") return {};
    try {
      return JSON.parse(localStorage.getItem(VIEW_COUNT_KEY) || "{}");
    } catch {
      return {};
    }
  },
};
