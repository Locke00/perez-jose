import React from 'react'
import { Link } from 'react-router-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Eventos } from './Eventos'

export const Prueba = () => {
    return (
        <>
            <h4>Bloque de prueba</h4>
            <Link to='/prueba/eventos' className="brand-logo">Eventos</Link>
            <Router>
                <Switch>
                    <Route exact path='/prueba/eventos'>
                        <Eventos />
                    </Route>
                </Switch>
            </Router>

        </>
    )
}
