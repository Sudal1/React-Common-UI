import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useClickOutside } from 'hooks/useClickOutside'
import { POPPER_POSITION_VALUES } from '../Popper/Popper.constants'
import Popper from '../Popper/Popper'
import Button from 'stories/inputs/Button/Button'

interface PopperMenuProps {
  position: POPPER_POSITION_VALUES
  visible: boolean
  buttonChildren: React.ReactNode
  children: React.ReactNode
  onClick(): void
}

const PopperMenu = ({ visible, position, buttonChildren, children, onClick }: PopperMenuProps) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const popperRef = useRef<HTMLDivElement | null>(null)

  // useClickOutside([popperRef, buttonRef], onClick, [visible])

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

export default PopperMenu
