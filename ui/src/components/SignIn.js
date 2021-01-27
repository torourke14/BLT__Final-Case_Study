import React, {useState} from "react" 
import 'bootstrap/dist/css/bootstrap.min.css';

function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		//BACKEND - post user request goes here
		console.log(email, password);
	}

	const validateForm = () => {
		return email.length>0 && password.length>4;
	}

	return (
	<form onSubmit={handleSubmit}>
    	<h1> Sign In </h1>
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
    	<button className="btn btn-primary" disabled={!validateForm()}> Sign In </button>
    </form>
  );
}

export default SignIn;
