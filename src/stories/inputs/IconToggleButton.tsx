import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { colors } from 'lib/colors'

type SizeType = 'sm' | 'md' | 'lg'
type colorType = 'primary' | 'liked' | 'positive' | 'negative'

interface Props {
  size?: SizeType
  color?: colorType
  inactiveIcon: React.ReactNode
  activeIcon: React.ReactNode
  isActive?: boolean
  onClick?(): void
  disabled?: boolean
}

function IconToggleButton({
  size = 'md',
  color = 'primary',
  isActive,
  inactiveIcon,
  activeIcon,
  onClick,
  disabled = false,
}: Props) {
  return (
    <StyledButton onClick={onClick} size={size} disabled={disabled}>
      {isActive ? <StyledSvg color={color}>{activeIcon}</StyledSvg> : <>{inactiveIcon}</>}
    </StyledButton>
  )
}

const sizeStyle = {
  sm: css`
  width: 1.6rem;
  height: 1.6rem;
  
    }
  `,
  md: css`
    width: 2.4rem;
    height: 2.4rem;
  `,
  lg: css`
    width: 3.2rem;
    height: 3.2rem;
  `,
}

const colorStyle = {
  primary: css`
    color: ${colors.primary};
    }
  `,
  liked: css`
    color: ${colors.liked};
  `,
  positive: css`
    color: ${colors.positive};
  `,
  negative: css`
    color: ${colors.negative};
  `,
}

const StyledButton = styled.button<{ size: SizeType; disabled: boolean }>`
  position: relative;
  padding: 0;
  border: none;
  outline: none;
  background: none;
  color: ${colors.gray3};

  svg {
    width: 100%;
    height: 100%;
  }

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.4;
      filter: grayscale(0.7);
      cursor: not-allowed;
    `}

  ${(props) => sizeStyle[props.size!]}

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.4;
      filter: grayscale(0.7);
      cursor: not-allowed;
    `}
`

const StyledSvg = styled.span<{ color: colorType }>`
  ${(props) => colorStyle[props.color!]}
`

export default IconToggleButton
