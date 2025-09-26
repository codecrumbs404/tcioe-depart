import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Construction, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ResearchPage() {
  return (
    <div className="py-16 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Card className="p-8">
          <CardHeader className="space-y-6">
            <div className="mx-auto bg-orange-100 p-4 rounded-full w-20 h-20 flex items-center justify-center">
              <Construction className="h-10 w-10 text-orange-600" />
            </div>
            <div>
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                Research & Projects
              </CardTitle>
              <CardDescription className="text-lg">
                This page is currently under construction
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              We're working hard to bring you detailed information about our
              research initiatives, ongoing projects, and scientific
              publications. Please check back soon!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="default">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Go Back Home
                </Button>
              </Link>
              <Button variant="outline" disabled>
                Coming Soon
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
