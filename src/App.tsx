import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-8 bg-slate-950 px-4 text-slate-100">
      <div className="flex items-center gap-6">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="h-16 w-16 motion-safe:animate-spin motion-safe:[animation-duration:8s]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-4xl font-semibold tracking-tight">Vite + React + Tailwind</h1>
      <p className="max-w-md text-center text-slate-400">
        Edit <code className="rounded bg-slate-800 px-2 py-0.5 text-sm text-violet-300">src/App.tsx</code>{' '}
        and save to test HMR.
      </p>
      <button
        type="button"
        className="rounded-lg bg-violet-600 px-5 py-2.5 font-medium text-white transition hover:bg-violet-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-violet-400"
        onClick={() => setCount((c) => c + 1)}
      >
        Count is {count}
      </button>
    </div>
  )
}

export default App
