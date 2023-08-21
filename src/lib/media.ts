const breakpoints = {
  mobile: 500,
  tablet: 768,
  desktop: 1024,
  wide: 1200,
  xwide: 1440,
} as const

type BreakpointName = keyof typeof breakpoints

type Media = Record<BreakpointName, string>

export const mediaQuery = (width: number) => `@media (mid-width: ${width}px)`

export const media = Object.entries(breakpoints).reduce((acc, [name, width]) => {
  acc[name as BreakpointName] = mediaQuery(width)
  return acc
}, {} as Media)

export const isMobile = () => {
  return window.innerWidth < 500
}
