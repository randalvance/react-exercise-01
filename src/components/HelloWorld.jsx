import React from 'react';

export class HelloWorld extends React.Component {
    render() {
        return (<p>Hello, {this.props.greetTarget}!</p>);
    }
};
