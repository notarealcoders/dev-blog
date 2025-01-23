"use client";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Copy, Check } from "lucide-react";
import { useState, useEffect } from "react";

// Import languages
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import yaml from "react-syntax-highlighter/dist/cjs/languages/prism/yaml";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";

// Register languages
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("yaml", yaml);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("markdown", markdown);

interface CodeBlockProps {
  language: string;
  children: string;
  fileName?: string;
}

const ClientSyntaxHighlighter = ({
  language,
  children,
  fileName,
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Only render after component mounts to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check system/user theme preference
  useEffect(() => {
    // Check if user prefers dark mode
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    setIsDarkTheme(darkModeMediaQuery.matches);

    // Listen for theme changes
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setIsDarkTheme(e.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleThemeChange);
    return () =>
      darkModeMediaQuery.removeEventListener("change", handleThemeChange);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const getLanguageDisplay = (lang: string): string => {
    const languageMap: { [key: string]: string } = {
      js: "JavaScript",
      jsx: "JavaScript JSX",
      ts: "TypeScript",
      tsx: "TypeScript JSX",
      yaml: "YAML",
      bash: "Bash",
      json: "JSON",
      md: "Markdown",
      html: "HTML",
      css: "CSS",
    };
    return languageMap[lang.toLowerCase()] || lang;
  };

  const customStyle = {
    margin: 0,
    padding: "1.5rem 1rem",
    background: "transparent",
    fontSize: "0.9rem",
    lineHeight: "1.5",
  };

  // Don't render until component is mounted
  if (!mounted) {
    return (
      <pre className="p-4 bg-muted rounded-lg">
        <code>{children}</code>
      </pre>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden border border-border bg-card">
      <div className="flex items-center justify-between px-4 py-2 bg-muted border-b border-border">
        <div className="flex items-center gap-4">
          {fileName && (
            <div className="flex items-center gap-2">
              <div className="text-sm text-muted-foreground font-medium">
                {fileName}
              </div>
            </div>
          )}
          {language && (
            <div className="text-sm text-muted-foreground">
              {getLanguageDisplay(language)}
            </div>
          )}
        </div>
        <button
          onClick={copyToClipboard}
          className="p-1.5 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
          title="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
      </div>
      <div className="p-0 overflow-auto">
        <SyntaxHighlighter
          language={language || "text"}
          style={isDarkTheme ? oneDark : oneLight}
          customStyle={customStyle}
          PreTag="div"
          wrapLines={true}
          wrapLongLines={true}
          useInlineStyles={true}
        >
          {children.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default ClientSyntaxHighlighter;
