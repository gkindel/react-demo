import { REQUEST, RESPONSE, COMPLETE } from "./actions.js"

const initialState = {
    requesting : false,
    updated : null,
    data : {}
};

function WeatherReducer  (state = initialState, action = {}) {
    switch (action.type) {
        case REQUEST:
            return {
                ...state,
                requesting : new Date(),
                updated : null
            };
        case RESPONSE:
            return {
                requesting : null,
                updated : new Date(),
                data : action.data
            };
        case COMPLETE:
            return {
                ...state,
                requesting: false
            };
        default :
            return state;
    }
}

export default WeatherReducer;

