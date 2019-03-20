import React, { Component } from 'react'
import { Table } from '../components/table'
import { getAll } from '../utils/rest-request'

const CONTROLLER = 'person'
export default class Person extends Component {

    constructor() {
        super();
        this.state = {
            persons: []
        }
    }

    async componentDidMount() {
        const persons = await getAll(CONTROLLER)
        this.setState({ persons })
    }

    render() {
        const { persons = [] } = this.state
        return <Table list={persons} />
    }

}