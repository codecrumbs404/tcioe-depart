"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDepartment, useDepartmentStaffs } from "@/hooks/use-department";
import { Skeleton } from "@/components/ui/skeleton";

function formatTitle(t?: string | null) {
  if (!t) return "";
  const s = String(t).trim();
  if (!s) return "";
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

export default function FacultyPage() {
  const { data: dept } = useDepartment();
  const { data, loading, error } = useDepartmentStaffs({
    limit: 50,
    ordering: "displayOrder",
  });
  const staffs = (data?.results || [])
    .slice()
    .sort((a, b) => a.displayOrder - b.displayOrder);
  const subject = (() => {
    const n = dept?.name || "";
    const m = n.match(/department of\s*(.*)/i);
    return m?.[1]?.trim() || n || "Department";
  })();

  function roleLabel(designation?: string | null) {
    if (!designation) return "";
    const d = designation.trim().toLowerCase();
    if (d === "hod" || d === "head" || d === "head of department")
      return `Head of ${subject}`;
    if (d === "dhod" || d === "deputy head") return `Deputy Head of ${subject}`;
    return designation;
  }

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {dept?.name || "Department"} Faculty & Staff
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Meet our distinguished faculty members and dedicated staff who are
            committed to excellence in education and research.
          </p>
        </div>

        {/* Staff Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Team</h2>
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <Skeleton className="h-6 w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          {error && <p className="text-red-500">Failed to load team.</p>}
          {!loading && !error && staffs.length > 0 && (
            <>
              {/* Top center: order 1 */}
              {staffs[0] && (
                <div className="flex justify-center mb-10">
                  <Card
                    key={staffs[0].uuid}
                    className="relative w-full max-w-xs text-center overflow-visible"
                  >
                    {/* Overlapping photo */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
                      <div className="w-36 h-36 rounded-2xl overflow-hidden bg-muted shadow-lg">
                        <img
                          src={staffs[0].photo || "/placeholder.svg"}
                          alt={staffs[0].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <CardHeader className="pt-28 pb-2">
                      <CardTitle className="text-base md:text-lg mt-0">
                        {formatTitle(staffs[0].title)}
                        {staffs[0].title ? ". " : ""}
                        {staffs[0].name}
                      </CardTitle>
                      <CardDescription className="text-sm md:text-base font-semibold text-foreground mt-0">
                        {roleLabel(staffs[0].designation)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-1 pb-4">
                      {staffs[0].email && (
                        <a
                          href={`mailto:${staffs[0].email}`}
                          className="text-indigo-600 hover:underline text-sm"
                        >
                          {staffs[0].email}
                        </a>
                      )}
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Row: order 2–4 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mb-10">
                {staffs.slice(1, 4).map((member) => (
                  <Card key={member.uuid} className="text-center">
                    <CardHeader className="pt-6 pb-2">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <span className="h-1 w-12 bg-secondary rounded-full" />
                        <div className="w-28 h-28 rounded-2xl overflow-hidden bg-muted shadow">
                          <img
                            src={member.photo || "/placeholder.svg"}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="h-1 w-12 bg-secondary rounded-full" />
                      </div>
                      <CardTitle className="text-base md:text-lg mt-0">
                        {formatTitle(member.title)}
                        {member.title ? ". " : ""}
                        {member.name}
                      </CardTitle>
                      <CardDescription className="text-sm font-semibold text-foreground mt-0">
                        {roleLabel(member.designation)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="text-indigo-600 hover:underline text-sm"
                        >
                          {member.email}
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Row: order 5+ as 5-wide grid on xl */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
                {staffs.slice(4).map((member) => (
                  <Card key={member.uuid} className="text-center">
                    <CardHeader className="pt-4 pb-1">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <span className="h-1 w-12 bg-secondary rounded-full" />
                        <div className="w-24 h-24 rounded-2xl overflow-hidden bg-muted shadow">
                          <img
                            src={member.photo || "/placeholder.svg"}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="h-1 w-12 bg-secondary rounded-full" />
                      </div>
                      <CardTitle className="text-sm md:text-base mt-0">
                        {formatTitle(member.title)}
                        {member.title ? ". " : ""}
                        {member.name}
                      </CardTitle>
                      <CardDescription className="text-xs md:text-sm font-semibold text-foreground mt-0">
                        {roleLabel(member.designation)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-1 pb-3">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="text-indigo-600 hover:underline text-xs"
                        >
                          {member.email}
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
