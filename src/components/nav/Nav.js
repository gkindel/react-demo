import React from 'react';
import ReactDOM from 'react-dom';
import NavItem from './NavItem'

import './nav.css';

class Nav extends React.Component {
    render() {
        return <header className="nav">
            <NavItem to='/'>Weather</NavItem>
            <NavItem to='/timer'>Timer</NavItem>
        </header>;
    }
}
export default Nav;