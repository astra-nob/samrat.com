import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { Resource } from "@shared/schema";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{resource.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          {resource.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">{resource.fileType}</span>
          <Button variant="outline" size="sm" className="space-x-2">
            <Download className="h-4 w-4" />
            <span>Download</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
