import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Headers from './Headers'
import Rows from './Rows'

export default class Table extends Component {
    render() {
        const { list } = this.props
        return (
            <table className="table table-bordered table-hover">
                <Headers list={list} />
                <Rows list={list} />
            </table>
        )
    }
}

Table.protoType = {
    list: PropTypes.array.isRequired
}