import { useState } from 'react'
import gallus from './assets/GALLUS 2024.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="./assets/Gallus 2024.png" target="_blank" className=' size-2'>
          <img src={gallus} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1 className='size-1'>Atletica Gallus</h1>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <a>
          <p>
          Em manutenção
        </p>
        </a>
      </div>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-500">
        Tailwind CSS no React com TypeScript!
      </h1>
    </div>
      
    </>
  )
}

export default App
