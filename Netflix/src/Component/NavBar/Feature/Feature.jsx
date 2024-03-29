import React from 'react'
import './Feature.scss'
import { InfoOutlined, PlayArrow } from '@mui/icons-material'

export default function Feature({type}) {
  return (
    <>
    <div className='feature'>
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adveture</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-Fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentry">Documentry</option>
                    
                </select>
            </div>
        )}
        <img src="/src/assets/bg1.jpg" alt="" />
        <div className="info">
            <img src="/src/assets/matrix.jpg" alt="" />
            <span className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sunt assumenda consequatur inventore nesciunt voluptatibus quibusdam, sequi porro delectus, dolorum tempora doloribus sapiente nemo quae harum, cumque eius dolorem. Sed!
            </span>
            <div className="buttons">
                <button className='play'>
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className='more'>
                    <InfoOutlined/>
                    <span>Info </span>
                </button>
            </div>
        </div>
    </div> 
    </>
  )
}
