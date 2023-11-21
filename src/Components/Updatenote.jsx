import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { onEdit } from '../Store/slice/slice';
import { useNavigate, useParams } from 'react-router-dom';
import Textarea from '@mui/joy/Textarea';
import { toast } from 'react-toastify'


const Updatenote = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const notes = useSelector((store) => store.userSlice.data)
  const olddata = notes.filter((item) => item.id === id)
  const { title, description } = olddata[0];
  const [newdata, setNewdata] = useState({
    id,
    title,
    description
  });
  function changeHandler(e) {
    const { name, value } = e.target;
    setNewdata((prev) => {
      return {
        ...prev, [name]: value
      }
    })
  }

  function updatedata() {
    if (newdata.title && newdata.description) {
      dispatch(onEdit(newdata));
      navigate('/')

      
  }
else{
  toast.error('please fill both input Feild', {
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
  return (
    <>
      <div className='updatenote-container'>
        <input type='text' className='input1' name='title' value={newdata.title} onChange={changeHandler} placeholder='Title ...' />
        <Textarea minRows={2} className='textarea' name='description' value={newdata.description} onChange={changeHandler} placeholder="Description ..."
        />
        <div className='button-container'>
          <button className='btn' onClick={updatedata}>Update</button>
          <button className='btn' onClick={() => navigate('/')}>Close</button>

        </div>
      </div>

    </>
  )
}

export default Updatenote