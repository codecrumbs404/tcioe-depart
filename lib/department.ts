// Maps short department codes to API slugs
// Extend as needed. Provided examples focus on doas, doece.
const CODE_TO_SLUG: Record<string, string> = {
  // Department of Applied Science
  doas: 'department-of-applied-science',
  // Department of Electronics & Computer Engineering
  doece: 'department-of-electronics-computer-engineering',
  // Add others as discovered
  // doarch: 'department-of-architecture',
  // doame: 'department-of-automobile-mechanical-engineering',
  // dociv: 'department-of-civil-engineering',
  // doie: 'department-of-industrial-engineering',
}

export function departmentSlugFromCode(code: string): string | undefined {
  return CODE_TO_SLUG[code.toLowerCase()]
}

export function supportedDepartmentCodes(): string[] {
  return Object.keys(CODE_TO_SLUG)
}

