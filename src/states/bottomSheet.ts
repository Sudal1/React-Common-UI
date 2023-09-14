import { useCallback } from 'react'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

interface BottomSheetItem {
  name: string
  onClick(): void
}

interface BottomSheetState {
  visible: boolean
  items: BottomSheetItem[]
}

const bottomSheetState = atom<BottomSheetState>({
  key: 'bottomSheetState',
  default: {
    visible: false,
    items: [],
  },
})

export const useBottomSheetState = () => {
  return useRecoilValue(bottomSheetState)
}

export const useBottomSheetActions = () => {
  const setState = useSetRecoilState(bottomSheetState)

  const open = useCallback(
    (items: BottomSheetItem[]) => setState({ visible: true, items }),
    [setState]
  )

  const close = useCallback(
    () =>
      setState((prev) => {
        return { ...prev, visible: false }
      }),
    [setState]
  )

  return { open, close }
}
