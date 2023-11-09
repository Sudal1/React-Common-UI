import styled from '@emotion/styled'
import { colors } from 'lib/colors'
import Modal from '../../layout/Modal'
import Button from 'stories/inputs/Button/Button'

interface Props {
  visible: boolean
  title: string
  description?: string
  cancleText?: string
  confirmText?: string
  onClose(): void
  onConfirm(): void
  mode?: 'OK' | 'YESNO'
  danger?: boolean
}

const Dialog = ({
  visible,
  title,
  description,
  cancleText = 'Cancle',
  confirmText = 'Confirm',
  onClose,
  onConfirm,
  mode = 'OK',
  danger = false,
}: Props) => {
  return (
    <StyledModal visible={visible}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Footer>
        {mode === 'YESNO' && (
          <Button variant="tertiary" onClick={onClose}>
            {cancleText}
          </Button>
        )}
        <Button variant={danger ? 'negative' : 'primary'} onClick={onConfirm}>
          {confirmText}
        </Button>
      </Footer>
    </StyledModal>
  )
}

const StyledModal = styled(Modal)`
  width: 32rem;
  padding: 2.4rem;
`

const Title = styled.h2`
  margin: 0 auto 0.8rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.5;
  white-space: pre-wrap;
  color: ${colors.gray5};
`

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${colors.gray4};
  white-space: pre-wrap;
`

const Footer = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
  margin-top: 2.4rem;
`

export default Dialog
