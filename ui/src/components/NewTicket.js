import React, {useState} from "react" 

const NewTicket = () => {

    const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");

	const onSubmit = (event) => {
		event.preventDefault();

		//BACKEND - post ticket request goes here
		console.log(title, price);
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
                    value={price} 
          		    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <button className="btn btn-primary" disabled={!validateForm()}> Submit </button>
        </form>
    );
};

export default NewTicket;