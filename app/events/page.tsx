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
import { Calendar, Clock, Users, ExternalLink } from "lucide-react";
import { useDepartment, useDepartmentEvents } from "@/hooks/use-department";
import { Skeleton } from "@/components/ui/skeleton";

export default function EventsPage() {
  const { data: dept } = useDepartment();
  const { data, loading, error } = useDepartmentEvents({
    ordering: "-eventStartDate",
    limit: 20,
  });

  const events = data?.results || [];
  const tcase = (s?: string) =>
    s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
  const statusOf = (s: string, e: string) => {
    const now = new Date();
    const sd = new Date(s);
    const ed = new Date(e);
    if (ed.getTime() < now.getTime())
      return { label: "Finished", variant: "outline" as const };
    if (sd.getTime() > now.getTime())
      return { label: "Upcoming", variant: "secondary" as const };
    return { label: "Running", variant: "default" as const };
  };

  const fmt = (d: string) => {
    try {
      const date = new Date(d);
      return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "2-digit",
      });
    } catch {
      return d;
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {dept?.name || "Department"} Events
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Stay updated with our upcoming events, conferences, workshops, and
            academic activities that foster learning and collaboration.
          </p>
        </div>

        {/* Events Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Events</h2>
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i}>
                  <div className="aspect-video bg-muted" />
                  <CardHeader>
                    <Skeleton className="h-6 w-48" />
                  </CardHeader>
                </Card>
              ))}
            </div>
          )}
          {error && <p className="text-red-500">Failed to load events.</p>}
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card
                  key={event.uuid}
                  className="group overflow-hidden hover:shadow-lg transition-all duration-200 border-border/70 hover:border-primary/40"
                >
                  <div className="aspect-video bg-muted overflow-hidden relative">
                    {event.thumbnail && (
                      <img
                        src={event.thumbnail}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                    <div className="absolute top-2 left-2">
                      <Badge variant={statusOf(event.eventStartDate, event.eventEndDate).variant}>
                        {statusOf(event.eventStartDate, event.eventEndDate).label}
                      </Badge>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge variant="outline">{tcase(event.eventType)}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <CardTitle className="text-lg font-semibold leading-tight line-clamp-1">
                          {event.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {event.descriptionShort}
                        </CardDescription>
                      </div>
                      <div className="hidden sm:flex gap-2 shrink-0 opacity-80">
                        <span className="px-2 py-0.5 rounded-md text-xs bg-muted text-foreground/80">
                          {fmt(event.eventStartDate)}
                        </span>
                        <span className="px-2 py-0.5 rounded-md text-xs bg-muted text-foreground/80">
                          {fmt(event.eventEndDate)}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" /> {fmt(event.eventStartDate)} — {fmt(event.eventEndDate)}
                      </span>
                      <span className="hidden sm:flex items-center gap-1">
                        <Users className="h-4 w-4" /> {tcase(event.eventType)}
                      </span>
                    </div>
                    <Button variant="secondary" className="w-full group-hover:shadow-sm">
                      <ExternalLink className="h-4 w-4 mr-2" /> View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
