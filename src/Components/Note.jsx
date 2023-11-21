import React from 'react'
import { FcReading } from "react-icons/fc";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { onDelete } from '../Store/slice/slice';
import { Link } from 'react-router-dom'
import {toast} from 'react-toastify'
import { MdModeEdit  } from "react-icons/md";
const Note = ({ item, id }) => {
  const dispatch = useDispatch()
  function handleDelete() {
    dispatch(onDelete(id))
    
    toast.success('Note deleted sucessfully', {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }


  return (
    <section className='note'>
      <div className='note-title'>
        {item.title.substring(0, 20)}{item.title.length > 19 ? '...' : ''}
      </div>
      <div className='note-desription'>{item.description.substring(0, 20)}{item.description.length > 19 ? '...' : ''}</div>
      <section>
        <Link to={`/viewnote/${id}`}>
          <FcReading className='btn1' title='View' />
        </Link>

        <Link to={`/updatenote/${id}`}>
          <MdModeEdit  className='btn2' title='Edit'/>
        </Link>

        <MdDeleteOutline className='btn3' title='Delete'
          onClick={handleDelete}
        />
      </section>

    </section>
  )
}

export default Note