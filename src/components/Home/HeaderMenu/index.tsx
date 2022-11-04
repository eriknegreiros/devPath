import { Link } from "react-router-dom";
import { Header } from "./style";
import { motion } from "framer-motion";



const HeaderMenu = () => {
  return (
    <>
     <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.2,
      }}>

      <Header>
        
        <h1>DevPath</h1>
       

        <li>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/quemSomos">
            {" "}
            <p>Quem Somos</p>
          </Link>
          <Link to="/login">
            {" "}
            <p>Login</p>
          </Link>
          <Link to="/signUp">
            {" "}
            <p>Cadastro</p>
          </Link>
        </li>
      </Header>
      </motion.div>

    </>
  );
};

export default HeaderMenu;
