
import { START, TICK, STOP } from "./actions.js";

const initialState = {
    startTime : null,
    seconds: null,
    running: false
};

function TimerReducers (state = initialState, action = {}) {
    switch (action.type) {
        case START:
            return {
                ...state,
                startTime : new Date(),
                seconds: 0,
                interval: action.interval,
                running: true
            };
        case TICK:
            return {
                ...state,
                seconds:  Math.round( (action.time - state.startTime) / 100) / 10
            };
        case STOP:
            return {
                ...state,
                startTime : null,
                interval: null,
                running: false
            };
        default:
            return state
    }
}

export default TimerReducers;
