import React, { Component } from 'react'
import Row from './items/Row'
class Rows extends Component {

    createColums = item => {
        let itemsColums = []
        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                itemsColums = [...itemsColums, item[key]]
            }
        }
        return (
            <tr key={item.id}>
            {
                itemsColums.map(( colum ) => {
                    return <Row key={`col-${colum}`}>{colum}</Row>
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
                        return this.createColums(item)
                    })
                }
            </tbody>
        )
    }
}

export default Rows