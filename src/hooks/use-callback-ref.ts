import React, { useCallback } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GenericFn = (...args: any[]) => any

export const useCallBackRef = (cb: GenericFn) => {
  const callbackRef = React.useRef<GenericFn>()
  callbackRef.current = cb
  return useCallback<GenericFn>((...args) => {
    callbackRef.current?.(...args)
  }, [])
}
