import { Globe } from "./components/Globe"

function App() {

  return (
    <>
      <div className="flex flex-col items-center min-h-screen relative pt-36">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 z-10 mb-12">
          ServiceNow ❤️ React
        </span>
        <Globe className="mt-48" />
      </div>
    </>
  )
}

export default App
