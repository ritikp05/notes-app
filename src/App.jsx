import './App.scss';
import React from 'react';
import Home from './Components/Home';
import Updatenote from './Components/Updatenote';
import Viewnote from './Components/Viewnote';
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div >

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/viewnote/:id' element={<Viewnote />} />
        <Route path='/updatenote/:id' element={<Updatenote />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

export default App