import { useState, useEffect } from 'react'
import { Globe } from "./components/Globe"
import axios from 'axios'
function App() {
  const [myName, setMyName] = useState<string | null>(null)
  useEffect(()=>{
    axios.get('/api/now/table/sys_user?sysparm_query=sys_id=javascript:gs.getUserID()')
    .then(r => {
      console.log('My profile data from ServiceNow: ',r)
      setMyName(r.data.result[0].name)
    })
  },[])
  return (
    <>
      <div className="flex flex-col items-center min-h-screen relative pt-36">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 z-10 mb-12">
          ServiceNow ❤️ React !!!
        </span>
       {myName && <span className="text-center text-2xl font-semibold leading-none z-10 mb-12">
          Logged in as {myName}
        </span>}
        <Globe className="mt-68" />
      </div>
    </>
  )
}

export default App
