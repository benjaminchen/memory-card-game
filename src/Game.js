import React from 'react';
import ReactDOM from 'react-dom';
import Screen from './Component/Screen.js'

class Game {
    constructor(cards, cfg) {
        this.cards = cards;
        this.cfg = cfg;
        this.finish = [];
    }

    onFinish(fn) {
        this.finish.push(fn);
    }

    render(dom) {
        var cards = this.cards;
        var cfg = this.cfg;
        var finish = this.finish;
        var element = React.createElement(Screen, { cards, cfg, finish });
        var game = ReactDOM.render(element, dom);
    }
}

export default Game;
