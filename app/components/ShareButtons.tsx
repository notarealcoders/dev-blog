"use client";

import { Twitter, Facebook, Linkedin, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title
    )}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      url
    )}&title=${encodeURIComponent(title)}`,
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="share-buttons flex gap-4 my-6">
      <button
        onClick={() => window.open(shareLinks.twitter, "_blank")}
        className="text-blue-400 hover:text-blue-600"
      >
        Share on Twitter
      </button>
      <button
        onClick={() => window.open(shareLinks.facebook, "_blank")}
        className="text-blue-600 hover:text-blue-800"
      >
        Share on Facebook
      </button>
      <button
        onClick={() => window.open(shareLinks.linkedin, "_blank")}
        className="text-blue-700 hover:text-blue-900"
      >
        Share on LinkedIn
      </button>
      <Button size="icon" variant="outline" onClick={handleCopy}>
        <Link className="h-4 w-4" />
      </Button>
    </div>
  );
}
