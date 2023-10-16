import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Home from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
//import "./components/styles.css"

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;