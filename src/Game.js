import React from 'react';
import ReactDOM from 'react-dom';
import Screen from './Component/Screen.js';
import Log from './Log.js';

class Game {
    constructor(cards, cfg) {
        this.cards = cards;
        this.cfg = cfg;
        this.finish = [];
        this.log = new Log();
    }

    onFinish(fn) {
        this.finish.push(fn);
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
        var finish = this.finish;
        var log = this.log;
        var element = React.createElement(Screen, { cards, cfg, finish, log });
        var game = ReactDOM.render(element, dom);
    }
}

export default Game;
