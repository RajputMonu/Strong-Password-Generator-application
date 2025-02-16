import { useState } from 'react'
import PasswordGen from './PasswordGen'

function App() {
  const [psStatus, setPsStatus] = useState(false)

  return (
    <>
      <PasswordGen/>
    </>
  )
}

export default App
