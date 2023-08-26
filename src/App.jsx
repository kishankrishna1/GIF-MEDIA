import React, { useState } from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

const App = () => {

  const [tag, setTag] = useState(false);

  return (
    <div className="w-full h-full min-h-[100vh] flex flex-col background relative">
      <h1 className="bg-white rounded-lg  w-11/12 text-center mt-[40px] p-2 mx-auto text-4xl font-bold items-center " >GIFS MEDIA</h1>
      <div className='bg-white rounded-lg  w-11/12 mt-[40px] p-2 mx-auto text-xl font-bold flex gap-[30px]  justify-center items-center flex-wrap'>

        <h1 className='bg-gray-400 py-1 px-3 rounded-[5px] cursor-pointer ' 
         onClick={()=> setTag(false)}
         >Random GIF</h1>
        <h1 className='bg-gray-400  py-1 px-3 rounded-[5px] cursor-pointer'
          onClick={()=> setTag(true)}
        >search Random GIF</h1>

      </div>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px] " >
      {
        tag ? (<Tag />) : (<Random/>) 
      }
        
        
      </div>
    </div>
  )
}

export default App

