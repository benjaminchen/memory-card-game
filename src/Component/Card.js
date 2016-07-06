import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.name = this.props.name;
        this.no = this.props.no;
        this.handleClick = this.props.handleClick;
        this.state = {
            faceup: false,
            clickable: true,
            match: false
        }
    }

    faceDown() {
        this.setState({
            faceup: false,
            clickable: true
        });
    }

    faceUp() {
        this.setState({
            faceup: true,
            clickable: false
        });
    }

    match() {
        this.setState({
            clickable: false,
            match: true
        });
    }

    onClick() {
        this.handleClick(this);
    }

    render() {
        var flipClass = 'card' + (this.state.faceup ? ' flipped' : '');
        var src = `${this.props.imgPath}/${this.props.folder}/${this.name}`;

        return (
            <div className={ flipClass } onClick={ this.onClick.bind(this) }>
                <div className="face back">
                    <img className="shadow" src={ this.props.imgPath + '/back.jpg' } />
                </div>
                <div className="face front">
                    <img className="flipped-shadow" src={ src } />
                </div>
            </div>
        );
    }
}

export default Card;
