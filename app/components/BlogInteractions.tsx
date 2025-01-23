"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Bookmark,
  BookmarkCheck,
  Share2,
  ThumbsUp,
  MessageCircle,
} from "lucide-react";
import { viewCounter } from "@/lib/services/viewCounter";
import { bookmarkManager } from "@/lib/services/bookmarkManager";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface BlogInteractionsProps {
  slug: string;
  title: string;
}

export default function BlogInteractions({
  slug,
  title,
}: BlogInteractionsProps) {
  const [views, setViews] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    setViews(viewCounter.increment(slug));
    setIsBookmarked(bookmarkManager.isBookmarked(slug));
    // Get likes from localStorage
    const storedLikes = localStorage.getItem(`blog_likes_${slug}`);
    if (storedLikes) {
      setLikes(parseInt(storedLikes));
      setHasLiked(localStorage.getItem(`blog_liked_${slug}`) === "true");
    }
  }, [slug]);

  const handleLike = () => {
    if (!hasLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setHasLiked(true);
      localStorage.setItem(`blog_likes_${slug}`, newLikes.toString());
      localStorage.setItem(`blog_liked_${slug}`, "true");
      toast.success("Thanks for liking!");
    }
  };

  const handleShare = async (platform: string) => {
    const url = `${window.location.origin}/blog/${slug}`;
    const text = `Check out "${title}"`;

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            text
          )}&url=${encodeURIComponent(url)}`
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`
        );
        break;
      case "copy":
        await navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard!");
        break;
    }
  };

  return (
    <TooltipProvider>
      <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Eye className="w-4 h-4" />
              <span>{views.toLocaleString()} views</span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            Number of times this article has been viewed
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsBookmarked(bookmarkManager.toggle(slug))}
              className="flex items-center gap-2"
            >
              {isBookmarked ? (
                <BookmarkCheck className="w-4 h-4" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
              <span>{isBookmarked ? "Bookmarked" : "Bookmark"}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {isBookmarked ? "Remove from bookmarks" : "Save for later"}
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              disabled={hasLiked}
              className="flex items-center gap-2"
            >
              <ThumbsUp
                className={`w-4 h-4 ${hasLiked ? "fill-current" : ""}`}
              />
              <span>{likes.toLocaleString()}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {hasLiked ? "Liked!" : "Like this article"}
          </TooltipContent>
        </Tooltip>

        <DropdownMenu>
          <Tooltip>
            <TooltipTrigger asChild>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </Button>
              </DropdownMenuTrigger>
            </TooltipTrigger>
            <TooltipContent>Share this article</TooltipContent>
          </Tooltip>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => handleShare("twitter")}>
              Twitter
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleShare("facebook")}>
              Facebook
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleShare("linkedin")}>
              LinkedIn
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleShare("copy")}>
              Copy Link
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                document
                  .getElementById("comments")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Comment</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Jump to comments</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
