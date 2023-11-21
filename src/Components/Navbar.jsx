import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { setOpen } from '../Store/slice/slice';
const Navbar = () => {
  const dispatch=useDispatch();
  return (<>

    <div className='nav_wrapper'>
        <h1 className='nav-heading'>Notes App</h1>
        <div className='nav_button'>
        <IoIosAddCircleOutline onClick={()=>dispatch(setOpen())} />
        </div>
          </div>
  </>
  )
}

export default Navbar