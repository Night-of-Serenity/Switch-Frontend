import React from 'react'
import { Oval } from 'react-loader-spinner'


function Loading() {
  return (
        <div >
            <div className='flex justify-center items-center min-h-full'>
            Loading...
            <Oval/>
            </div>
        </div>
  
  )
}

export default Loading