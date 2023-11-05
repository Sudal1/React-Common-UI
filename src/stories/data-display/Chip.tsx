import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { colors } from 'lib/colors'
import { Close } from '../../lib/icons'

interface Props {
  size?: 'sm' | 'md'
  isActive?: boolean
  readOnly?: boolean
  children: React.ReactNode
  leftIcon?: React.ReactNode
  onClick?(): void
  onRomove?(): void
}

const Chip = ({
  size = 'sm',
  isActive = false,
  readOnly = false,
  leftIcon,
  onClick,
  onRomove,
  ...rest
}: Props) => {
  return (
    <StyledChip size={size} isActive={isActive} readOnly={readOnly}>
      <StyledClick onClick={onClick}>
        {leftIcon && <StyledLeftIcon>{leftIcon}</StyledLeftIcon>}
        {rest.children}
      </StyledClick>

      {!readOnly && (
        <StyledClose isActive={isActive} onClick={onRomove}>
          <Close />
        </StyledClose>
      )}
    </StyledChip>
  )
}

const sizeStyle = {
  sm: css`
    font-size: 1.2rem;
    height: 2.8rem;

    svg {
      width: 1.4rem;
      height: 1.4rem;
    }
  `,
  md: css`
    font-size: 1.4rem;
    height: 3.2rem;

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  `,
}

const stateColorStyle = {
  active: css`
    &:active {
      background: ${colors.primaryActive};
    }

    &:hover {
      background: ${colors.primaryHover};
    }
  `,
  default: css`
    &:active {
      background: ${colors.primaryActiveLight};
    }

    &:hover {
      filter: brightness(0.95);
    }
  `,
}

const StyledChip = styled.div<Props>`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1.2rem 0 0;
  border-radius: 0.4rem;
  transition: all 0.25s;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  pointer-events: none;

  &:last-child {
    margin: 0;
  }

  background: ${(props) => (props.isActive ? `${colors.primary}` : `${colors.primaryHoverLight}`)};
  color: ${(props) => (props.isActive ? `white` : `${colors.gray5}`)};

  ${(props) => sizeStyle[props.size!]}
  ${(props) => !props.readOnly && stateColorStyle[props.isActive ? 'active' : 'default']}
`

const StyledClick = styled.div`
  padding: 0 0.8rem;
  pointer-events: auto;

  ${(props) =>
    props.onClick &&
    css`
      cursor: pointer;
    `}
`

const StyledLeftIcon = styled.span`
  margin-right: 0.4rem;
`

const StyledClose = styled.button<Props>`
  margin-left: -0.4rem;
  margin-right: 0.4rem;
  cursor: pointer;
  padding: 0.2rem 0.2rem 0;
  border-radius: 0.4rem;
  border: 0;
  pointer-events: auto;

  background: ${(props) => (props.isActive ? `${colors.primary}` : `${colors.primaryHoverLight}`)};

  svg {
    color: ${(props) => (props.isActive ? 'white' : `${colors.gray5}`)};
  }

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.85);
  }
`

export default Chip
