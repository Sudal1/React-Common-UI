import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { colors } from 'lib/colors'

type sizeType = 'sm' | 'md' | 'lg'

interface Props {
  size?: sizeType
  text?: string
  src?: string
  disabled?: boolean
}

const Avatar = ({ size = 'md', text, src, disabled = false }: Props) => {
  if (src) {
    return (
      <StyledAvatar size={size} disabled={disabled}>
        <StyledImage src={src} />
      </StyledAvatar>
    )
  }

  return (
    <StyledAvatar size={size} disabled={disabled}>
      {text && <StyledText>{findFirstAlphabet(text)}</StyledText>}
    </StyledAvatar>
  )
}

const findFirstAlphabet = (inputString: string) =>
  inputString
    .toLowerCase()
    .split('')
    .find((char) => /[a-z가-힣]/.test(char)) || null

const sizeStyle = {
  sm: css`
    width: 2.8rem;
    height: 2.8rem;
    font-size: 1.2rem;
  `,
  md: css`
    width: 3.6rem;
    height: 3.6rem;
    font-size: 1.6rem;
  `,
  lg: css`
    width: 4.8rem;
    height: 4.8rem;
    font-size: 2.4rem;
  `,
}

const StyledAvatar = styled.div<Props>`
  display: flex;
  border-radius: 50%;
  background: ${colors.primaryLight};
  ${(props) => sizeStyle[props.size!]}

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.4;
      filter: grayscale(0.7);
      cursor: not-allowed;
    `}
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`

const StyledText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #fff;
  text-transform: uppercase;
`

export default Avatar
