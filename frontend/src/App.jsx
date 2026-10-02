import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Loading...')
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('http://35.154.176.195:8080/hello')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Backend request failed')
        }
        return response.text()
      })
      .then((data) => {
        setMessage(data)
      })
      .catch((err) => {
        setError(err.message)
      })
  }, [])

  return (
    <div>
      <h1>Applicationdp Frontend</h1>

      <h2>Backend Response</h2>

      {error ? (
        <p>{error}</p>
      ) : (
        <p>{message}</p>
      )}
    </div>
  )
}

export default App
