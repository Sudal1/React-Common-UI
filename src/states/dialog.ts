import { useCallback } from 'react'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

interface DialogConfig {
  title: string
  description?: string
  cancleText?: string
  confirmText?: string
  onClose?(): void
  onConfirm?(): void
  mode?: 'OK' | 'YESNO'
  danger?: boolean
}

interface DialogState {
  config: DialogConfig | null
  visible: boolean
}

const dialogState = atom<DialogState>({
  key: 'dialogState',
  default: {
    config: null,
    visible: false,
  },
})

export const useDialogState = () => {
  return useRecoilValue(dialogState)
}

export const useDialogActions = () => {
  const setState = useSetRecoilState(dialogState)

  const open = useCallback(
    (config: DialogConfig) => setState({ visible: true, config }),
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
