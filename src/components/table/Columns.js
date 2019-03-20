import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { keyGenerator } from '../../utils/KeysGenerator'
import Column from './items/Column'

class Columns extends Component {

    getColumns = item => {
        let itemsColumns = []
        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                itemsColumns = [...itemsColumns, item[key]]
            }
        }
        return itemsColumns
    }

    render() {
        const { item = {} } = this.props
        const columns = this.getColumns(item)
        return (
            <tr key={item.id}>
                {
                    columns.map((column, i) => {
                        return <Column key={keyGenerator('col', i)}>{column}</Column>
                    })
                }
            </tr>
        )
    }
}

Columns.propTypes = {
    item: PropTypes.object.isRequired
}

export default Columns
