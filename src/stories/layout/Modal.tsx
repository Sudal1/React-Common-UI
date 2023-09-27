import { AnimatePresence, motion } from 'framer-motion'
import styled from '@emotion/styled'
import Overlay from './Overlay'

interface Props {
  visible: boolean
  className?: string
  children: React.ReactNode
}

const Modal = ({ visible, className, children }: Props) => {
  return (
    <>
      <Overlay visible={visible} />
      <Positioner>
        <AnimatePresence>
          {visible && (
            <Block
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, ease: [0, 0.71, 0.2, 1.01] },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.3 },
              }}
              className={className}
            >
              {children}
            </Block>
          )}
        </AnimatePresence>
      </Positioner>
    </>
  )
}

const Positioner = styled.div`
  display: grid;
  place-items: center;
`

const Block = styled(motion.div)`
  background: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
  border-radius: 0.4rem;
  position: relative;
  z-index: 999;
`

export default Modal
