import { USE_MOCK } from '@/lib/env'
import { listNotices as apiListNotices } from '@/lib/api/publicNotice'
import type { PaginatedNotices } from '@/lib/types/notice'
import { mockNotices } from '@/lib/mocks/notice'

export function listNotices(params?: {
  limit?: number
  offset?: number
  ordering?: string
  search?: string
  department?: string
  category?: string
}): Promise<PaginatedNotices> {
  if (USE_MOCK) return Promise.resolve(mockNotices())
  return apiListNotices(params)
}

