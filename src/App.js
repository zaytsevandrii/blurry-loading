import { useEffect, useRef, useState } from "react"
import "./App.scss"

function App() {
  const ref=useRef()
  const[load,setLoad] = useState(0)
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
  useEffect(()=>{
    setInterval(blurring,30)
  },[])
  const blurring=()=>{
    setLoad(prev=>prev>98?100:prev+1)
   /*  ref.current.style.opacity=scale(load,0,100,1,0) */
  }

  
    return (
        <>
            <section className="bg" style={{filter:`blur(${scale(load,0,100,30,0)}px)`}}></section>
            <div className="loading-text" style={{opacity:`${scale(load,0,100,1,0)}`}}>{load}%</div>
        </>
    )
}

export default App
