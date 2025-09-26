import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

          <Card>
            <CardHeader>
              <CardTitle>Get Involved</CardTitle>
              <CardDescription>
                Ways to contribute to your alma mater
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <p className="font-medium">Guest Lectures</p>
                    <p className="text-sm text-muted-foreground">
                      Share your expertise with current students
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <p className="font-medium">Industry Partnerships</p>
                    <p className="text-sm text-muted-foreground">
                      Collaborate on research and internships
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <p className="font-medium">Scholarship Support</p>
                    <p className="text-sm text-muted-foreground">
                      Help deserving students achieve their goals
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <p className="font-medium">Advisory Board</p>
                    <p className="text-sm text-muted-foreground">
                      Guide department strategy and curriculum
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="text-center">
          <CardContent className="pt-8">
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our alumni network and stay updated with department news,
              events, and opportunities to connect with fellow graduates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-secondary hover:bg-secondary/90">
                <Mail className="h-4 w-4 mr-2" />
                Join Alumni Network
              </Button>
              <Button variant="outline">
                <ExternalLink className="h-4 w-4 mr-2" />
                Update Your Profile
              </Button>
              <Button variant="outline">Alumni Directory</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
