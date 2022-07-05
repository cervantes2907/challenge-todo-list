import { useAuth } from "../context/authContext";
import styles from './Home.module.css'
import TodoApp from "./todo/TodoApp";

const Home = () => {
  const { user, logout, loading } = useAuth();
  
  

  const handleLogout = async () => {
    try {
      await logout();
    }catch(error) {
      console.log(error);
    }
  };
  if(loading) return <h1>loading</h1>

  return (
    <>
    <div className={styles.navbarHome}>
      <p className={styles.user}> {user.displayName || user.email}</p>
      <p onClick={handleLogout} className={styles.logout}>Logout</p>
    </div>
     <div className={styles.containerComponents}>
        <TodoApp /> 
     </div>
    </>
  );
};

export default Home;
