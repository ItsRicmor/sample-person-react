import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './items/Header'
import { keyGenerator } from '../../utils/KeysGenerator'
import style from './css/Table.module.css'

class Headers extends Component {

    getKeysHeader = list => {
        const [first] = list
        const headers = first ? Object.keys(first) : [];
        return headers
    }

    render() {
        let { list = [] } = this.props
        const headers = this.getKeysHeader(list)
        return (
            <thead>
                <tr className={style.columns}>
                    {
                        headers && headers.map((header, i) => {
                            return <Header key={keyGenerator('head', i)} >{header}</Header>
                        })
                    }
                </tr>
            </thead>
        )
    }
}

Headers.protoType = {
    list: PropTypes.array.isRequired
}

export default Headers