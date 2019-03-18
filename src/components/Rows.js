import React, { Component } from 'react'
import Row from './Row'
class Rows extends Component {

    render() {
        const { persons } = this.props
        return (
            <tbody>
                {
                    persons.length > 0 && persons.map((person, i) => {
                        return (
                            <tr key={i+1000}>
                                <Row id={person.id} value={person.id} />
                                <Row id={person.name} value={person.name} />
                                <Row id={person.lastName} value={person.lastName} />
                                <Row id={person.age} value={person.age} />
                            </tr>
                        )
                    })
                }
            </tbody>
        )
    }
}

export default Rows