import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"
function Login() {
    const navigate=useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const users = JSON.parse(localStorage.getItem("users"));


  const handleSubmit = (e) => {
    e.preventDefault();
    if(users && users!==null){
      const user = users.find((user) => user.name === name && user.password === password);
      if (user) {
          navigate("/dashboard")
      } else {
        setErrorMessage("Invalid Credentials");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <button type="submit">Log In</button>
      </div>
      {errorMessage && <p className="validation__text">{errorMessage}</p>}
    </form>
  );
}

export default Login;
