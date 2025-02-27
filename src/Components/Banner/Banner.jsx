import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'


function Banner() {
    
     const [movie, setMovie] = useState(null)

     useEffect(() => {

        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
        .then((response)=>{
            const results = response.data.results
            const randomIndex = Math.floor(Math.random()*results.length)
            setMovie(response.data.results[randomIndex])
        })

     },[])
   
    return (
        <div 
         className='banner' style={ {backgroundImage : `url(${movie ? imageUrl + movie.backdrop_path : 'loading...'} )`}}>
            <div className='content' >
                <h1 className='title'> {movie ? movie.name|| movie.title : 'Loading...'} </h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : 'Loading...'}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )

}

export default Banner
