import React from 'react';

function TicketView(props) {
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th scope="col">Ticket Name</th>
                <th scope="col">Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{props.title}</td>
                <td>{props.price}</td>
            </tr>
        </tbody>
    </table>
      
    </div>
  );
}

export default TicketView;