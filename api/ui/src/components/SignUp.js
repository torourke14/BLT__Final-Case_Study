import React, {useState} from "react" 
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";


function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [reenterPassword, setReenterPassword] = useState("");

	let history = useHistory();

	const handleSubmit = (event) => {
		event.preventDefault();

		if (password === reenterPassword){
			//BACKEND - post user request goes here
			console.log(email, password, reenterPassword);

			history.push("/signin")
		}
		else {
			alert("Passwords must match");	
		}
		
	}

	const validateForm = () => {
		return email.length>0 && password.length>4;
	}

	return (
	<form onSubmit={handleSubmit}>
    	<h1> Sign Up </h1>
    	<div className="form-group">
        	<label> Email: </label>
        	<input 
          		className="form-control"
				type="email"
          		value={email} 
          		onChange={(e) => setEmail(e.target.value)}
        	/>
      	</div>
      	<div className="form-group">
        	<label> Password: </label>
			<input 
				className="form-control"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
        	/>
      	</div>
		<div className="form-group">
        	<label> Re-Enter Password: </label>
			<input 
				className="form-control"
				type="password"
				value={reenterPassword}
				onChange={(e) => setReenterPassword(e.target.value)}
        	/>
      	</div>
    	<button className="btn btn-primary" disabled={!validateForm()}> Sign Up </button>
    </form>
  );
}

export default SignUp;
