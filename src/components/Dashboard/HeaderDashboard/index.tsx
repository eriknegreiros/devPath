import { Header } from "./style";
import { Link } from "react-router-dom";
import logout from "../../../Assets/logout.png";

const HeaderDashboard = () => {
  return (
    <>
      <Header>
        <h1>DevPath</h1>
        <Link to="/">
          <img src={logout} alt="deslogar" />
        </Link>
      </Header>
    </>
  );
};

export default HeaderDashboard;
