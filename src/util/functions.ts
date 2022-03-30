export const getQueryParam = (
  searchParam: string | string[] | undefined,
  defaultValue?: string
): string => {
  if (!searchParam) return defaultValue || ''
  return Array.isArray(searchParam) ? searchParam[0] : searchParam
}

export const matchQuery = (op: any, queryname: string) =>
  op.query.definitions[0].name.value === queryname

export const shortenNumber = (value: number) => {
  const units = ['', 'K', 'M']

  let unitIndex = 0
  let scaledValue = value

  while (scaledValue >= 1000 && unitIndex < units.length - 1) {
    unitIndex += 1
    scaledValue = Math.round((scaledValue / 1000) * 100) / 100
  }

  return `${scaledValue} ${units[unitIndex]}`
}

export const addDollar = (value: string) => `$${value}`

export const getInitials = (text: string) =>
  text
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
