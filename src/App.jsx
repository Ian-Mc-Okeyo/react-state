import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './Components/Component1'

export const NameContext = createContext()

function App() {
  const [user, setUser] = useState({
    name: "John",
    age: 20,
    country: "Kenya"
  })

  return (
    <>
      <h1 style={{fontSize: "5em"}}>APP</h1>
      <button onClick={()=>setName("Sam")}>Change Name</button>

      <NameContext.Provider value={[user, setUser]}>
        <Component1/>
      </NameContext.Provider>
      
    </>
  )
}

export default App
