import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import styles from "./Login.module.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handlegooglesignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.loginContainer}>
      {error && <Alert message={error}/>}
      <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h3 className={styles.titleLogin}>Inicio de sesion</h3>
        <label className={styles.loginLabel} htmlFor="email"> Email</label>
        <input 
          className={styles.loginContent}
          type="email"
          name="email"
          placeholder="example123@gmail.com"
          onChange={handleChange}
        />

        <label className={styles.loginLabel} htmlFor="password"> password</label>
        <input
          className={styles.loginContent}
          type="password"
          name="password"
          id="password"
          placeholder="*******"
          onChange={handleChange}
        />

        <div className={styles.containerButton}>
        <button className={styles.login}>log in</button>

        </div>
      </form>

      <p className={styles.register}> <Link to="/register" > <br></br><button className={styles.linkRegister}>Register</button></Link></p>

      <button className={styles.loginGoogle} onClick={handlegooglesignin}>Inicio de sesion con Google</button>
    </div>
  );
};

export default Login;
