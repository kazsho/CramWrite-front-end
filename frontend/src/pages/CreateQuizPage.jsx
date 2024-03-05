import React from 'react'

const CreateQuizPage = () => {
  return (
    <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 mt-20'>
      <h2 className='text-2xl font-semibold'>Create a Quiz</h2>
      <div className='mt-5 flex gap-20'>
        <div className='flex-1 mb-5'> 
        <label className='block mb-1'>Title</label>
        <input type='text' placeholder='Quiz Title' className='w-full bg-[#E5DEDE] py-2 px-4 outline-none rounded-md'/>
        </div>
       
        
        </div>
        <div className='flex gap-4'> 
        <div className='flex-1'> 
        <label className='block mb-1'>Description</label>
        <textarea   placeholder='Quiz Title' className='w-full bg-[#E5DEDE] py-2 px-4 outline-none rounded-md'/>
        </div>
        <div className='flex-1'> 
        <label className='block mb-1'>Subject Area</label>
        <input type='text' placeholder='Quiz Title' className='w-full bg-[#E5DEDE] py-2 px-4 outline-none rounded-md'/>
        </div>
        </div>
    </div>
  )
}

export default CreateQuizPage