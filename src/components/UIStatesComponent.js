import React from 'react';
import {Container,Col, Row} from "reactstrap";
import "./UIStatesComponent.css";

export default function UIStatesComponent() {
    return (
        <Container className="w-50 container">
            <p>UI States</p>
            <Row>
                <Col xs={6} sm={6} md={2} xl={2}>
                    <label>Filled
                        <div className="box box-filled"></div>                    
                    </label>
                </Col>
                <Col xs={6} sm={6} md={2} xl={2}>
                    <label>Hover
                        <div className="box box-hover"></div>                    
                    </label>
                </Col>
                <Col xs={6} sm={6} md={2} xl={2}>
                    <label>Down
                        <div className="box box-down"></div>                    
                    </label>
                </Col>
                <Col xs={6} sm={6} md={2} xl={2}>
                    <label>Clear
                        <div className="box box-clear"></div>                    
                    </label>
                </Col>
                <Col xs={6} sm={6} md={2} xl={2}>
                    <label>Start
                        <div className="box box-start"></div>                    
                    </label>
                </Col>
                <Col xs={6} sm={6} md={2} xl={2}>
                    <label>End
                        <div className="box box-end"></div>                    
                    </label>
                </Col>
                <Col xs={6} sm={6}  md={2} xl={2}>
                    <label>Shortest Path
                        <div className="box box-shortest"></div>                    
                    </label>
                </Col>
            </Row>
        </Container>
    )
}
