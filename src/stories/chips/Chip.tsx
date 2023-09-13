import type { ReactNode } from 'react'
import styled from '@emotion/styled'
import { colors } from 'lib/colors'

interface Props {
  isActive?: boolean
  children: ReactNode
}

const Chip = ({ isActive = false, ...rest }: Props) => {
  return (
    <>
      <StyledChip isActive={isActive}>{rest.children}</StyledChip>
    </>
  )
}

const StyledChip = styled.span<Props>`
  margin: 0 1.2rem 0 0;
  padding: 1rem 1.6rem;
  font-size: 1.4rem;
  border-radius: 3.2rem;
  background: ${(props) => (props.isActive ? `${colors.primary}` : `${colors.gray0}`)};
  color: ${(props) => (props.isActive ? '#fff' : `${colors.gray5}`)};
  display: inline-block;
  transition: all 0.25s;

  &:last-child {
    margin: 0;
  }
`

export default Chip
