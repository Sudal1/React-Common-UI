import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { colors } from 'lib/colors'
import Button from 'stories/inputs/Button'
import { css } from '@emotion/react'
import { useClickOutside } from 'hooks/useClickOutside'

type Position = 'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end'

interface PopperProps {
  position: Position
  children: React.ReactNode
  buttonTop: number
  buttonLeft: number
  buttonWidth: number
  buttonHeight: number
}

interface PopperMenuProps {
  position: Position
  visible: boolean
  buttonChildren: React.ReactNode
  children: React.ReactNode
  onClick(): void
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

const PopperMenu = ({ visible, position, buttonChildren, children, onClick }: PopperMenuProps) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const popperRef = useRef<HTMLDivElement | null>(null)
  useClickOutside([popperRef, buttonRef], onClick, [visible])

  const [offsetTop, setOffsetTop] = useState(0)
  const [offsetLeft, setOffsetLeft] = useState(0)
  const [offsetWidth, setOffsetWidth] = useState(0)
  const [offsetHeight, setOffsetHeight] = useState(0)

  const updateLayout = useCallback(() => {
    const buttonElement = buttonRef.current
    if (buttonElement) {
      setOffsetTop(buttonElement.offsetTop)
      setOffsetLeft(buttonElement.offsetLeft)
      setOffsetWidth(buttonElement.offsetWidth)
      setOffsetHeight(buttonElement.offsetHeight)
    }
  }, [])

  useEffect(() => {
    updateLayout()
    window.addEventListener('resize', updateLayout)

    return () => {
      window.removeEventListener('resize', updateLayout)
    }
  }, [])

  return (
    <Container>
      <Relative width={offsetWidth} height={offsetHeight}>
        <Button ref={buttonRef} onClick={onClick}>
          {buttonChildren}
        </Button>
        {visible && (
          <Popper
            ref={popperRef}
            position={position}
            buttonTop={offsetTop}
            buttonLeft={offsetLeft}
            buttonWidth={offsetWidth}
            buttonHeight={offsetHeight}
          >
            {children}
          </Popper>
        )}
      </Relative>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Relative = styled.div<{ width: number; height: number }>`
  display: inline-flex;
  position: relative;
  height: ${({ height }) => height}px;
  overflow: visible;
`

const Positioner = styled.div<{
  position: Position
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

export default PopperMenu
