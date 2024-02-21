import React from 'react'
import './Watch.scss'
import { ArrowBackOutlined } from '@mui/icons-material'

export default function Watch() {
  return (
    <>
    <div className='watch'>
    <div className="back">
        <ArrowBackOutlined/>
        Home
        </div>
        <video src="/src/assets/SQUID GAME _ RED LIGHT GREEN LIGHT SCENE.mp4" className='video' autoPlay progress controls></video>
    </div>
    </>
  )
}
