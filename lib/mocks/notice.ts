import type { PaginatedNotices } from '@/lib/types/notice'

export function mockNotices(): PaginatedNotices {
  return {
    count: 1,
    next: null,
    previous: null,
    results: [
      {
        uuid: 'n1',
        title: 'Mock Notice — Scholarship Open',
        slug: 'mock-notice-scholarship-open',
        description: '<p>Applications for scholarships are now open.</p>',
        thumbnail: '/mock/notices/1.jpg',
        isFeatured: true,
        department: { uuid: 'f3e310db-ae7a-4d5e-b5cd-4cb611e6496b', name: 'Department of Applied Science' },
        category: { uuid: 'c1', name: 'Scholarship' },
        publishedAt: '2025-09-26T05:04:19.637Z',
        medias: [
          { uuid: 'm1', file: '/mock/files/notice.pdf', caption: 'Details', mediaType: 'DOCUMENT' },
        ],
        author: { uuid: 'a1', fullName: 'Admin', photo: null },
      },
    ],
  }
}

