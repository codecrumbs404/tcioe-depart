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

export const mockDepartments: Paginated<DepartmentSummary> = {
  count: 2,
  next: null,
  previous: null,
  results: [
    {
      uuid: 'f3e310db-ae7a-4d5e-b5cd-4cb611e6496b',
      name: 'Department of Applied Science',
      slug: 'department-of-applied-science',
      shortName: 'DAS',
      briefDescription: 'Mock: DAS brief description',
      thumbnail: '/mock/department/das.png',
    },
    {
      uuid: '5396da30-8618-4936-b48e-09ef6ce739ab',
      name: 'Department of Electronics & Computer Engineering',
      slug: 'department-of-electronics-computer-engineering',
      shortName: 'DOECE',
      briefDescription: 'Mock: DOECE brief description',
      thumbnail: '/mock/department/doece.png',
    },
  ],
}

export function mockDepartmentDetail(slug: string): DepartmentDetail {
  if (slug === 'department-of-electronics-computer-engineering') {
    return {
      uuid: '5396da30-8618-4936-b48e-09ef6ce739ab',
      name: 'Department of Electronics & Computer Engineering',
      slug,
      shortName: 'DOECE',
      briefDescription: 'Mock DOECE brief',
      detailedDescription: 'Mock DOECE details about the department...',
      phoneNo: '+977-1-0000000',
      email: 'doece@example.com',
      thumbnail: '/mock/department/doece.png',
      socialLinks: [
        { uuid: '1', platform: 'FACEBOOK', url: 'https://facebook.com/doece' },
        { uuid: '2', platform: 'WEBSITE', url: 'https://doece.example.com' },
      ],
    }
  }
  return {
    uuid: 'f3e310db-ae7a-4d5e-b5cd-4cb611e6496b',
    name: 'Department of Applied Science',
    slug,
    shortName: 'DAS',
    briefDescription: 'Mock DAS brief',
    detailedDescription: 'Mock DAS details about the department...',
    phoneNo: '+977-1-1111111',
    email: 'das@example.com',
    thumbnail: '/mock/department/das.png',
    socialLinks: [{ uuid: '1', platform: 'FACEBOOK', url: 'https://facebook.com/das' }],
  }
}

export function mockPaginated<T>(items: T[]): Paginated<T> {
  return { count: items.length, next: null, previous: null, results: items }
}

export function mockDepartmentDownloads(): Paginated<DepartmentDownload> {
  return mockPaginated([
    { uuid: 'd1', title: 'Academic Calendar', description: 'Mock calendar', file: '/mock/files/calendar.pdf' },
    { uuid: 'd2', title: 'Brochure', description: 'Mock brochure', file: '/mock/files/brochure.pdf' },
  ])
}

export function mockDepartmentEvents(): Paginated<DepartmentEvent> {
  return mockPaginated([
    {
      uuid: 'e1',
      title: 'Mock Science Fair',
      descriptionShort: 'A mock fair',
      eventType: 'CULTURAL',
      eventStartDate: '2025-10-01',
      eventEndDate: '2025-10-01',
      thumbnail: '/mock/events/fair.jpg',
    },
    {
      uuid: 'e2',
      title: 'Mock Guest Lecture',
      descriptionShort: 'A mock lecture',
      eventType: 'LECTURE',
      eventStartDate: '2025-10-10',
      eventEndDate: '2025-10-10',
      thumbnail: '/mock/events/lecture.jpg',
    },
  ])
}

export function mockDepartmentPlans(): Paginated<DepartmentPlan> {
  return mockPaginated([
    { uuid: 'p1', title: 'Policy 1', description: 'Mock plan', file: '/mock/files/plan1.pdf' },
  ])
}

export function mockDepartmentPrograms(): Paginated<DepartmentProgram> {
  return mockPaginated([
    {
      uuid: 'pr1',
      name: 'Mock BSc Program',
      shortName: 'BSc',
      slug: 'mock-bsc',
      description: 'Mock program',
      programType: 'BACHELORS',
      thumbnail: '/mock/programs/bsc.jpg',
    },
  ])
}

export function mockDepartmentStaffs(): Paginated<DepartmentStaff> {
  return mockPaginated([
    {
      uuid: 's1',
      title: 'Er',
      name: 'Mock Person',
      designation: 'HOD',
      photo: '/mock/staffs/1.jpg',
      phoneNumber: null,
      email: 'mock@example.com',
      message: 'Welcome',
      displayOrder: 1,
    },
  ])
}

export function mockEventGallery(): Paginated<EventGalleryItem> {
  return mockPaginated([
    { uuid: 'g1', image: '/mock/gallery/1.jpg', caption: 'Mock image 1' },
    { uuid: 'g2', image: '/mock/gallery/2.jpg', caption: 'Mock image 2' },
  ])
}

