import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header/Header'
import Timer from './components/timer/Timer'
import Competitors from './components/competitors/Competitors'
import VotaModal from './components/modal/VotaModal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Timer/>
      <Competitors/>
      <VotaModal/>
    </div>
  )
}

export default App
