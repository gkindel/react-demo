import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router'

import Weather from './weather/Weather';
import Timer from './timer/Timer';
import Nav from './nav/Nav';

class App extends React.Component {
    render() {
        return <div>
            <Nav />
            <Switch>
                <Route exact path='/' component={Weather}/>
                <Route path='/timer' component={Timer}/>
            </Switch>
        </div>;
    }
}
export default App;