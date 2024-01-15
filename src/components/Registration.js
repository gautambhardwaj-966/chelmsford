import React from 'react'
import Header from './Header';

const Registration = () => {
  return (
    //Check if image can fit in whole screen
    <div>
    <div className='absolute'>
        <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
        <form className='absolute my-36 p-12 w-3/12 bg-black mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4 mx-4'>REGISTER HERE</h1>
            <input className='p-4 my-4 w-full bg-gray-700 rounded-lg' type="text" placeholder='Full Name'/>
            <input className='p-4 my-4 w-full bg-gray-700 rounded-lg' type="text" placeholder='Email address'/>
            <input className='p-4 my-4 w-full bg-gray-700 rounded-lg' type="password" placeholder='Password'/>
            <input className='p-4 my-4 w-full bg-gray-700 rounded-lg' type="password" placeholder='Confirm Password'/>
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg">Submit</button>
        </form>
    </div>
    

  )
}

export default Registration;
