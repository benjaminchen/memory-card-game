import React from 'react';
import ReactDOM from 'react-dom';
import Screen from './Component/Screen.js'

class Game {
    constructor(cards, cfg) {
        this.cards = cards;
        this.cfg = cfg;
    }

    render(dom) {
        var cards = this.cards;
        var cfg = this.cfg;
        var element = React.createElement(Screen, { cards, cfg });
        var game = ReactDOM.render(element, dom);
    }
}

export default Game;
