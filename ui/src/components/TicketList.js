import React from 'react';

function TicketList(props) {
    return (
        <div>
            {props.map(ticket => {
                return(
                    <TicketView props={ticket}/>
                )

            })}
        </div>
    );
}

export default TicketList;