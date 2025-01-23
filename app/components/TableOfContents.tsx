"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ content }: { content: string }) {
  const [toc, setToc] = useState<TocItem[]>([]);

  useEffect(() => {
    const headings = content.match(/#{2,3}\s.+/g) || [];
    const tocItems = headings.map((heading) => {
      const level = (heading.match(/^#{2,3}/) || [""])[0].length - 1;
      const text = heading.replace(/^#{2,3}\s/, "");
      const id = text.toLowerCase().replace(/[^\w]+/g, "-");
      return { id, text, level };
    });
    setToc(tocItems);
  }, [content]);

  return (
    <nav className="toc">
      <h3>Table of Contents</h3>
      <ul className="space-y-2">
        {toc.map((item) => (
          <li
            key={item.id}
            style={{ marginLeft: `${(item.level - 2) * 1}rem` }}
          >
            <a
              href={`#${item.id}`}
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
