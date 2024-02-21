import React from 'react'
import './Home.scss'
import { AcUnit } from '@mui/icons-material'
import Navbar from '../../Component/NavBar/Navbar'
import Feature from '../../Component/NavBar/Feature/Feature'
import List from '../../Component/List/List'

export default function Home() {
  return (
    <>
    <div className='home'>
        <Navbar/>   
        <Feature />
        <List/>
        <List/>
        <List/>
      </div>

      </>
  )
}
