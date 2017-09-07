import React from 'react';
import ReactDOM from 'react-dom';
import './panel.css';

class Module extends React.Component {
    render() {
        return <div className="panel">{this.props.children}</div>
    }
}

export default Module;