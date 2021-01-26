import React, {useState} from "react" 
//import './App.css';


function SignUp() {
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
      <h1> Sign Up </h1>
      <div>
        <label> Email: </label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label> Password </label>
        <input type="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button disabled={!validateForm()}> Sign Up </button>
    </form>
  );
}

export default SignUp;
