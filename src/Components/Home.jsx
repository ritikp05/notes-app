import { useSelector } from 'react-redux/es/hooks/useSelector'
import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Topbar from './Topbar'
import NotesContainer from './NotesContainer'

const Home = () => {
  
  const data = useSelector((store) => store.userSlice.data);
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data])
  return (
    <div className='wrapper'>
      <Navbar />
      <Topbar />
      <NotesContainer />
    </div>
  )
}

export default Home