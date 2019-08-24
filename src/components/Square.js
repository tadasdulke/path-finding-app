import React from 'react'
import {connect} from "react-redux"
import {setToClear} from "../actions/index"

class SquareComp extends React.Component {
    constructor() {
        super();
        this.state = {
            x:"",
            y:"",
            squareType: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleMouse = this.handleMouse.bind(this);
    }
    componentDidMount(){
        this.setState(
            {
                squareType:this.props.filling.squareType,
                x:this.props.x,
                y:this.props.y
            });
    }

    componentDidUpdate() {
        if(this.state.squareType !== this.props.filling.squareType) {
            this.setState({
                squareType:this.props.filling.squareType
            })
        }
    }

    handleClick() {
        this.props.setToClear({x:this.state.x, y:this.state.y, squareType:this.state.squareType});
    }

    handleMouse(e) {
        if(e.buttons === 1 || e.buttons === 3){ 
            this.props.setToClear({x:this.state.x, y:this.state.y, squareType:this.state.squareType});
        }
    }

    render() {
        var squareColor = "square square-";
        switch(this.props.filling.squareType) {
            case "filled":
                squareColor += "filled";
                break;
            case "clear":
                squareColor += "clear";
                break;
            case "start": 
                squareColor += "start";
                break;
            case "end":
                squareColor  += "end";
                break;
            case "path":
                squareColor += "path";
                break;
            default:
                squareColor += "default";
                break;
        }
        return (
            <td onMouseOver={this.handleMouse} onMouseDown={this.handleClick} className={squareColor}>
                <div className="square-inside">
                </div> 
            </td>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setToClear: coords => dispatch(setToClear(coords))
    }
}

const Square = connect(null, mapDispatchToProps)(SquareComp);

export default Square;
