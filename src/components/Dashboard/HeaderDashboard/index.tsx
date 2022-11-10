import { Header } from "./style";
import { Link} from "react-router-dom";
import logout from "../../../Assets/logout.png";
import  { BsChatLeftText } from "react-icons/bs"

const HeaderDashboard = () => {
 
  
  return (
    <>
      <Header>
      <Link to='/dashboard/selectTask'>  <h1>DevPath</h1></Link>
        <div className="forum">
          <Link to="/dashboard/Forum">
            Forum
            <BsChatLeftText className="iconForum" />
          </Link>
        </div>
        
        <Link to="/" onClick={()=> window.localStorage.clear() }>
          <img src={logout} alt="deslogar" />
        </Link>
      </Header>
    </>
  );
};

export default HeaderDashboard;
