import React, {useState, useEffect} from 'react'
import api from "../api";

export default function FilmDetails(props) {

    const [film, setFilm] = useState({})
    const [loaded, setLoading] = useState(false)

    useEffect(()=>{api.films.fetchById(props.match.params._id).then(film =>
        setFilm(film),
        setLoading(true),
        console.log(film)
    )}, [])

    return(
        <div>
        {loaded ? (
            <div className='content'>
                <div className='ui two cards'>
                    <div className='image'>
                        <img src={film.img} alt='img'/>
                    </div>
                    <div className='container right'>
                        <h3 className='item'> title: {film.title} </h3>
                        <h3 className='item'> description: {film.description}</h3>
                        <h3 className='item'> director: {film.director} </h3>
                    </div>
                </div>
            </div>
            ): (
                <div>
                    sorry no film
                </div>
            )
        }
        </div>
    )
}