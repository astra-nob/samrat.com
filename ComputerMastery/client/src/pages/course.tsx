import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import type { Course } from "@shared/schema";

export default function Course() {
  const [, params] = useRoute("/courses/:slug");
  const slug = params?.slug;

  const { data: course, isLoading } = useQuery<Course>({
    queryKey: [`/api/courses/${slug}`],
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="h-96 bg-muted animate-pulse rounded-lg mb-8" />
        <div className="h-8 bg-muted animate-pulse rounded w-1/2 mb-4" />
        <div className="h-4 bg-muted animate-pulse rounded w-1/4" />
      </div>
    );
  }

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img 
            src={course.image} 
            alt={course.title}
            className="rounded-lg w-full h-96 object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-lg text-muted-foreground mb-6">
            {course.description}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-sm text-muted-foreground">Level</div>
              <div className="font-semibold">{course.level}</div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-sm text-muted-foreground">Duration</div>
              <div className="font-semibold">{course.duration}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
