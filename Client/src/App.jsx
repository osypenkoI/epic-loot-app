import { useState } from 'react'
import reactLogo from './assets/react.svg'
import HomePageComponent from "./HomePageComponent/HomePageComponent.jsx";
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePageComponent></HomePageComponent>
    </>
  )
}

export default App
