import React from 'react';
import PropTypes from 'prop-types'
import Container from '../items/Container'
import style from '../../assets/css/style.module.css'
import { Navbar } from '../Navbar'  

const Layout = props => {
    const { children } = props
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <Navbar />
            </div>
            <div className={style.menu}>Menu</div>
            <div className={style.content}>
                <Container>{children}</Container>
            </div>
            <div className={style.footer}>footer</div>
        </div>
    )
}

Layout.protoType = {
    children: PropTypes.any
}

export default Layout;