import { Header } from "./style";
import { Link, useNavigate } from "react-router-dom";
import logout from "../../../Assets/logout.png";
import  { BsChatLeftText } from "react-icons/bs"

const HeaderDashboard = () => {
  const navigate = useNavigate()
  
  return (
    <>
      <Header>
        <h1>DevPath</h1>
        <div className="forum">
          <Link to="/dashboard/Forum">Forum
          <BsChatLeftText className="iconForum"/>
          </Link>
        </div>
        
        <Link to="/">
          <img src={logout} alt="deslogar" />
        </Link>
      </Header>
    </>
  );
};

export default HeaderDashboard;
