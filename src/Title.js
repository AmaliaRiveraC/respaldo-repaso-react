import React from 'react';

class Title extends React.Component {
    render() {
        return (
            <div className="App-background-titulo">
                <h2 className="App-titulo">{this.props.name}</h2>
            </div>
        );
    }
};

export default Title;