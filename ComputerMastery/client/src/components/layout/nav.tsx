import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Download, Mail } from "lucide-react";

export default function Nav() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses", icon: GraduationCap },
    { href: "/resources", label: "Resources", icon: Download },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <a className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6" />
              <span className="font-bold text-xl">TechEdu</span>
            </a>
          </Link>

          <div className="flex items-center space-x-4">
            {links.map(({ href, label, icon: Icon }) => (
              <Link key={href} href={href}>
                <a>
                  <Button
                    variant={location === href ? "default" : "ghost"}
                    className={cn(
                      "flex items-center space-x-2",
                      location === href && "bg-primary text-primary-foreground"
                    )}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    <span>{label}</span>
                  </Button>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
