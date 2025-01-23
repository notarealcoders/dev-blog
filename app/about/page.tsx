import Image from 'next/image';
import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">About DevBlog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A community-driven blog dedicated to sharing knowledge and best practices in web development.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-card rounded-lg p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              At DevBlog, we believe in making web development knowledge accessible to everyone. 
              Our mission is to create a platform where developers can learn, share, and grow together.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-background rounded-lg">
                <h3 className="font-semibold mb-2">Learn</h3>
                <p className="text-sm text-muted-foreground">
                  Access high-quality tutorials and articles written by experienced developers.
                </p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <h3 className="font-semibold mb-2">Share</h3>
                <p className="text-sm text-muted-foreground">
                  Contribute your knowledge and experiences with the community.
                </p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <h3 className="font-semibold mb-2">Grow</h3>
                <p className="text-sm text-muted-foreground">
                  Develop your skills and advance your career in web development.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                    alt="John Doe"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-sm text-muted-foreground">Founder & Lead Editor</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Senior Software Engineer with over 10 years of experience in web development.
                </p>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-4 h-4" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
                    alt="Jane Smith"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">Jane Smith</h3>
                    <p className="text-sm text-muted-foreground">Technical Content Manager</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Full-stack developer and technical writer specializing in modern web technologies.
                </p>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-4 h-4" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-card rounded-lg p-8 shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-6">
              Have questions or want to contribute? We'd love to hear from you!
            </p>
            <Button asChild>
              <Link href="/contact" className="inline-flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}