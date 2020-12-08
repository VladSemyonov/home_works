import React, {useEffect, useState} from "react"
import api from "../api"
import FilmsList from "./films"
import {AppContext} from './App'
import {orderBy, find} from 'lodash';
import AdminRoute from "./AdminRoute";


function FilmsPage(props) {

    const [films, setFilms] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        api.films
            .fetchAll()
            .then(films =>
                setFilms(sortFilms(films)),
            ),
            setIsLoading(false)
    })

    const sortFilms = films => orderBy(films, ["featured", "title"], ["desc", "asc"])

    const toggleFeatured = id => {
        const film = find(films, {_id: id})

        return updateFilm({...film, featured: !film.featured})
    }

    const saveFilm = film => (film._id ? updateFilm(film) : addFilm(film))

    const addFilm = filmData =>
        api.films.create(filmData).then(film =>
            setFilms(sortFilms([...films, {...film}]),
            )
        )

    const updateFilm = filmData =>
        api.films.update(filmData).then(film =>
            setFilms(sortFilms(films.map(item => (item._id === film._id ? film : item)),
                )
            ),
)


    const deleteFilm = film =>
        api.films.delete(film).then(() =>
            setFilms(sortFilms(films.filter(item => item._id !== film._id)),
            )
        )

    const numCol = props.location.pathname === "/films" ? "sixteen" : "ten"

        return (
            <AppContext.Provider
                value={{
                    toggleFeatured: toggleFeatured,
                    deleteFilm: deleteFilm,
                    user: props.user,
                }}
            >
                <div className="ui stackable grid">
                    <div className={`${numCol} wide column`}>
                        <AdminRoute role={props.user.role} path="/films/new" submit={saveFilm} film={{}} />
                        <AdminRoute
                            role={props.user.role}
                            path="/films/edit/:_id"
                            submit={updateFilm}
                            films={films}
                        />
                        {
                            isLoading ? (
                                <div className="ui icon message">
                                    <i className="notched circle loading icon" />
                                    <div className="content">
                                        <div className="header">films loading</div>
                                    </div>
                                </div>
                            ) : (
                                <FilmsList films={films} editFilm={updateFilm} deleteFilm={deleteFilm} />
                            )
                        }
                    </div>
                </div>
            </AppContext.Provider>
        )
}

export default FilmsPage
