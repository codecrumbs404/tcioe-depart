import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail } from "lucide-react";

export default function AlumniPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Alumni Network
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our alumni are making significant contributions across various
            industries and research fields worldwide. Join our growing network
            of successful professionals.
          </p>
        </div>

        {/* Intro */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>Our Alumni</CardTitle>
            <CardDescription>
              We’re building a verified alumni directory. Until then, use the
              links below to connect and share updates.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Alumni Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Alumni Services</CardTitle>
              <CardDescription>
                Resources and support for our graduates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <p className="font-medium">Career Development</p>
                    <p className="text-sm text-muted-foreground">
                      Job placement assistance and career counseling
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <p className="font-medium">Networking Events</p>
                    <p className="text-sm text-muted-foreground">
                      Regular meetups and professional networking
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <p className="font-medium">Mentorship Program</p>
                    <p className="text-sm text-muted-foreground">
                      Connect with experienced professionals
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <p className="font-medium">Continuing Education</p>
                    <p className="text-sm text-muted-foreground">
                      Access to workshops and professional courses
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
