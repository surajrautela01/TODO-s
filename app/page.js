"use client"
import React, { useState } from 'react'

const page = () => {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])
  const a  = "TODO'S LIST"
  const submithandler=(e)=>{
    e.preventDefault()
    console.log(title);
    console.log(desc);
    setmaintask([...maintask,{title,desc}])
    settitle("")
    setdesc("")
    console.log(maintask)

  };
  const deletehandler=(i)=>{
    let dlt = [...maintask]
    dlt.splice(i,1)
    setmaintask(dlt)
  }
  let rendertask = <h2>No Task Available </h2>
  if (maintask.length > 0){
  rendertask= maintask.map((t,i)=>{
return(
  <li key={i} className='flex items-center justify-between mb-8'>
<div className=' flex items-center justify-between mb-5 w-2/3'>
  <h3 className='text-2xl font-semibold' > <h1 className=' font-bold text-2xl text-gray-50'>TITLE</h1> <br></br>{t.title}</h3>
  <h4 className='text-lg font-medium'><h1 className=' font-bold text-2xl text-gray-50'>DESCRIPTION</h1> <br></br>{t.desc}</h4>
</div>
<button onClick={()=>{deletehandler(i)}
} className='bg-red-400 text-white px-4 py-2 rounded font-bold'>DELETE</button>
</li>
);
  });
}
  return (
<>
    <h1 className='  p-5  font-bold bg-black text-white text-5xl'> {a}</h1>
    <form onSubmit={submithandler} >
      <input 
      type='text'
      className=' text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
      placeholder='Enter your task'
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)

      }}
      
      />
         <input 

         
      type='text'
      className=' text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
      placeholder='Enter Your Descriton Here'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
        

      }}
      />
    
      <button
      type="submit"
         className = "bg-black text-white x-4 py-3 w-auto text-2xl font-bold rounded m-4">Add Task
      </button>
    </form>
    <hr />
    <div className='p-8 bg-black 200 text-white '><ul>{rendertask}</ul></div>
    </>
  )
}

export default page