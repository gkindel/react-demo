import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { startTimer, stopTimer } from "../../models/timer/actions";
import Panel from '../panel/Panel'

class Timer extends React.Component {

    render() {
        let status;

        if( this.props.isRunning ){
            status = <div>
                <button onClick={this.props.stopTimer}>Stop</button>
                <div style={{ margin: "1em 0" }}>
                    Timer started {this.props.seconds} sec ago at { this.props.startTime.toLocaleString() }.
                </div>
            </div>;
        }
        else {
            status = <button onClick={this.props.startTimer}>Start</button>
        }
        return <Panel>
            <b>Timer</b> is { this.props.isRunning  ? '': 'not'} running.
            <div style={{ margin: "1em 0" }}>
                {status}
            </div>
        </Panel>;
    }
}

const mapStateToProps = (state) => {
    const timer = state.timer;
    return {
        startTime : timer.startTime || NaN,
        seconds : timer.seconds,
        isRunning : timer.running
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        startTimer: () => {
            dispatch(startTimer())
        },
        stopTimer: () => {
            dispatch(stopTimer())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
