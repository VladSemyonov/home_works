import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import FilmForm from "./forms/FilmForm";
import {find} from "lodash";

export default function AdminRoute(props) {

    return (props.role === 'admin' ? (

                <>
                    <Route
                        path={props.path}
                        render={(prop) => {
                            return(
                            <div className="six wide column">
                                <FilmForm submit={props.submit}
                                          film={find(props.films, { _id: prop.match.params._id,}) || {}}/>
                            </div>)
                            }
                        }
                    />
                </>
            ) : (
                <Route path='/films/*' render={() => <Redirect to='/films'/>}/>
            )
        )
    }