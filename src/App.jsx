import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componets/Navbar/Navbar'
import PriceList from './componets/PriceList/PriceList'
import Dashboard from './componets/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Navbar></Navbar>
      <h1 className='text-7xl text-purple-700' >Hellow From TailWind</h1>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
    </div>
  )
}

export default App
