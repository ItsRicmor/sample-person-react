import React, { Component } from 'react'
import Row from './items/Row'
class Rows extends Component {

    createRow = item => {
        let itemsRow = []
        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                itemsRow = [...itemsRow, item[key]]
            }
        }
        return (
            <tr key={item.id}>
            {
                itemsRow.map(( value ) => {
                    return <Row key={`row-${value}`}>{ value }</Row>
                })
            }
            </tr>
        )

    }

    render() {
        const { rows } = this.props
        return (
            <tbody>
                {
                    rows && rows.map((item) => {
                        return this.createRow(item)
                    })
                }
            </tbody>
        )
    }
}

export default Rows