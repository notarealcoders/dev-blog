"use client";

import Link from "next/link";
import { Container } from "./Container";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Blog</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/blog"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Blog
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
          </nav>
        </div>
      </Container>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <Container>
            <div className="pt-20 pb-6 flex flex-col gap-4">
              <Link
                href="/"
                className="text-lg font-medium px-2 py-3 hover:bg-muted rounded-md"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-lg font-medium px-2 py-3 hover:bg-muted rounded-md"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <Link
                href="/categories"
                className="text-lg font-medium px-2 py-3 hover:bg-muted rounded-md"
                onClick={toggleMenu}
              >
                Categories
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium px-2 py-3 hover:bg-muted rounded-md"
                onClick={toggleMenu}
              >
                About
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
