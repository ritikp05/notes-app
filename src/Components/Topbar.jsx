import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addData, setClose, setSearch } from '../Store/slice/slice'
import { v4 as uuidv4 } from 'uuid';
import Textarea from '@mui/joy/Textarea';
import {toast} from 'react-toastify'


const Topbar = () => {
  const state = useSelector((store) => store.userSlice)
  const dispatch = useDispatch();
  const [data, setData] = useState({
    id:'',
    title: "", description: ""
  })

  function changeHandler(e) {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev,[name]:value,id:uuidv4()}
    })
  }

  function clickHandler() {

    if (data.title && data.description) {
      dispatch(addData(data));
      dispatch(setClose());
      setData({
        title: "", description: ""
      })  
    }

    else {

      

    toast.error('Please Fill All Fields', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    }
  }

  function searchHandler(e) {
    dispatch(setSearch(e.target.value))
    console.log(state.search)
  }
  return (<>
    <div className='topbar-wrapper1'>
      <input type='text' className='topbar-input1' placeholder='Search Notes' onChange={searchHandler} />
    </div>
    {
      state.open &&
      <div className='topbar-wrapper2'>
        <input type='text' className='topbar-input2' name='title' placeholder='Title' onChange={changeHandler} value={data.title} />
        <Textarea minRows={2}  className='textarea' name='description' value={data.description} onChange={changeHandler}  placeholder="Description ..."
  />
   
        <div className='form-button'>
          <button onClick={clickHandler}>Add note</button>
          <button onClick={() => dispatch(setClose())}>Close</button>

        </div>
      </div>
    }
  </>
  )
}

export default Topbar