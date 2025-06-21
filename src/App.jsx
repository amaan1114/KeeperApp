import { useState } from 'react'
import './App.css'
import Head from './layouts/head'
import Footer from './layouts/Footer'
import Content from './layouts/content'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Head></Head>
    <Content></Content>
   
    <Footer></Footer>
    

    </>
  )
}

export default App
