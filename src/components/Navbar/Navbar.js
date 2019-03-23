import React, { Component, Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom';
import style from './Navbar.module.css'
export default class Navbar extends Component {
    render(){
        return (
            <Fragment>
                <nav className={style.nav}>
                    <NavLink to="/">Persona Controller</NavLink>
                </nav>
            </Fragment>
        )
    }
}
