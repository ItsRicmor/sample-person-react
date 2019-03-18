import React, { Component } from 'react'
import Header from './Header'
class Headers extends Component {

    render() {
        const { headers } = this.props
        return (
            <thead>
                <tr>
                    {
                        headers.length > 0 && headers.map((header, i) => {
                            return <Header id={i} value={header} />
                        })
                    }
                </tr>
            </thead>
        )
    }
}

export default Headers