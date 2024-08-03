import React from 'react'
import Messege from './Messege/page'
import Browser from './Brower/page'

const page = () => {
  return (
    <div>
      <div className=' w-full h-screen flex justify-center items-center gap-5 '>
        <div className='w-96 h-5/6 bg-purple-600 '></div>
        <div className='w-2/3 h-5/6 bg-red-600 '></div>
      </div>
    </div>
  )
}

export default page