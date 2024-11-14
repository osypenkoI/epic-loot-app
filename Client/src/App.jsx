import { useState } from 'react'
import reactLogo from './assets/react.svg'
import HomePageComponent from "./HomePageComponent/HomePageComponent.jsx";
import viteLogo from '/vite.svg'
import './App.css'
import ProductPageComponent from './ProductPageComponent/ProductPageComponent.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductPageComponent/>
    </>
  )
}

export default App
