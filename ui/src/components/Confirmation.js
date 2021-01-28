import React from 'react';
import { Button } from 'reactstrap';

function Confirmation(props) {
    const {
        ticket
      } = props;
    return (
        <div>
            <h1>Your order for ticket {ticket.id} has been submitted for processing</h1>
            <Link to = "/">
                <Button>Back to Tickets</Button>
            </Link>
        </div>
    );
}

export default Confirmation;