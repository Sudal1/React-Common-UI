import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { colors } from 'lib/colors'

interface Props {
  size?: 'sm' | 'md' | 'lg'
  children?: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
  onClick?(): void
}

const MenuItem = ({ size = 'md', children = 'MenuItem text', icon, disabled, onClick }: Props) => {
  return (
    <>
      <StyledMenuItem size={size} disabled={disabled} onClick={onClick}>
        {icon && <LeftIcon>{icon}</LeftIcon>}
        {children}
      </StyledMenuItem>
    </>
  )
}

const sizeStyle = {
  sm: css`
    font-size: 1.4rem;

    svg {
      width: 2.2rem;
      height: 2.2rem;
    }
  `,
  md: css`
    font-size: 1.6rem;

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `,
  lg: css`
    font-size: 2rem;

    svg {
      width: 3.2rem;
      height: 3.2rem;
    }
  `,
}

const StyledMenuItem = styled.div<Props>`
  display: flex;
  align-items: center;
  transition: all 0.5s ease;
  box-sizing: border-box;
  color: ${colors.gray3};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primaryHoverLight};
    border-radius: 0.4rem;
  }

  &:active {
    &:hover {
      background-color: ${colors.primaryActiveLight};
      border-radius: 0.4rem;
    }
  }

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.4;
      filter: grayscale(0.7);
      cursor: not-allowed;
    `}

  ${(props) => sizeStyle[props.size!]}
`
const LeftIcon = styled.div<Props>`
  margin-right: 1.2rem;
`

export default MenuItem
