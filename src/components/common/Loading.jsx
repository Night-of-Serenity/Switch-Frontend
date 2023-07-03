import React from 'react'
import { Oval } from 'react-loader-spinner'


function Loading() {
  return (
        <div >
            <div className='flex justify-center items-center min-h-full'>
            Loading...
            <Oval height={30} width={30} />
            </div>
        </div>
  
  )
}

export default Loading