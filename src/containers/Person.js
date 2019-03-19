import React, { Component } from 'react'
import { Table } from '../components/table'

export default class Person extends Component {
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
        const { persons = [] } = this.state
        return <Table list={persons} />
    }
}