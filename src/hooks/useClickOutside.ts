import { useEffect } from 'react'

type Event = MouseEvent | TouchEvent

export function useClickOutside<T extends HTMLElement = HTMLElement>(
  refs: (React.RefObject<T> | React.RefObject<HTMLButtonElement>)[],
  callback: (event: Event) => void,
  deps?: any[]
) {
  useEffect(() => {
    const listener = (event: Event) => {
      let flag = true

      for (const ref of refs) {
        const el = ref?.current

        if (el === null || el.contains(event?.target as Node)) {
          flag = false
        }
      }

      if (flag) callback(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [refs, callback, ...(deps ?? [])]) // Reload only if refs or callback changed
}
