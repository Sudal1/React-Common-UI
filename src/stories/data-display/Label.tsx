import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { colors } from 'lib/colors'

interface Props {
  size?: 'sm' | 'md'
  isActive?: boolean
  children: string
}

const Chip = ({ size = 'sm', isActive = false, ...rest }: Props) => {
  return (
    <>
      <StyledChip size={size} isActive={isActive}>
        {rest.children}
      </StyledChip>
    </>
  )
}

const sizeStyle = {
  sm: css`
    font-size: 1.2rem;
    padding: 0 1.2rem;
    height: 2.8rem;
  `,
  md: css`
    font-size: 1.4rem;
    padding: 0 1.6rem;
    height: 3.2rem;
  `,
}

const StyledChip = styled.span<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1.2rem 0 0;
  border-radius: 2.4rem;
  transition: all 0.25s;

  &:last-child {
    margin: 0;
  }

  ${(props) => sizeStyle[props.size!]}

  background: ${(props) => (props.isActive ? `${colors.primary}` : `${colors.gray0}`)};
  color: ${(props) => (props.isActive ? '#fff' : `${colors.gray5}`)};
`

export default Chip
