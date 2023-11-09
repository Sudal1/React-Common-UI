export const POPPER_POSITION = {
  TOP_START: 'top-start',
  TOP_END: 'top-end',
  BOTTOM_START: 'bottom-start',
  BOTTOM_END: 'bottom-end',
} as const

export type POPPER_POSITION_VALUES = (typeof POPPER_POSITION)[keyof typeof POPPER_POSITION]
