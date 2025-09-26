"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// Tabs and extra icons removed; keeping page focused on API docs
import { useDepartment, useDepartmentPlans } from "@/hooks/use-department";
import { Skeleton } from "@/components/ui/skeleton";
import { Eye } from "lucide-react";
import { useState } from "react";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";

export default function PlansPage() {
  const { data: dept } = useDepartment();
  const { data, loading, error } = useDepartmentPlans({ limit: 50 });
  const documents = data?.results || [];
  const [openId, setOpenId] = useState<string | null>(null);
  const strategicGoals = [
    {
      title: "Academic Excellence",
      description: "Enhance curriculum quality and teaching methodologies",
      progress: 75,
      timeline: "2024-2027",
      initiatives: [
        "Curriculum modernization",
        "Faculty development programs",
        "Student assessment improvements",
        "Industry-aligned courses",
      ],
    },
    {
      title: "Research Innovation",
      description: "Strengthen research capabilities and output",
      progress: 60,
      timeline: "2024-2028",
      initiatives: [
        "Research infrastructure upgrade",
        "International collaborations",
        "Publication quality improvement",
        "Grant acquisition support",
      ],
    },
    {
      title: "Infrastructure Development",
      description: "Modernize facilities and equipment",
      progress: 45,
      timeline: "2024-2026",
      initiatives: [
        "Laboratory modernization",
        "Digital infrastructure",
        "Library expansion",
        "Student facilities upgrade",
      ],
    },
    {
      title: "Industry Partnerships",
      description: "Strengthen ties with industry and employers",
      progress: 55,
      timeline: "2024-2025",
      initiatives: [
        "Internship programs",
        "Industry advisory board",
        "Joint research projects",
        "Career placement services",
      ],
    },
  ];

  const upcomingProjects = [
    {
      title: "New Research Center Construction",
      budget: "NPR 50,000,000",
      timeline: "2025-2026",
      status: "Planning",
      description:
        "State-of-the-art research facility with advanced laboratories",
    },
    {
      title: "Digital Learning Platform",
      budget: "NPR 5,000,000",
      timeline: "2025",
      status: "In Progress",
      description: "Comprehensive online learning management system",
    },
    {
      title: "International Exchange Program",
      budget: "NPR 8,000,000",
      timeline: "2025-2027",
      status: "Approved",
      description: "Student and faculty exchange with partner universities",
    },
    {
      title: "Green Campus Initiative",
      budget: "NPR 12,000,000",
      timeline: "2025-2026",
      status: "Planning",
      description: "Sustainable energy and waste management systems",
    },
  ];

  const milestones = [
    {
      year: "2025",
      achievements: [
        "Launch new M.A.Sc. specialization in Data Science",
        "Complete laboratory modernization phase 1",
        "Establish 5 new industry partnerships",
        "Achieve 90% graduate employment rate",
      ],
    },
    {
      year: "2026",
      achievements: [
        "Open new research center",
        "Launch international exchange program",
        "Increase research publications by 40%",
        "Implement green campus initiatives",
      ],
    },
    {
      year: "2027",
      achievements: [
        "Achieve international accreditation",
        "Establish PhD programs in all specializations",
        "Complete digital transformation",
        "Reach 1000+ active alumni network",
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "default";
      case "Approved":
        return "secondary";
      case "Planning":
        return "outline";
      case "Completed":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {dept?.name || "Department"} Plans
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our comprehensive roadmap for growth, innovation, and excellence in
            applied science education and research.
          </p>
        </div>

        {/* API Documents */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Documents</h2>
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <Skeleton className="h-6 w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          {error && <p className="text-red-500">Failed to load documents.</p>}
          {!loading && !error && documents.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((doc) => (
                <Card
                  key={doc.uuid}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg mb-1">
                          {doc.title}
                        </CardTitle>
                        <CardDescription>Plan / Policy</CardDescription>
                      </div>
                      <Badge variant="secondary">Published</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {doc.description}
                    </p>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => setOpenId((id) => (id === doc.uuid ? null : doc.uuid))}
                      >
                        <Eye className="h-4 w-4 mr-2" /> Preview
                      </Button>
                      <a href={doc.file} target="_blank" rel="noreferrer" className="inline-block">
                        <Button>Download</Button>
                      </a>
                    </div>
                  </CardContent>
                  <Collapsible open={openId === doc.uuid}>
                    <CollapsibleContent>
                      <div className="px-6 pb-6">
                        <div className="rounded-md border bg-muted/30 p-2">
                          {/\.(png|jpe?g|gif|webp)$/i.test(doc.file) ? (
                            <img src={doc.file} alt={doc.title} className="max-h-[70vh] w-full object-contain rounded" />
                          ) : /\.pdf($|\?)/i.test(doc.file) ? (
                            <div className="h-[70vh]">
                              <iframe src={doc.file} className="w-full h-full rounded" />
                            </div>
                          ) : (
                            <p className="text-sm text-muted-foreground">Preview not available.</p>
                          )}
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
