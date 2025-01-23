import Image from "next/image";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Author } from "@/lib/types";

export default function FeaturedAuthors({ authors }: { authors: Author[] }) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Meet Our Authors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.map((author) => (
            <div
              key={author.name}
              className="bg-background rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-lg">{author.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {author.expertise.join(" • ")}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {author.bio}
              </p>
              <div className="flex gap-4">
                {author.social.twitter && (
                  <Link
                    href={`https://twitter.com/${author.social.twitter}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-5 h-5" />
                  </Link>
                )}
                {author.social.github && (
                  <Link
                    href={`https://github.com/${author.social.github}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                )}
                {author.social.linkedin && (
                  <Link
                    href={`https://linkedin.com/in/${author.social.linkedin}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
