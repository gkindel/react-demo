const API = "//api.wunderground.com/api/e446b8b04fffcbcc/conditions/q/MA/Boston.json";

export const REQUEST = "REQUEST";
export const RESPONSE = "RESPONSE";
export const COMPLETE = "COMPLETE";

export function getWeather () {
    return (dispatch, getState) => {
        const firstAction = { type: REQUEST, time: new Date() };

        return {
            dispatched: firstAction,
            promise: fetch(API)
                .then(response => {
                    return response.json();
                })
                .then(json => {
                    dispatch({type: RESPONSE, data: json});
                    dispatch({type: COMPLETE});
                })
                .catch(err => {
                    console.error("err!", err);
                    dispatch({type: COMPLETE});
                })

    }
    };
}
