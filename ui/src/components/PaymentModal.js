import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const PaymentModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="secondary" onClick={toggle}>Pay</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Enter your payment information</ModalHeader>
        <ModalBody>
            <Form>
                <FormGroup>
                    <Label >Credit Card Number</Label>
                    <Input placeholder="1234-5678-9101" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Expiration</Label>
                    <Input type="month" placeholder="10/08/1996" />
                </FormGroup>
            </Form>
        </ModalBody>
        <ModalFooter>
                <Button>Submit</Button>
                <Button onClick = {toggle}>Cancel</Button>

        </ModalFooter>
      </Modal>
    </div>
  );
}

export default PaymentModal;
