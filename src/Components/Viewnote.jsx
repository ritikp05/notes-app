import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { IoMdArrowRoundBack } from "react-icons/io";

const Viewnote = () => {
    const { id } = useParams();
    const navigate=useNavigate();
    const data = useSelector((store) => store.userSlice.data)
    const singledata = data.filter((item) => {
        return item.id === id
    })
    return (
        <>

<IoMdArrowRoundBack  className='goback-button' onClick={()=>navigate('/')}/>
        <div className='viewnote-container'>
          
          <section>
          <h4 className='viewnote-title'>
                {singledata[0].title}
            </h4>
            <p className='viewnote-desc'>
                {singledata[0].description}
            </p>
          </section>  
        </div>
        </>
    )
}

export default Viewnote