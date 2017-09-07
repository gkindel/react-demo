import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getWeather } from "./../../models/weather/actions";
import Panel from '../panel/Panel';

import './weather.css';

class WeatherView extends React.Component {

    render() {
        const obs = this.props.data.current_observation;

        let weather = "";
        if( obs ){
            weather =
                <div className="weather">
                    <div className="weather-image-container">
                        <img src={obs.icon_url} title={obs.weather}/>
                        <div className="weather-image-label">
                            {obs.weather}
                        </div>
                    </div>
                    <div>
                        <div className="weather-location">
                            {obs.display_location.full}
                        </div>
                        <div>
                            {obs.temperature_string}
                        </div>
                        <div className="weather-updated-time">
                            {this.props.updated && this.props.updated.toLocaleString()}
                        </div>
                    </div>
                </div>
        }

        return <Panel>
            <b>WEATHER</b>
            <div>
                {weather}
            </div>
            <div className="weather-actions" style={{ }}>
                <button onClick={ this.props.doWeather }>Update</button> { this.props.requesting ? "...": "" }
            </div>
        </Panel>;
    }
}

const mapStateToProps = (state) => {
    const weather = state.weather;
    return {
        requesting: weather.requesting,
        updated: weather.updated,
        data: weather.data
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        doWeather: () => {
            const {promise, requestId, dispatched} = dispatch( getWeather() )
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherView)
