import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { colors } from 'lib/colors'
import { Close } from '../../../lib/icons'
import Button from 'stories/inputs/Button/Button'

type variantType = 'primary' | 'positive' | 'negative' | 'warning'

interface Props {
  variant?: variantType
  leftIcon?: React.ReactNode
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLElement>
  onClose?: React.MouseEventHandler<HTMLElement>
  isVisible?: boolean
  closeable?: boolean
  hasOnclick?: boolean
}

const Toast = ({
  variant = 'primary',
  leftIcon,
  children = 'Default Toast message',
  onClick,
  onClose,
  isVisible = false,
  closeable = true,
  hasOnclick = onClick ? true : false,
}: Props) => {
  return (
    <StyledToast variant={variant} isVisible={isVisible} closeable={closeable} hasOnclick={hasOnclick}>
      {leftIcon && <LeftIcon>{leftIcon}</LeftIcon>}
      <StyledMessage>{children}</StyledMessage>
      {hasOnclick && <Button onClick={onClick} variant={variant} size="sm" />}
      {closeable && (
        <Button onClick={onClose} variant={variant} size="xs">
          <Close />
        </Button>
      )}
    </StyledToast>
  )
}

const variantStyle = {
  primary: css`
    background-color: ${colors.primary};
  `,
  positive: css`
    background-color: ${colors.positive};
  `,
  negative: css`
    background-color: ${colors.negative};
  `,
  warning: css`
    background-color: ${colors.warning};
  `,
}

const StyledToast = styled.div<Props>`
  display: flex;
  align-items: center;
  width: fit-content;
  max-width: 36rem;
  height: 4.8rem;
  padding: 0 1.6rem;
  font-size: 1.4rem;
  border-radius: 0.4rem;
  color: white;

  ${(props) => variantStyle[props.variant!]}

  & > button {
    margin-left: 2.4rem;
    margin-right: -1rem;
  }

  ${(props) =>
    props.hasOnclick &&
    css`
      button:first-of-type {
        border: 1px solid #fff;
      }
    `}
`

const StyledMessage = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const LeftIcon = styled.div`
  margin-right: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 2rem;
    height: 2rem;
  }
`

export default Toast
