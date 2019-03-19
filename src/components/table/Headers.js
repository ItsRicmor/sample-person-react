import React, { Component } from 'react'
import Header from './items/Header'
class Headers extends Component {

    render() {
        let { headers } = this.props
        const [first] = headers
        headers = first ? Object.keys(first) : [];
        return (
            <thead className="thead-dark">
                <tr>
                    {
                        headers && headers.map((header, i) => {
                            return <Header key={i} >{header}</Header>
                        })
                    }
                </tr>
            </thead>
        )
    }
}

export default Headers