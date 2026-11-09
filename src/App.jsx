import { useState } from 'react'
import Box from './Box.jsx'

export default function App() {
  const [message, setMessage] = useState('Kattintson valamelyik gombra')

  return (
    <main>
      <p aria-live="polite">{message}</p>
      <div className="boxes">
        <Box text="első" onClick={() => setMessage('Clicked!')} />
        <Box text="második" onClick={() => setMessage('Clicked!')} />
        <Box text="harmadik" onClick={() => setMessage('Clicked!')} />
      </div>
    </main>
  )
}
