
import {GENERATE_BOARD, SET_TO_CLEAR, FIND_PATH} from "../constants/index.js"

export function generateBoard(payload) {
    return {
        type:GENERATE_BOARD,
        payload:payload
    }
}

export function setToClear(payload) {
    return {
        type:SET_TO_CLEAR,
        payload:payload
    }
}

export function generatePath() {
    return {
        type:FIND_PATH
    }
}