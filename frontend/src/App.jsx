import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [joks, setJoks] = useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
      setJoks(res.data)
    }).catch((err)=>{
      console.log("Error")
    })
  },[])

  return (
    <>
    <h1>Full Stack </h1>
    <p>JOKS : {joks.length}</p>
    {joks.map((joks,index)=>(<div key={joks.id}>
      <h2>{joks.titel}</h2>
      <p>{joks.content}</p>
    </div>))}
    </>
  )
}

export default App
