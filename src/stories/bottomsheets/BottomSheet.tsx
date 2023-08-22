import { AnimatePresence, motion } from 'framer-motion'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { colors } from 'lib/colors'
import { media } from 'lib/media'
import { hover } from 'lib/styles'
import Overlay from './Overlay'

interface Item {
  name: string
  onClick(): void
}

interface Props {
  visible: boolean
  items: Item[]
  onClose(): void
}

const BottomSheet = ({ visible, items, onClose }: Props) => {
  return (
    <>
      <Overlay visible={visible} onClick={onClose} />
      <Positioner>
        <AnimatePresence>
          {visible && (
            <Sheet
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '100%' }}
              transition={{
                damping: 0,
              }}
            >
              <Items onClick={onClose}>
                {items.map((item) => (
                  <Item key={item.name} onClick={item.onClick}>
                    {item.name}
                  </Item>
                ))}
              </Items>
            </Sheet>
          )}
        </AnimatePresence>
      </Positioner>
    </>
  )
}

const Positioner = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`

const Sheet = styled(motion.div)`
  width: 100%;
  background: white;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  ${media.tablet} {
    width: 380px;
    border-radius: 4px;
  }
`

const Items = styled.div`
  display: flex;
  flex-direction: column;
`

const Item = styled.div`
  padding: 16px;
  color: ${colors.gray3};
  cursor: pointer;

  ${hover(css`
    background: ${colors.gray0};
  `)}
`

export default BottomSheet
