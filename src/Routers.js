import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import Home from './views/Home.js';
import Main from './views/Main.js';

class Routers extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/">
                    <IndexRoute component={Home} />
                    <Route path="main" component={Main} cards={this.props.cards} cfg={this.props.cfg} log={this.props.log} finishEvent={this.props.finishEvent} />
                </Route>
            </Router>
        );
    }
}

export default Routers;
