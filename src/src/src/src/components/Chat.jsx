import React, { useState } from 'react'

export default function Chat({ twinName }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (input.trim() === '') return
    setMessages([...messages, { sender: 'You', text: input }])
    setMessages((prev) => [
      ...prev,
      { sender: twinName, text: `AI response to: ${input}` },
    ])
    setInput('')
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">{twinName} 🤖</h1>
      <div className="border w-full max-w-md h-96 overflow-y-scroll p-2 mb-4">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <strong>{msg.sender}: </strong>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="flex w-full max-w-md">
        <input
          type="text"
          className="border p-2 flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 ml-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  )
}
