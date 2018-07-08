import * as React from 'react';

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'This is about page'
        }
    }

    render() {
        return (
            <h1>{this.state.title}</h1>
        );
    }
}
