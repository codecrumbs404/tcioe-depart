import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Microscope, Beaker, Cpu, Leaf, Award, ExternalLink } from "lucide-react"

export default function ResearchPage() {
  const researchAreas = [
    {
      title: "Environmental Science",
      icon: <Leaf className="h-6 w-6" />,
      description: "Sustainable solutions for environmental challenges",
      projects: [
        "Water Quality Monitoring in Kathmandu Valley",
        "Air Pollution Assessment and Mitigation",
        "Waste Management Technologies",
        "Climate Change Impact Studies",
      ],
    },
    {
      title: "Materials Science",
      icon: <Beaker className="h-6 w-6" />,
      description: "Advanced materials for technological applications",
      projects: [
        "Nanocomposite Materials Development",
        "Smart Materials for Electronics",
        "Biomaterials for Medical Applications",
        "Sustainable Construction Materials",
      ],
    },
    {
      title: "Biotechnology",
      icon: <Microscope className="h-6 w-6" />,
      description: "Biological solutions for modern challenges",
      projects: [
        "Microbial Fuel Cell Development",
        "Enzyme Engineering for Industry",
        "Plant Tissue Culture Techniques",
        "Bioremediation Technologies",
      ],
    },
    {
      title: "Data Science",
      icon: <Cpu className="h-6 w-6" />,
      description: "Data-driven insights and AI applications",
      projects: [
        "Machine Learning for Environmental Monitoring",
        "Big Data Analytics in Healthcare",
        "AI-powered Quality Control Systems",
        "Predictive Modeling for Agriculture",
      ],
    },
  ]

  const ongoingProjects = [
    {
      title: "Smart Water Quality Monitoring System",
      pi: "Dr. Rajesh Kumar Sharma",
      duration: "2023-2025",
      funding: "NPR 2,500,000",
      status: "Ongoing",
      description: "Development of IoT-based water quality monitoring system for urban areas.",
    },
    {
      title: "Biodegradable Plastic Alternatives",
      pi: "Dr. Sunita Maharjan",
      duration: "2024-2026",
      funding: "NPR 1,800,000",
      status: "Ongoing",
      description: "Research on eco-friendly alternatives to conventional plastics using local materials.",
    },
    {
      title: "AI-Powered Disease Diagnosis",
      pi: "Dr. Anita Thapa",
      duration: "2024-2025",
      funding: "NPR 1,200,000",
      status: "Ongoing",
      description: "Machine learning models for early detection of common diseases in rural areas.",
    },
  ]

  const publications = [
    {
      title: "Sustainable Water Treatment Using Local Materials",
      authors: "Sharma, R.K., Poudel, S., Thapa, M.",
      journal: "Journal of Environmental Science",
      year: "2024",
      impact: "Q1",
    },
    {
      title: "Nanocomposite Materials for Energy Storage",
      authors: "Maharjan, S., Gurung, P., Shrestha, A.",
      journal: "Materials Science International",
      year: "2024",
      impact: "Q2",
    },
    {
      title: "Machine Learning Applications in Agriculture",
      authors: "Thapa, A., Adhikari, R., Karki, B.",
      journal: "AI in Agriculture",
      year: "2023",
      impact: "Q1",
    },
  ]

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Research & Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover our cutting-edge research initiatives and innovative projects that address real-world challenges
            and advance scientific knowledge.
          </p>
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary/10 p-2 rounded-lg text-secondary">{area.icon}</div>
                    <div>
                      <CardTitle>{area.title}</CardTitle>
                      <CardDescription>{area.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Current Projects:</h4>
                  <ul className="space-y-2">
                    {area.projects.map((project, projectIndex) => (
                      <li key={projectIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {project}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="projects" className="mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="projects">Ongoing Projects</TabsTrigger>
            <TabsTrigger value="publications">Publications</TabsTrigger>
            <TabsTrigger value="facilities">Research Facilities</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Ongoing Research Projects</h3>
            {ongoingProjects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="mb-2">{project.title}</CardTitle>
                      <CardDescription>Principal Investigator: {project.pi}</CardDescription>
                    </div>
                    <Badge variant="secondary">{project.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Duration:</span>
                      <p className="text-muted-foreground">{project.duration}</p>
                    </div>
                    <div>
                      <span className="font-medium">Funding:</span>
                      <p className="text-muted-foreground">{project.funding}</p>
                    </div>
                    <div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="publications" className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Recent Publications</h3>
            {publications.map((pub, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">{pub.title}</h4>
                      <p className="text-sm text-muted-foreground mb-1">{pub.authors}</p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">{pub.journal}</span> ({pub.year})
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 mt-2 md:mt-0">
                      <Badge variant={pub.impact === "Q1" ? "default" : "secondary"}>{pub.impact} Journal</Badge>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Read
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="facilities" className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Research Facilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Materials Laboratory</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• X-ray Diffraction (XRD) System</li>
                    <li>• Scanning Electron Microscope (SEM)</li>
                    <li>• Thermal Analysis Equipment</li>
                    <li>• Mechanical Testing Machines</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Environmental Analysis Lab</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Water Quality Testing Equipment</li>
                    <li>• Air Quality Monitoring Systems</li>
                    <li>• Spectrophotometers</li>
                    <li>• Chromatography Systems</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Biotechnology Laboratory</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• PCR and Gel Electrophoresis</li>
                    <li>• Cell Culture Facilities</li>
                    <li>• Fermentation Systems</li>
                    <li>• Microscopy Equipment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Computational Research Center</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• High-Performance Computing Cluster</li>
                    <li>• Data Analysis Software</li>
                    <li>• Machine Learning Platforms</li>
                    <li>• Simulation Software</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Collaboration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="h-6 w-6 text-secondary mr-2" />
              Research Collaborations
            </CardTitle>
            <CardDescription>Our partnerships with leading institutions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">International Partners</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• University of Tokyo, Japan</li>
                  <li>• Cambridge University, UK</li>
                  <li>• Stanford University, USA</li>
                  <li>• Technical University of Munich, Germany</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">National Partners</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Nepal Academy of Science and Technology</li>
                  <li>• Department of Environment, Nepal</li>
                  <li>• Nepal Biotechnology Association</li>
                  <li>• Industrial Research Centers</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
