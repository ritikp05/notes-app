import React from 'react'
import { useSelector } from 'react-redux'
import Note from './Note'
const NotesContainer = () => {
  const note = useSelector((store) => store.userSlice.data)
  const search = useSelector((store) => store.userSlice.search)
  return (
    <div className='note-container'>
      
    {
      note.length>0 ? note.filter((alldata)=>
alldata.title.includes(search.toLowerCase())
      ).map((item) => {
        console.log(item.id);
          return <Note item={item} key={item.id} id={item.id}/>
        })
      :<div className='subtitle'>Your Notes Will Appear Here</div>
    }
      
    </div>
  )
}

export default NotesContainer