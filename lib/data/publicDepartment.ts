import { USE_MOCK } from '@/lib/env'
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
import {
  mockDepartmentDetail,
  mockDepartments,
  mockDepartmentDownloads,
  mockDepartmentEvents,
  mockDepartmentPlans,
  mockDepartmentPrograms,
  mockDepartmentStaffs,
  mockEventGallery,
} from '@/lib/mocks/department'
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
  if (USE_MOCK) return Promise.resolve(mockDepartments)
  return apiListDepartments(params)
}

export function getDepartment(slug: string): Promise<DepartmentDetail> {
  if (USE_MOCK) return Promise.resolve(mockDepartmentDetail(slug))
  // Server: use absolute public API; Client: use local API route (CORS-safe)
  if (typeof window === 'undefined') return apiPublicGetDepartment(slug)
  return apiLocalGetDepartment(slug)
}

export function listDepartmentDownloads(
  slug: string,
  params?: { limit?: number; offset?: number },
): Promise<Paginated<DepartmentDownload>> {
  if (USE_MOCK) return Promise.resolve(mockDepartmentDownloads())
  return apiListDepartmentDownloads(slug, params)
}

export function listDepartmentEvents(
  slug: string,
  params?: { limit?: number; offset?: number; ordering?: string; search?: string },
): Promise<Paginated<DepartmentEvent>> {
  if (USE_MOCK) return Promise.resolve(mockDepartmentEvents())
  return apiListDepartmentEvents(slug, params)
}

export function listDepartmentPlans(
  slug: string,
  params?: { limit?: number; offset?: number },
): Promise<Paginated<DepartmentPlan>> {
  if (USE_MOCK) return Promise.resolve(mockDepartmentPlans())
  return apiListDepartmentPlans(slug, params)
}

export function listDepartmentPrograms(
  slug: string,
  params?: { limit?: number; offset?: number; ordering?: string; search?: string },
): Promise<Paginated<DepartmentProgram>> {
  if (USE_MOCK) return Promise.resolve(mockDepartmentPrograms())
  return apiListDepartmentPrograms(slug, params)
}

export function listDepartmentStaffs(
  slug: string,
  params?: { limit?: number; offset?: number; ordering?: string; search?: string },
): Promise<Paginated<DepartmentStaff>> {
  if (USE_MOCK) return Promise.resolve(mockDepartmentStaffs())
  return apiListDepartmentStaffs(slug, params)
}

export function listEventGallery(
  eventId: number,
  params?: { limit?: number; offset?: number },
): Promise<Paginated<EventGalleryItem>> {
  if (USE_MOCK) return Promise.resolve(mockEventGallery())
  return apiListEventGallery(eventId, params)
}
