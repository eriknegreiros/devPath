import { useState } from "react";
import { Link } from "react-router-dom";
import { Header, Bars, NavMenu } from "./style";
import { motion } from "framer-motion";
// import { DashboardContext } from "../../../Context/NavBar";

const HeaderMenu = () => {
  const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.7,
          delay: 0.2,
        }}
      >
        <Header>
          <div className="containerHeader">
            <h1>DevPath</h1>
            <nav>
              <div
                className="toggle"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                <Bars />
              </div>
              <NavMenu
                className={
                  isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
              >
                <li>
                  <Link to="/">
                    <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link to="/quemSomos">
                    {" "}
                    <p>Quem Somos</p>
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    {" "}
                    <p>Login</p>
                  </Link>
                </li>
                <li>
                  <Link to="/signUp">
                    {" "}
                    <p>Cadastro</p>
                  </Link>
                </li>
              </NavMenu>
            </nav>
          </div>
        </Header>
      </motion.div>
    </>
  );
};

export default HeaderMenu;
