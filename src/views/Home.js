import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="back">
                <h2>Home</h2>
                <form action="#/main">
                    <input src="assets/images/start-btn.png" type="image" />
                </form>

                {/* Render the child route component */}
                {this.props.children}
            </div>
        )
    }
}

export default Home;
