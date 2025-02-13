import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative">
      <div className="container mx-auto px-4">
        <div className="py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Master Computer Technology
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive computer training courses to help you succeed in the digital age.
              Learn programming, web development, and more.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <Link href="/courses">Browse Courses</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/resources">View Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
