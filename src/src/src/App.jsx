import React, { useState } from 'react'
import Chat from './components/Chat'

export default function App() {
  const [twinName, setTwinName] = useState('')
  const [showChat, setShowChat] = useState(false)

  const startChat = () => {
    if (twinName.trim() !== '') setShowChat(true)
  }

  if (!showChat) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Welcome to LifeTwin</h1>
        <input
          type="text"
          placeholder="Enter your twin's name"
          className="border p-2 mb-4"
          value={twinName}
          onChange={(e) => setTwinName(e.target.value)}
        />
        <button
          onClick={startChat}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Start Chat
        </button>
      </div>
    )
  }

  return <Chat twinName={twinName} />
}
