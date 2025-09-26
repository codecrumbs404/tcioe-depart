import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Calendar, Users, Award } from "lucide-react";

export default function GalleryPage() {
  const galleryItems = [
    {
      title: "Science Fair 2024",
      category: "Events",
      date: "March 2024",
      description: "Students showcasing innovative projects",
      image: "/placeholder-jwivr.png",
    },
    {
      title: "Research Laboratory",
      category: "Facilities",
      date: "2024",
      description: "State-of-the-art research equipment",
      image: "/modern-laboratory-equipment.jpg",
    },
    {
      title: "Graduation Ceremony 2024",
      category: "Events",
      date: "June 2024",
      description: "Celebrating our graduates' achievements",
      image: "/placeholder-4567v.png",
    },
    {
      title: "Campus Building",
      category: "Campus",
      date: "2024",
      description: "Department of Applied Science building",
      image: "/university-building-modern-architecture.jpg",
    },
    {
      title: "International Conference",
      category: "Events",
      date: "December 2023",
      description: "Hosting researchers from around the world",
      image: "/academic-conference.png",
    },
    {
      title: "Student Workshop",
      category: "Academic",
      date: "November 2023",
      description: "Hands-on learning experience",
      image: "/students-workshop-laboratory.jpg",
    },
    {
      title: "Faculty Meeting",
      category: "Academic",
      date: "October 2023",
      description: "Department faculty collaboration",
      image: "/faculty-meeting-discussion.jpg",
    },
    {
      title: "Library Study Area",
      category: "Facilities",
      date: "2023",
      description: "Modern study spaces for students",
      image: "/modern-library-study-area.jpg",
    },
    {
      title: "Alumni Meet 2023",
      category: "Events",
      date: "September 2023",
      description: "Reconnecting with our graduates",
      image: "/alumni-meeting-networking.jpg",
    },
  ];

  const categories = ["All", "Events", "Facilities", "Campus", "Academic"];

  const getFilteredItems = (category: string) => {
    if (category === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === category);
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Explore our department through images showcasing our facilities,
            events, academic activities, and vibrant campus life.
          </p>
        </div>

        {/* Gallery Tabs */}
        <Tabs defaultValue="All" className="mb-8">
          <TabsList className="grid w-full grid-cols-5">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getFilteredItems(category).map((item, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-lg transition-shadow group"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary">{item.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {item.date}
                        </span>
                        <Button variant="ghost" size="sm">
                          View Full Size
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Featured Collections */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <img
                  src="/virtual-tour-campus.jpg"
                  alt="Virtual Tour"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Virtual Campus Tour
                </h3>
                <p className="text-muted-foreground mb-4">
                  Take a 360° virtual tour of our department facilities and
                  laboratories.
                </p>
                <Button className="w-full">Start Virtual Tour</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <img
                  src="/time-lapse-construction.jpg"
                  alt="Time Lapse"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Department History
                </h3>
                <p className="text-muted-foreground mb-4">
                  Journey through 15 years of growth, achievements, and
                  milestones.
                </p>
                <Button className="w-full bg-transparent" variant="outline">
                  View Timeline
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <img
                  src="/student-life-activities.jpg"
                  alt="Student Life"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Student Life</h3>
                <p className="text-muted-foreground mb-4">
                  Discover the vibrant student community and extracurricular
                  activities.
                </p>
                <Button className="w-full bg-transparent" variant="outline">
                  Explore More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Upload Section */}
        <Card className="text-center">
          <CardContent className="pt-8">
            <Camera className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Share Your Moments</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Have photos from department events or activities? We'd love to
              feature them in our gallery. Share your memories with the
              community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-secondary hover:bg-secondary/90">
                Submit Photos
              </Button>
              <Button variant="outline">Photo Guidelines</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
