import { forwardRef } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useClickOutside } from 'hooks/useClickOutside'
import { POPPER_POSITION_VALUES } from './Popper.constants'

interface PopperProps {
  position: POPPER_POSITION_VALUES
  children: React.ReactNode
  buttonTop: number
  buttonLeft: number
  buttonWidth: number
  buttonHeight: number
}

const Popper = forwardRef<HTMLDivElement, PopperProps>(
  ({ position, children, ...rest }: PopperProps, ref: any) => {
    const POPPER_WIDTH = 200
    const { buttonTop, buttonLeft, buttonWidth, buttonHeight } = rest

    let horizonPos = buttonLeft
    const verticalPos = buttonHeight + buttonTop

    if (['top', 'bottom'].includes(position)) {
      horizonPos = horizonPos + buttonWidth / 2 - POPPER_WIDTH / 2 // center
    }

    return (
      <Positioner
        ref={ref}
        width={POPPER_WIDTH}
        position={position}
        horizonPos={horizonPos}
        verticalPos={verticalPos}
      >
        {children}
      </Positioner>
    )
  }
)

Popper.displayName = 'Popper'

const Positioner = styled.div<{
  position: POPPER_POSITION_VALUES
  width: number
  verticalPos: number
  horizonPos: number
}>`
  position: absolute;
  width: ${({ width }) => width}px;

  ${({ position, verticalPos }) =>
    position.startsWith('top')
      ? css`
          bottom: ${verticalPos}px;
          margin-bottom: 1.6rem;
        `
      : css`
          top: ${verticalPos}px;
          margin-top: 1.6rem;
        `}

  ${({ position, horizonPos }) =>
    position.endsWith('end')
      ? css`
          right: 0;
        `
      : css`
          left: ${horizonPos}px;
        `}
  background: #fff;
  box-shadow:
    rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.24) 0px 2px 16px 0px;
  border-radius: 0.4rem;
  z-index: 10;
`

export default Popper
