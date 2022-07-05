import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import styles from './Register.module.css'

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const  {signup} = useAuth();
  const navigate = useNavigate();
  const  [error, setError] = useState();

  const handleChange = ({target: {name, value} }) => 
    setUser({...user, [name]: value})
  
  const handleSubmit =async e => {
    e.preventDefault()
    setError('')
    try {
        await signup(user.email, user.password)
        navigate("/")
    } catch (error) {
        setError(error.message);
    }

  }

  return (
    <div  className={styles.registerContainer}>
    {error && <Alert message={error}/>}
    <form onSubmit={handleSubmit} >
    <h3 className={styles.titleRegister}>Registrarse</h3>
      <label className={styles.registerLabel} htmlFor="email"> Email</label>
      <input
        className={styles.registerContent}
        type="email"
        name="email"
        placeholder="example123@gmail.com"
        onChange={handleChange}
      />

      <label className={styles.registerLabel} htmlFor="password"> password</label>
      <input
        className={styles.registerContent}
        type="password"
        name="password"
        id="password"
        placeholder="*******"
        onChange={handleChange}
      />
      <div className={styles.containerButton}>
      <button  className={styles.register}>Register</button>
       <Link to="/login"> <button className={styles.register}>log in</button></Link>

        </div>
    </form>

    </div>
  );
};

export default Register;
