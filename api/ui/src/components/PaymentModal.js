import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const PaymentModal = (props) => {
    const {
        buttonLabel,
        className,
        ticket
    } = props;

    let history = useHistory();
	const [cc, setCC] = useState("");
	const [exp, setExp] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		//BACKEND - creating a new order goes here
		console.log(cc, exp);
      history.push("/confirmation")
	}

	const validateForm = () => {
		return cc.length==16 && exp;
	}


  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button size="md" color="primary" onClick={toggle}>  Purchase  </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Enter your payment information to purchase ticket {ticket.id} </ModalHeader>
        <ModalBody>
            <Form onSubmit = {handleSubmit}>
                <FormGroup>
                    <Label>Credit Card Number</Label>
                    <Input placeholder="1234-5678-9101-1121" onChange = {(e) => setCC(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label>Expiration</Label>
                    <Input type="month" placeholder="10/08/1996" onChange = {(e) => setExp(e.target.value)} />
                </FormGroup>
                <Button disabled = {!validateForm()}>Submit</Button>
            </Form>
        </ModalBody>
        <ModalFooter>
                <Button onClick = {toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default PaymentModal;
