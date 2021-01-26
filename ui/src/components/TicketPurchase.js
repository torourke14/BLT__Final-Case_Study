import React from 'react';
import TicketView from './TicketView'

/**
 * TicketPurchase view function
 * @param {*} props 
 * Return: A UI detailing the ticket with a purchasing button
 * Description: Uses the TicketView component to display ticket details with an additional button
 */
function TicketPurchase(props) {
  return (
    <div>
        <TicketView props={props} />
        <button>Purchase</button>
    </div>
  );
}

export default TicketPurchase;