import React, { useState } from 'react'
import './ListItem.scss'
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'

export default function ListItem({index}) {
  const[isHovered, setIsHovered] = useState(false); 
  const trailer = "/src/assets/Squid Game _ Official Trailer _ Netflix.mp4"
  return (
    <>
    <div className='listItem' style={{left: isHovered && index * 225 - 50 + index * 2.5}}
    onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}
    >
      <img src="/src/assets/squid.jpeg" alt="" />

      {isHovered && (
        <>

        <video src={trailer} autoPlay={true} loop></video>
      
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className='icon'/>
          <Add className='icon'/>
          <ThumbUpAltOutlined className='icon'/>
          <ThumbDownAltOutlined className='icon'/>
        </div>
        <div className="itemInfoTop">
          <span>4 hour 14 mins</span>
          <span className='limit'>+18</span>
          <span>2021</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa quibusdam excepturi laboriosam aliquid fuga omnis maiores.
        </div>
        <div className="genre">Action</div>
      </div>
       </>
       )}
       </div>
    </>
    )
}
