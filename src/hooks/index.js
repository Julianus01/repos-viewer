import { useEffect, useState } from 'react'

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

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  useTemporaryMessage,
}
