import React, { Component } from 'react'
import Headers from '../components/Headers'
import Rows from '../components/Rows'
export default class Table extends Component {
    constructor() {
        super();
        this.state = {
            persons: []
        }
    }

    getAllObjects = async() => {
        try {
            let response = await fetch('http://localhost:8443/person', {
                method: 'GET'
            });
            let objectJsonList = await response.json();
            return objectJsonList;
        } catch (error) {
            console.log(error);
        }
    }

    async componentDidMount(){
        const persons = await this.getAllObjects();
        this.setState({ persons });
    }
    render() {
        const { persons } = this.state
        const [first] = persons
        var headers = first ? Object.keys(first) : [];
        console.log(first)
        return (
            <table border="solid 1px" style={{width: '100%'}}>
                <Headers headers={headers} />
                <Rows persons={persons} />
            </table>
        )
    }
}