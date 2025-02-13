import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center">
          <Link href="/" className="font-bold text-xl mr-8">
            TechEd
          </Link>

          <div className="flex gap-6">
            <Link href="/courses" className="text-muted-foreground hover:text-foreground">
              Courses
            </Link>
            <Link href="/resources" className="text-muted-foreground hover:text-foreground">
              Resources
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
