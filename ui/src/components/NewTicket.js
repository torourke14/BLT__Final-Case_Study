import React, {useState} from "react" 
import { useHistory } from "react-router-dom";

const NewTicket = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    
    let history = useHistory();

	const onSubmit = (event) => {
		event.preventDefault();

		//BACKEND - post ticket would request goes here
        console.log(title, price);

        //redirects to tickets page after new ticket is made
        history.push("/")
	}

	const validateForm = () => {
		return title.length>0 && price>0;
	}


    return (
        <form onSubmit={onSubmit}>
            <h1> Create a Ticket </h1>
            <div className="form-group">
                <label> Title: </label>
                <input
                    className="form-control"
                    value={title} 
          		    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label> Price: </label>
                <input
                    className="form-control"
                    type="number"
                    value={price} 
          		    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <button className="btn btn-primary" disabled={!validateForm()}> Submit </button>
        </form>
    );
};

export default NewTicket;