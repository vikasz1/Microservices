import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
    const [text, setText] = useState('')

    const fetchText = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/')
        setText(response.data)
      } catch (error) {
        console.error('Error fetching text:', error)
      }
    }

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <button
        onClick={fetchText}
        className="px-4 py-2 mb-4 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Fetch Text
      </button>
      {text && <h1 className="text-3xl font-bold text-white">{text}</h1>}
      </div>
    )
}

export default App
