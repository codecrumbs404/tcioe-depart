import {
  getDepartment as apiLocalGetDepartment,
  listDepartmentDownloads as apiListDepartmentDownloads,
  listDepartmentEvents as apiListDepartmentEvents,
  listDepartmentPlans as apiListDepartmentPlans,
  listDepartmentPrograms as apiListDepartmentPrograms,
  listDepartmentStaffs as apiListDepartmentStaffs,
  listEventGallery as apiListEventGallery,
} from '@/lib/api/department'
import { listDepartments as apiListDepartments, getDepartment as apiPublicGetDepartment } from '@/lib/api/publicDepartment'
import type {
  DepartmentDetail,
  DepartmentDownload,
  DepartmentEvent,
  DepartmentPlan,
  DepartmentProgram,
  DepartmentStaff,
  DepartmentSummary,
  EventGalleryItem,
  Paginated,
} from '@/lib/types/department'

export function listDepartments(params?: {
  limit?: number
  offset?: number
  ordering?: string
  search?: string
}): Promise<Paginated<DepartmentSummary>> {
  return apiListDepartments(params)
}

export function getDepartment(slug: string): Promise<DepartmentDetail> {
  // Server: use absolute public API; Client: use local API route (CORS-safe)
  if (typeof window === 'undefined') return apiPublicGetDepartment(slug)
  return apiLocalGetDepartment(slug)
}

export function listDepartmentDownloads(
  slug: string,
  params?: { limit?: number; offset?: number },
): Promise<Paginated<DepartmentDownload>> {
  return apiListDepartmentDownloads(slug, params)
}

export function listDepartmentEvents(
  slug: string,
  params?: { limit?: number; offset?: number; ordering?: string; search?: string },
): Promise<Paginated<DepartmentEvent>> {
  return apiListDepartmentEvents(slug, params)
}

export function listDepartmentPlans(
  slug: string,
  params?: { limit?: number; offset?: number },
): Promise<Paginated<DepartmentPlan>> {
  return apiListDepartmentPlans(slug, params)
}

export function listDepartmentPrograms(
  slug: string,
  params?: { limit?: number; offset?: number; ordering?: string; search?: string },
): Promise<Paginated<DepartmentProgram>> {
  return apiListDepartmentPrograms(slug, params)
}

export function listDepartmentStaffs(
  slug: string,
  params?: { limit?: number; offset?: number; ordering?: string; search?: string },
): Promise<Paginated<DepartmentStaff>> {
  return apiListDepartmentStaffs(slug, params)
}

export function listEventGallery(
  eventId: number,
  params?: { limit?: number; offset?: number },
): Promise<Paginated<EventGalleryItem>> {
  return apiListEventGallery(eventId, params)
}
