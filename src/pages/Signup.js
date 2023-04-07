import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./styles.css";

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, errors } = useForm();
  const [users, setUsers] = useState([]);


  const onSubmit = (data) => {
    const userList = [...users, data];
    setUsers(userList);
    localStorage.setItem("users", JSON.stringify(userList));
    navigate("/login")
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input__contianer">
        <div className="input__container__form">
          <label>Name:</label>
          <input type="text" name="name" ref={register({ required: true })} />
        </div>
        {errors.name && <span className="validation__text">Name is required</span>}
      </div>
      <div className="input__contianer">
        <div className="input__container__form">
          <label>Password:</label>
          <input name="password" type="password" ref={register({ required: true })} />
        </div>
        {errors.password && <span className="validation__text">PASSWORD is required</span>}
      </div>
      <div className="input__contianer">
        <div className="input__container__form">
          <label>Email:</label>
          <input name="email" type="email" ref={register({ required: true })} />
        </div>
        {errors.email && <span className="validation__text">Email is required</span>}
      </div>
      <div className="input__contianer">
        <div className="input__container__form">
          <label>Phone Number:</label>
          <input type="tel" name="phoneNumber" ref={register({ required: true })} />
        </div>
        {errors.phoneNumber && <span className="validation__text">PhoneNumber is required</span>}
      </div>
      <div className="input__contianer">
        <div className="input__container__form">
          <label>Profession:</label>
          <select name="profession" ref={register({ required: true })}>
            <option value="">--Select--</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </select>
        </div>
        {errors.profession && <span className="validation__text">Profession is required</span>}
      </div>
      <div className="input__contianer">
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
}

export default Signup;
