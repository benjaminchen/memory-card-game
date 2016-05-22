import React, { Component } from 'react';
import ArrayShuffle from 'array-shuffle';
import Card from './Card.js';

class Screen extends Component {
    constructor(props) {
        super(props);
        this.log = this.props.log;
        this.cards = ArrayShuffle(this.props.cards);
        this.cfg = this.props.cfg;
        this.finish = this.props.finish;
        this.startTime = null;
        this.timer = null;
        this.state = {
            clickable: false,
            card: null,
            time: 0,
            turn: 0,
            wrong: 0,
            correct: 0
        };
    }

    componentDidMount() {
        this.start();
        this.setState({
            clickable: true
        });
    }

    start() {
        this.setState({
            time: 0
        });
        this.startTime = new Date().getTime();

        if (!this.timer) this.timer = setInterval(this.tick.bind(this), 500);
        this.log.record({
            event: 'start',
            folder: this.cfg.folder,
            timestamp: this.startTime
        });
    }

    tick() {
        this.setState({
            time: Math.round((new Date().getTime() - this.startTime) / 1000)
        });
    }

    stop() {
        clearInterval(this.timer);
        this.timer = null;
        this.log.record({
            event: 'end',
            timestamp: new Date().getTime(),
            moves: (this.state.turn + 1),
            time: this.state.time
        });
        if (this.finish.length > 0) this.finish.forEach(function(fn) {
            fn();
        });
    }

    handleClick(card) {
        var stopNo = this.cards.length / 2,
            correct;
        if (!this.state.clickable || !card.state.clickable) return;

        this.log.record({
            no: card.no,
            name: card.name,
            timestamp: new Date().getTime()
        });

        card.faceUp();

        this.setState({
            turn: this.state.turn + 1
        });

        if (this.state.card === null) {
            this.setState({card: card});
            return
        }

        this.setState({
            clickable: false
        });

        if (this.state.card.name !== card.name) {
            setTimeout(card.faceDown.bind(card), 800);
            setTimeout(this.state.card.faceDown.bind(this.state.card), 800);
            setTimeout(function () {
                this.setState({
                    clickable: true,
                    wrong: this.state.wrong + 1
                });
            }.bind(this), 800);
        } else {
            correct = this.state.correct + 1;
            card.match();
            this.state.card.match();
            this.setState({
                clickable: true,
                correct: correct
            });
        }

        this.setState({
            card: null
        });

        if (correct && correct === stopNo) this.stop();
    }

    render() {
        var imgPath = this.cfg.imgPath;
        var folder = this.cfg.folder;
        var handleClick = this.handleClick.bind(this);
        var createCard = function (card, index) {
            var path = `${imgPath}/${folder}`;

            return (
                <div key={ index } className="card_container">
                    <Card name={ card } path={ path } no={ index } handleClick={ handleClick } />
                </div>
            );
        };

        return (
            <div className="screen">
                <div className="op">
                    <p>時間： {this.state.time}</p>
                    <p>次數： {this.state.turn}</p>
                </div>
                <div className="container">
                    { this.cards.map(createCard) }
                </div>
            </div>
        );
    }
}

export default Screen;
