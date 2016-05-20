import React, { Component } from 'react';
import ArrayShuffle from 'array-shuffle';
import Card from './Card.js';

class Screen extends Component {
    constructor(props) {
        super(props);
        this.cards = ArrayShuffle(this.props.cards);
        this.cfg = this.props.cfg;
        this.state = {};
    }

    render() {
        var imgPath = this.cfg.imgPath;
        var createCard = function(card, index) {
            var folder = `${imgPath}/${card.folder}`;

            return (
                <div key={ index } className="card_container">
                    <Card name={ card.name } name={ card.name } folder={ folder } />
                </div>
            );
        };

        return (
            <div className="container">
                { this.cards.map(createCard) }
            </div>
        );
    }
}

export default Screen;
