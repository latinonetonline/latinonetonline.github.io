import React, { Component } from 'react'
import Home from './pages/Home';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    render() {
        return (
            <Home />
        );
    }
}