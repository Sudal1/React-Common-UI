import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { colors } from 'lib/colors'

interface Props {
  variant?: 'dot' | 'counter'
  overlap?: 'rectangular' | 'circular'
  count?: number
  upperBound?: number
  children?: React.ReactNode
}

const Badge = ({
  variant = 'dot',
  overlap = 'rectangular',
  count = 0,
  upperBound = 99,
  children,
}: Props) => {
  return (
    <Container>
      <StyledBadge variant={variant} overlap={overlap} count={count} upperBound={upperBound} />
      {children}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: fit-content;
  height: 100%;
`

const StyledBadge = styled.div<Props>`
  position: absolute;
  z-index: 3;

  background: ${colors.notification};
  border: 0.2rem solid #fff;

  ${(props) =>
    props.variant === 'dot' &&
    css`
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      top: ${props.overlap === 'rectangular' ? '-0.4rem' : '0.4rem'};
      right: ${props.overlap === 'rectangular' ? '-0.4rem' : '0rem'};
    `}

  ${(props) =>
    props.variant === 'counter' &&
    css`
      &:before {
        content: '${props.count! <= props.upperBound! ? props.count : props.upperBound + '+'}';
      }

      top: ${props.overlap === 'rectangular' ? '-0.8rem' : '-0.2rem'};
      right: ${props.overlap === 'rectangular' ? '-1.2rem' : '-0.2rem'};
      min-width: ${props.count! >= 99 ? '3.2rem' : '2.4rem'};
      height: 2.4rem;
      padding: ${props.count! > 9 && '0.8rem'};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: ${props.count! > 9 ? '2.4rem' : '50%'};
      font-size: 1.2rem;
      color: #fff;
    `}
`

export default Badge
