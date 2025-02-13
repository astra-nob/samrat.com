import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "wouter";
import type { Lesson } from "@shared/schema";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export function LessonCard({ lesson }: { lesson: Lesson }) {
  const { toast } = useToast();

  const toggleComplete = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("POST", `/api/lessons/${lesson.id}/toggle`);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`/api/courses/${lesson.courseId}/lessons`] });
      toast({
        title: "Progress updated",
        description: `Lesson marked as ${lesson.completed ? "incomplete" : "complete"}`,
      });
    },
  });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={lesson.completed}
              onCheckedChange={() => toggleComplete.mutate()}
            />
            <span>{lesson.title}</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          {lesson.content.substring(0, 100)}...
        </p>
        <Link href={`/lessons/${lesson.id}`}>
          <Button variant="outline" className="w-full">
            Continue Learning
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
