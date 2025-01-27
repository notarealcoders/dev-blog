import { Container } from "./Container";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <Container>
        <div className="flex flex-col items-center gap-4 py-10 md:h-24 md:flex-row md:justify-between md:py-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Your Blog. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Add social links or other footer content */}
          </div>
        </div>
      </Container>
    </footer>
  );
}
