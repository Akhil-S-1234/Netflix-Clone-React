import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constants/constants'

function RowPost(props) {

    const [movies,setMovies] = useState([])
    const [urlId,setUrlId] = useState('')
    
    useEffect(()=>{

        axios.get(props.url)
        .then((response)=>{
             const results = response.data.results
             setMovies(results)
        })
        .catch((error)=>{
             console.log(error)
        })

    },[])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const handleMovie = (id) =>{
          console.log(id)
          axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
            .then((response) =>{
                
               if(response.data.results.length!=0){
                setUrlId(response.data.results[0])
               } else {
                console.log('Array is empty')
               }
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>

                {movies ?   movies.map( movie => (
                    
                    <img onClick={()=> handleMovie(movie.id)} className={props.isSmall ? 'smallPoster' :'poster'} alt='poster' src={`${movie ? imageUrl + movie.backdrop_path : 'Loading...'}`} />
                     
                )) : 'Loading...'
                }

            </div>
           { urlId && <Youtube videoId = {urlId.key} opts ={opts} />}
        </div>
    )
    
}

export default RowPost
