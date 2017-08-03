import React from 'react';

export class Buttonify extends React.Component {
    render() {
        return (
            <div>
                <button type={this.props.behavior}>{this.props.children}</button>
            </div>
        )
    }
}