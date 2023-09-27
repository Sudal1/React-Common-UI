import { AnimatePresence, motion } from 'framer-motion'
import styled from '@emotion/styled'
import { colors } from 'lib/colors'

interface Props {
  visible: boolean
  onClick?(): void
}

const Overlay = ({ visible, onClick }: Props) => {
  return (
    <AnimatePresence initial={false}>
      {visible && (
        <Fill
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          onClick={onClick}
        />
      )}
    </AnimatePresence>
  )
}

const Fill = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  height: -moz-available;
  height: -webkit-fill-available;
  background: ${colors.gray0};
`

export default Overlay
