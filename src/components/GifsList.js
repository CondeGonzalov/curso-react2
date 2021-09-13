import {useEffect, useState} from 'react'
import getGifs from '../services/getGifs'
import Gif from './Gif'
import Loading from './Loading'

export default function GifsList ({keyword}){
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])
    //const keyword = params.keyword

    useEffect(() => {
        setLoading(true)
        getGifs({keyword: keyword}).then(gifs => {
            setGifs(gifs)
            setLoading(false)
        })
    }, [keyword])

    if(loading) return( 
        <Loading />
    )
    
    return( gifs.map(gif =>  <Gif key={gif.id} title={gif.title} id={gif.id} url={gif.url} />))
}


