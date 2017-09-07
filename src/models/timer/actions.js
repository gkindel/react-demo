
export const START = "START";
export const TICK = "TICK";
export const STOP = "STOP";

export function startTimer ( tickInterval=1000 ) {
    return (dispatch, getState) => {
        let interval = setInterval( () => {
            return dispatch({type: TICK, time: new Date() });
        }, tickInterval);
        dispatch({type: START, interval: interval});
    }
}
export function stopTimer () {
    return (dispatch, getState) => {
        const state = getState();
        clearInterval(state.interval);
        dispatch({type: STOP});
    }
}