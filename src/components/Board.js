import React from 'react'
import Square from "./Square"
import "./Square.css"
import "./Board.css"
import {connect} from "react-redux";


const BoardComp = ({grid}) =>  {
    const rows = grid.map((r, y) => {return (
        <tr key={"row_"+y}>
            {r.map((r,x) => {return (
                <Square key={"col_"+x} filling={r} x={x} y={y}/>
            )})}
        </tr>
    )})

    return (
        <div>
            <table className="table">
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}


const mapStateToProps = state =>{
    return {grid:state.grid};
}

const Board = connect(mapStateToProps)(BoardComp);

export default Board;