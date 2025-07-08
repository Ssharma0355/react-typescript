import React, { useState } from 'react'

const Cop = () => {
    const [value, setValue ]= useState("");
    const handleCopy =()=>{
        navigator.clipboard.writeText(value)
        .then(()=>{
            console.log("copied value", value)
        })
        .catch(err =>{
            console.log(err)

        })
        
    }
  return (
    <div>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
        <button onClick={handleCopy}>Copy</button>
    </div>
  )
}

export default Cop
