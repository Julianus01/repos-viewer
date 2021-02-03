import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

const useTemporaryMessage = (time = 5000) => {
  const [messageTimer, setMessageTimer] = useState(null)
  const [message, setMessage] = useState('')

  const showErrorMessage = (message) => {
    messageTimer && clearTimeout(messageTimer)

    setMessage(message)
    setMessageTimer(setTimeout(() => setMessage(''), time))
  }

  const hideErrorMessage = () => {
    if (messageTimer) {
      clearTimeout(messageTimer)
      setMessage('')
    }
  }

  useEffect(() => {
    return () => {
      messageTimer && clearTimeout(messageTimer)
    }
  }, [messageTimer])

  return [message, showErrorMessage, hideErrorMessage]
}

const useQueryParams = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)

  return {
    page: params.get('page'),
  }
}

const useMountedState = () => {
  const mountedRef = useRef(false)
  const get = useCallback(() => mountedRef.current, [])

  useEffect(() => {
    mountedRef.current = true

    return () => {
      mountedRef.current = false
    }
  })

  return get
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  useTemporaryMessage,
  useQueryParams,
  useMountedState,
}
