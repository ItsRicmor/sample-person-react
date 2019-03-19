import React, { Component } from 'react'
import Headers from './Headers'
import Rows from './Rows'

export default class Table extends Component {
    render() {
        const { list } = this.props
        return (
            <table className="table table-bordered table-hover">
                <Headers headers={list} />
                <Rows rows={list} />
            </table>
        )
    }
}