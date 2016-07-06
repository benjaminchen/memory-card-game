import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <form action="http://localhost/memory-card-game/example/#/main">
                    <button type="submit">開始測驗</button>
                </form>

                {/* Render the child route component */}
                {this.props.children}
            </div>
        )
    }
}

export default Home;
