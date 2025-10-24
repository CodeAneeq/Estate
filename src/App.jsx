import React from "react"
import { RouterProvider } from "react-router-dom"
import publicRoutes from "./routes/router"

function App() {

  return (
    <>
      {/* <Font/> */}
      <RouterProvider router={publicRoutes}></RouterProvider>
    </>
  )
}

export default App
