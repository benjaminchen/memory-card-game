import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './Routers.js';
import Log from './Log.js';

class Game {
    constructor(cards, cfg) {
        this.cards = cards;
        this.cfg = cfg;
        this.finishEvent = [];
        this.log = new Log();
    }

    onFinish(fn) {
        this.finishEvent.push(fn);
    }

    getData() {
        var logs = this.log.get();
        var lastLog = logs[logs.length -1];
        return {
            moves: lastLog.moves,
            time: lastLog.time,
            logs: JSON.stringify(logs)
        };
    }

    render(dom) {
        var cards = this.cards;
        var cfg = this.cfg;
        var finishEvent = this.finishEvent;
        var log = this.log;
        var element = React.createElement(Routers, { cards, cfg, finishEvent, log });
        var game = ReactDOM.render(element, dom);
    }
}

export default Game;
