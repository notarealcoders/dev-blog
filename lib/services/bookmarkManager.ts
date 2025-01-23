const BOOKMARK_KEY = "blog_bookmarks";

export const bookmarkManager = {
  toggle(slug: string): boolean {
    if (typeof window === "undefined") return false;

    const bookmarks = this.getBookmarks();
    const isBookmarked = bookmarks.includes(slug);

    if (isBookmarked) {
      bookmarks.splice(bookmarks.indexOf(slug), 1);
    } else {
      bookmarks.push(slug);
    }

    localStorage.setItem(BOOKMARK_KEY, JSON.stringify(bookmarks));
    return !isBookmarked;
  },

  isBookmarked(slug: string): boolean {
    if (typeof window === "undefined") return false;
    return this.getBookmarks().includes(slug);
  },

  getBookmarks(): string[] {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem(BOOKMARK_KEY) || "[]");
    } catch {
      return [];
    }
  },
};
