import {GENERATE_BOARD, SET_TO_CLEAR} from "../constants"

export function checkGenerateOptions({dispatch}) {
    return function(next) {
        return function(action) {
            if(action.type === GENERATE_BOARD) {
                if(action.payload.x > 20 || action.payload.y >20 || action.payload.y <= 0 || action.payload.x <= 0) {
                    return;
                }
            }
            if(action.type === SET_TO_CLEAR) {
                if(action.payload.squareType === "start" || action.payload.squareType === "end" || action.payload.squareType === "path") {
                    return;
                } 
            }
            return next(action);
        }
    }
}
