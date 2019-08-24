import React from 'react'
import "./GeneratePannel.css"
import {generateBoard, generatePath} from "../actions"
import {connect} from "react-redux";
import {Label, Input, Form, FormGroup, Button, Col} from "reactstrap";


class GeneratePannelComp extends React.Component {
    constructor() {
        super();
        this.state = {
            rows:10,
            cols:10
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleGenerate = this.handleGenerate.bind(this);
        this.handlePathFinding = this.handlePathFinding.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]:e.target.value});
    }

    handleGenerate(e) {
        e.preventDefault();
        const {rows} = this.state;
        const {cols} = this.state;
        this.props.generateBoard({x:rows, y:cols});
    }
    
    handlePathFinding() {
        this.props.generatePath();
    }

    render() {
    return (
        <div className="pannel">
        <Form>
            <FormGroup row>
                <Col md={6} style={{margin:"auto"}}>
                    <Label htmlFor="rows">Rows:
                        <Input type="text" name="rows" value={this.state.rows} onChange={this.handleChange}></Input>
                    </Label>
                    <Label htmlFor="columns">Columns:
                        <Input type="text" name="cols" value={this.state.cols} onChange={this.handleChange}></Input>
                    </Label>
                </Col>
            </FormGroup>
            <FormGroup>
                <Col md={6} style={{margin:"auto"}}>
                    <Button style={{margin:"5px"}} color="primary" type="submit" onClick={this.handleGenerate}>Generate</Button>
                    <Button style={{margin:"5px"}} color="primary" onClick={this.handlePathFinding}>Find Path</Button>  
                </Col>
            </FormGroup>          
        </Form>
        </div>
    )}
}

const mapDispatchToProps = dispatch => {
    return {
        generateBoard: dimensions => dispatch(generateBoard(dimensions)),
        generatePath: () => dispatch(generatePath())
    };
}

const GeneratePannel = connect(null, mapDispatchToProps)(GeneratePannelComp);

export default GeneratePannel;
