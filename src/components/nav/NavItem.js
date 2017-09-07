import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

class NavItem extends React.Component {
    render() {
        return <Link to={this.props.to}>
            {this.props.children}
        </Link>;
    }
}
export default NavItem;