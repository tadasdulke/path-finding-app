import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class WelcomeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  render() {
    return (
    <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Path Finding App</ModalHeader>
            <ModalBody>
              <ul>
                <li>
                Start Point and End Point cells positions are generated randomly.
                </li>
                <li>
                  Click and drag on a clear cells to make walls.
                </li>
                <li>
                  To change Start Point, End Point positions or dimensions of the board press "Generate" button.
                </li>
                <li>
                  To find path press "Find Path" button.
                </li>
              </ul>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Close</Button>
            </ModalFooter>
        </Modal>
    </div>
    );
  }
}

export default WelcomeModal;