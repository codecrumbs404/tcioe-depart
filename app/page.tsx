import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Users,
  Award,
  Calendar,
  Bell,
  Download,
  Clock,
} from "lucide-react";
import { DEPARTMENT_CODE } from "@/lib/env";
import { departmentSlugFromCode } from "@/lib/department";
import {
  getDepartment,
  listDepartmentEvents,
  listDepartmentStaffs,
} from "@/lib/data/publicDepartment";
import { listNotices as listPublicNotices } from "@/lib/data/publicNotice";
import { sanitizeHtml } from "@/lib/utils/sanitize";

function eventStatus(start: string, end: string) {
  const now = new Date();
  const s = new Date(start);
  const e = new Date(end);
  if (e.getTime() < now.getTime())
    return { label: "Finished", variant: "outline" as const };
  if (s.getTime() > now.getTime())
    return { label: "Upcoming", variant: "secondary" as const };
  return { label: "Running", variant: "default" as const };
}

export default async function HomePage() {
  const slug = departmentSlugFromCode(DEPARTMENT_CODE);
  const dept = slug ? await getDepartment(slug) : undefined;
  const [eventsRes, staffsRes] = slug
    ? await Promise.all([
        listDepartmentEvents(slug, { limit: 6, ordering: "-eventStartDate" }),
        listDepartmentStaffs(slug, { limit: 20, ordering: "displayOrder" }),
      ])
    : [undefined, undefined];
  const noticesRes = dept
    ? await listPublicNotices({ limit: 4, ordering: "-publishedAt", department: dept.uuid })
    : undefined;
  const events = eventsRes?.results || [];
  const notices = noticesRes?.results || [];
  const featuredNotice = notices.find((n) => n.isFeatured && n.thumbnail);
  const hod = (staffsRes?.results || []).sort(
    (a, b) => a.displayOrder - b.displayOrder
  )[0];
  return (
    <div className="relative bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted">
        <div className="absolute inset-0 hero-pattern"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('/university-campus-building-academic.jpg')",
          }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 text-foreground">
            {dept?.name || "Department"}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty mb-8 max-w-3xl mx-auto">
            Empowering the next generation of scientists and engineers through
            innovative education, cutting-edge research, and practical
            applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              <Link href="/programs">Explore Programs</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Link href="/research">Research & Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* HOD Message (campus style) */}
      <section className="py-16 bg-muted/30 text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image first on large screens */}
            <div className="flex justify-center lg:justify-start order-1">
              <div className="w-44 h-44 md:w-56 md:h-56 rounded-full bg-background ring-4 ring-background shadow-sm overflow-hidden">
                {hod?.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={hod.photo} alt={hod?.name || "HOD"} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">No Photo</div>
                )}
              </div>
            </div>
            <div className="order-2">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Message From Head of Department
              </h2>
              <div
                className="text-base leading-relaxed text-muted-foreground mb-4 max-w-3xl prose prose-sm prose-slate dark:prose-invert"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(
                    hod?.message ||
                      "Welcome to our department. We foster academic excellence and holistic development through quality teaching, research and industry collaboration."
                  ),
                }}
              />
              {hod && (
                <div className="mt-4">
                  <p className="text-lg font-semibold">{hod.name}</p>
                  <p className="text-muted-foreground">{hod.designation}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Department */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-sm tracking-widest text-primary font-semibold mb-2">
                ABOUT DEPARTMENT
              </h3>
              <h2 className="text-3xl font-bold mb-4">{dept?.name || "Our Department"}</h2>
              <div
                className="text-muted-foreground leading-relaxed prose prose-sm prose-slate dark:prose-invert"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(
                    dept?.detailedDescription ||
                      dept?.briefDescription ||
                      "Our department is committed to quality education, research, and community engagement. We aim to empower students with strong fundamentals and hands‑on experiences to tackle real‑world challenges."
                  ),
                }}
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={dept?.thumbnail || "/university-campus-building-academic.jpg"}
                  alt={dept?.name || "Department"}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notices + Events in two columns */}
      <section className="py-16 bg-muted/30 text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Notices */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold flex items-center">
                  <Bell className="h-6 w-6 text-primary mr-2" /> Recent Notices
                </h3>
                <Link href="/notices" className="text-primary hover:underline">
                  View All
                </Link>
              </div>
              <div className="space-y-2">
                {notices.length === 0 && (
                  <div className="p-4 border border-border rounded-lg bg-background text-muted-foreground">
                    No notices available.
                  </div>
                )}
                {notices.map((n) => (
                  <Link
                    href="/notices"
                    key={n.uuid}
                    className="block p-3 border border-dashed border-border rounded-lg hover:bg-muted/30 transition-colors bg-background/80 cursor-pointer"
                    aria-label={`Open notices page`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h4 className="font-medium mb-0.5 text-foreground line-clamp-1">{n.title}</h4>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-4 w-4" /> {new Date(n.publishedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' })}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {n.isFeatured && <Badge>Featured</Badge>}
                        {n.category?.name && <Badge variant="outline">{n.category.name}</Badge>}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Events */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold flex items-center">
                  <Calendar className="h-6 w-6 text-primary mr-2" /> Events
                </h3>
                <Link href="/events" className="text-primary hover:underline">
                  View All
                </Link>
              </div>
              <div className="space-y-4">
                {events
                  .filter((ev) => {
                    const st = eventStatus(ev.eventStartDate, ev.eventEndDate).label;
                    return st === "Upcoming" || st === "Running";
                  })
                  .map((ev) => {
                  const st = eventStatus(ev.eventStartDate, ev.eventEndDate);
                  return (
                    <div
                      key={ev.uuid}
                      className="p-4 border border-border rounded-lg hover:bg-card transition-colors bg-background"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium mb-1 text-foreground">{ev.title}</h4>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="h-4 w-4" /> {ev.eventStartDate} – {ev.eventEndDate}
                          </p>
                        </div>
                        <Badge variant={st.variant}>{st.label}</Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections moved last */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Discover Our Department</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow bg-card border-border">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-card-foreground">Academic Programs</CardTitle>
                <CardDescription>
                  Comprehensive undergraduate and graduate programs in applied sciences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
                  <Link href="/programs">View Programs</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-card border-border">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-card-foreground">Faculty & Staff</CardTitle>
                <CardDescription>Meet our distinguished faculty and dedicated staff members</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
                  <Link href="/faculty">Meet Our Team</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-card border-border">
              <CardHeader>
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-card-foreground">Research Excellence</CardTitle>
                <CardDescription>Cutting-edge research projects and innovative solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
                  <Link href="/research">Explore Research</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
