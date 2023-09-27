import { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { colors } from 'lib/colors'
import Button from 'stories/inputs/Button'
import { css } from '@emotion/react'

type Position = 'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end'

interface PopperProps {
  position: Position

  buttonTop: number
  buttonLeft: number
  buttonWidth: number
  buttonHeight: number
}

interface PopperMenuProps {
  visible: boolean
  position: Position
  onClick(): void
}

const Popper = ({ position, ...rest }: PopperProps) => {
  const popperDivRef = useRef<HTMLDivElement | null>(null)
  const [offsetHeight, setOffsetHeight] = useState<number>(0)

  useEffect(() => {
    const popperMenu = popperDivRef.current
    if (popperMenu) {
      setOffsetHeight(popperMenu.offsetHeight)
    }
  }, [])

  const POPPER_WIDTH = 400
  const { buttonTop, buttonLeft, buttonWidth, buttonHeight } = rest
  let top = buttonHeight + buttonTop
  let left = buttonLeft
  let right = buttonLeft + POPPER_WIDTH

  if (position.startsWith('top')) {
    top = buttonTop - offsetHeight
  }
  if (['top', 'bottom'].includes(position)) {
    left = left + buttonWidth / 2 - POPPER_WIDTH / 2 // center
  } else if (position.endsWith('start')) {
    left = buttonLeft
  } else {
    right = 0
  }

  return (
    <Positioner ref={popperDivRef} top={top} left={left} right={right} width={POPPER_WIDTH}>
      <ul>
        <li>this is test!~</li>
        <li>This is Test!~</li>
        <li>this is also test!~</li>
      </ul>
    </Positioner>
  )
}

const PopperMenu = ({ visible, position, onClick }: PopperMenuProps) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const [offsetTop, setOffsetTop] = useState(0)
  const [offsetLeft, setOffsetLeft] = useState(0)
  const [offsetWidth, setOffsetWidth] = useState(0)
  const [offsetHeight, setOffsetHeight] = useState(0)

  const updateLayout = () => {
    const buttonElement = buttonRef.current
    if (buttonElement) {
      setOffsetTop(buttonElement.offsetTop)
      setOffsetLeft(buttonElement.offsetLeft)
      setOffsetHeight(buttonElement.offsetHeight)
      setOffsetWidth(buttonElement.offsetWidth)
    }
  }

  useEffect(() => {
    updateLayout()
    window.addEventListener('resize', updateLayout)

    return () => {
      window.removeEventListener('resize', updateLayout)
    }
  }, [])

  return (
    <Container>
      <StyledDiv width={offsetWidth} height={offsetHeight}>
        <Button ref={buttonRef} onClick={onClick}></Button>

        {visible && (
          <Popper
            position={position}
            buttonTop={offsetTop}
            buttonLeft={offsetLeft}
            buttonWidth={offsetWidth}
            buttonHeight={offsetHeight}
          ></Popper>
        )}
      </StyledDiv>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`

const StyledDiv = styled.div<{ width: number; height: number }>`
  max-width: ${({ width }) => width + 1}px;
  height: ${({ height }) => height}px;
  overflow: visible;

  position: relative;
  border: 1px solid red;
`

const Positioner = styled.div<{
  width: number
  top: number
  left: number
  right: number
}>`
  position: absolute;
  width: 40rem;
  top: ${({ top }) => top}px;

  ${({ left, right }) =>
    right !== 0
      ? css`
          left: ${left}px;
        `
      : css`
          right: 0;
        `}

  background: #fff;
  border: 0.2rem solid ${colors.gray1};
  border-radius: 0.4rem;
  z-index: 10;
`

export default PopperMenu
