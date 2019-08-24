import {GENERATE_BOARD, SET_TO_CLEAR, FIND_PATH} from "../constants/index"
import update from "immutability-helper";
import findPath from "../BFS/index"

const initialState = {
    grid: Array(10).fill(0).map(x => Array(10).fill({squareType:"clear"})),
    startX : Math.floor(Math.random() * 4),
    startY : Math.floor(Math.random() * 10),
    endX : Math.floor(Math.random() * 4) + 4,
    endY : Math.floor(Math.random() * 10),
    row: 10,
    col: 10,
    locked:false
}
export function rootReducer(state = initialState, action) {
    state = initializePoint(state, state.startX, state.startY, "start");
    state = initializePoint(state, state.endX, state.endY, "end");
    switch(action.type) {
        case GENERATE_BOARD:
            const rows = parseInt(action.payload.x);
            const cols = parseInt(action.payload.y);
            const newStartX = Math.floor(Math.random() * parseInt(cols/2)); 
            const newStartY = Math.floor(Math.random() * rows);
            const newEndX = Math.floor(Math.random() * parseInt(cols/2)) + parseInt(cols/2);
            const newEndY = Math.floor(Math.random() * rows);
            state = Object.assign({}, state, {grid: Array(rows).fill(0).map(x => Array(cols).fill({squareType:"clear"})),
                                            startX:newStartX,
                                            startY:newStartY,
                                            endY:newEndY,
                                            endX:newEndX,
                                            col:cols,
                                            row:rows,})

            state = initializePoint(state, state.startX, state.startY, "start");
            state = initializePoint(state, state.endX, state.endY, "end");
            state = Object.assign({}, state, {locked:false});
            return state;
        case SET_TO_CLEAR:
            if(state.locked === false) {
                const x = action.payload.x;
                const y = action.payload.y;
                var type = "clear";
                if(action.payload.squareType === "clear") {
                    type = "filled";
                }
                state = initializePoint(state, x, y, type);
            }
            return state;
        case FIND_PATH:
        if(state.locked === false) {
            var path = findPath(state);
            if(path === false) {
                alert("Impossible to find path");    
                return state;
            }

            for(var i = 0; i<path.length; i++) {
                var square = path[i];
                state = initializePoint(state, square.x, square.y, "path");
            }
            state = Object.assign({}, state, {locked:true});
        }
            return state;
        default:
            return state;
    }
}

function initializePoint(state, x,y,type) {
    return update(state,
        {grid: 
            {[y]:
                {[x]: 
                    {
                        $set: {squareType:type} 
                    }
                }}});
}