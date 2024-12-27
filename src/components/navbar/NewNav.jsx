import React from 'react'

const NewNav = () => {
  return (
    <div className='w-screen mt-12'>
        <navbar className =" w-[100%] h-12 flex items-center justify-evenly bg-transparent border-b-white border-b-[1px] text-lg text-white" >
          
            <button id = "Program" className="text-lg text-white hover:underline-white">Program</button>
            <button id = "Recorded-Lectures" className="text-lg text-white">Recorded Lectures</button>
            <button id = "Job-oriented-courses" className="text-lg text-white">Job Oriented Courses</button>
            <button id = "Projects" className="text-lg text-white">Projects</button>
            <button id = "Workshops" className="text-lg text-white">Workshops</button>
            <button id = "Learn-and-Earn" className="text-lg text-white">Learn and Earn</button>
            <button id = "Certificate-Verification" className="text-lg text-white">Certificate Verification</button>
          
        </navbar>

    </div>
  )
}

export default NewNav