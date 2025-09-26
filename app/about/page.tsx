import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Globe } from "lucide-react"
import { getDepartment } from "@/lib/data/publicDepartment"
import { departmentSlugFromCode } from "@/lib/department"
import { DEPARTMENT_CODE } from "@/lib/env"
import { sanitizeHtml } from "@/lib/utils/sanitize"

export default async function AboutPage() {
  const slug = departmentSlugFromCode(DEPARTMENT_CODE)
  const dept = slug ? await getDepartment(slug) : undefined

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">About {dept?.name || "Our Department"}</h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto text-justify">
            {dept?.briefDescription || "Learn about our mission, people and the work we do."}
          </p>
        </div>

        {/* Overview */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>Who we are and what we do</CardDescription>
          </CardHeader>
          <CardContent>
            {dept?.briefDescription && (
              <p className="text-sm md:text-base text-muted-foreground leading-7 text-justify mb-4">
                {dept.briefDescription}
              </p>
            )}
            <div
              className="prose prose-sm max-w-none prose-slate dark:prose-invert text-justify"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(
                  dept?.detailedDescription || dept?.briefDescription || "Department details will appear here soon."
                ),
              }}
            />
          </CardContent>
        </Card>

        {/* Contact & Social */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
              <CardDescription>Get in touch with us</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              {dept?.email && (
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a className="hover:underline" href={`mailto:${dept.email}`}>{dept.email}</a>
                </div>
              )}
              {dept?.phoneNo && (
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a className="hover:underline" href={`tel:${dept.phoneNo}`}>{dept.phoneNo}</a>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Social Links</CardTitle>
              <CardDescription>Follow our official channels</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {dept?.socialLinks?.length ? (
                dept.socialLinks.map((s) => (
                  <a key={s.uuid} href={s.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border rounded-md px-3 py-2 text-sm hover:bg-muted">
                    <Globe className="h-4 w-4" />
                    <span className="font-medium">{s.platform}</span>
                  </a>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No social links available.</p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Focus Areas (optional tags shown only if provided in description) */}
        {/* Optional bottom brief removed to avoid duplication */}
      </div>
    </div>
  )
}
