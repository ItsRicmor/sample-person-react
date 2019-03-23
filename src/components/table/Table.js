import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Headers from './Headers'
import Rows from './Rows'
import style from './css/Table.module.css'

export default class Table extends Component {
    render() {
        const { list } = this.props
        return (
            <table className={style.table}>
                <Headers list={list} />
                <Rows list={list} />
            </table>
        )
    }
}

Table.protoType = {
    list: PropTypes.array.isRequired
}