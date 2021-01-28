import React from 'react';
import { Button } from 'reactstrap';
import {
    Link,
  } from 'react-router-dom';

function Confirmation(props) {
    const {
        ticket
      } = props;
    return (
        <div>
            <h1>Your order for ticket has been submitted for processing</h1>
            <Link to = "/">
                <Button>Back to Tickets</Button>
            </Link>
        </div>
    );
}

export default Confirmation;