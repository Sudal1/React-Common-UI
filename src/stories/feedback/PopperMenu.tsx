import { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { colors } from 'lib/colors'
import Button from 'stories/inputs/Button'

type Position = 'start' | 'end' | 'center'

interface PopperProps {
  position: Position

  buttonTop: number
  buttonLeft: number
  buttonWidth: number
  buttonHeight: number

  windowWidth: number
  windowHeight: number
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

  const POPPER_WIDTH = 250
  const { buttonTop, buttonLeft, buttonWidth, buttonHeight, windowWidth, windowHeight } = rest
  const top = buttonHeight + buttonTop
  let left: number | string = buttonLeft
  const right = buttonLeft + POPPER_WIDTH

  if (right > windowWidth) {
    left = 'auto'
  } else if (left > POPPER_WIDTH / 2) {
    left = left + buttonWidth / 2 - POPPER_WIDTH / 2
  }

  return (
    <Positioner ref={popperDivRef} position={position} top={top} left={left} width={POPPER_WIDTH}>
      <ul>
        <li>this is test!~</li>
        <li>This is Test!~</li>
        <li>this is also test!~</li>
      </ul>
    </Positioner>
  )
}

const Positioner = styled.div<{
  position: Position
  width: number
  top: number
  left: number | string
}>`
  position: absolute;
  justify-self: ${({ position }) => position};
  top: ${({ top }) => top}px;
  left: ${({ left }) => (typeof left === 'number' ? left + 'px' : 'auto')};
  width: ${({ width }) => width}px;
  background: #fff;
  border: 0.2rem solid ${colors.gray1};
  border-radius: 0.4rem;
`

const PopperMenu = ({ visible, position, onClick }: PopperMenuProps) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const [offsetTop, setOffsetTop] = useState(0)
  const [offsetLeft, setOffsetLeft] = useState(0)
  const [offsetWidth, setOffsetWidth] = useState(0)
  const [offsetHeight, setOffsetHeight] = useState(0)
  const [windowInnerWidth, setWindowInnerWidth] = useState(0)
  const [windowInnerHeight, setWindowInnerHeight] = useState(0)

  const updateLayout = () => {
    const buttonElement = buttonRef.current
    if (buttonElement) {
      setOffsetTop(buttonElement.offsetTop)
      setOffsetLeft(buttonElement.offsetLeft)
      setOffsetHeight(buttonElement.offsetHeight)
      setOffsetWidth(buttonElement.offsetWidth)
      setWindowInnerHeight(window.innerHeight)
      setWindowInnerWidth(window.innerWidth)
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
    <StyledDiv>
      <div>
        <Button ref={buttonRef} onClick={onClick}></Button>
      </div>

      {visible && (
        <Popper
          position={position}
          buttonTop={offsetTop}
          buttonLeft={offsetLeft}
          buttonWidth={offsetWidth}
          buttonHeight={offsetHeight}
          windowWidth={windowInnerWidth}
          windowHeight={windowInnerHeight}
        ></Popper>
      )}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: grid;
  & > div {
    justify-self: end;
  }
  border: 1px solid black;
`

export default PopperMenu
