import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Registration from './Registration';

const Body = () => {

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Registration/>
    },
    {
        path:"/registration",
        element:<Registration/>
    }

])

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;
