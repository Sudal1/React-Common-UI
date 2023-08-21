import { css, SerializedStyles } from '@emotion/react'

export const hover = (styles: string | SerializedStyles) => css`
  @media (hover: hover) {
    &:hover:not([disabled]) {
      ${styles}
    }
  }
`
