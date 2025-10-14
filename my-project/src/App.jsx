import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css' // pastikan ini berisi 3 baris import tailwind

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="root" className="flex flex-col justify-center items-center w-full min-h-screen text-center bg-[#1e1e1e]"
>
      {/* Logo Section */}
      <div className="flex justify-center items-center gap-6">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            alt="Vite logo"
            className="h-24 p-6 transition-filter duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            alt="React logo"
            className="h-24 p-6 transition-filter duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] motion-safe:animate-[spin_20s_linear_infinite]"
          />
        </a>
      </div>

      {/* Judul */}
      <h1 className="text-4xl font-bold mt-8">Vite + React</h1>

      {/* Card Section */}
      <div className="p-8">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          count is {count}
        </button>

        <p className="mt-4 text-gray-700">
          Edit <code className="font-mono">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Footer */}
      <p className="text-gray-500">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
