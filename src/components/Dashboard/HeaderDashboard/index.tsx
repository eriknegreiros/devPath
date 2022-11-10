import { Header } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { BsChatLeftText, BsBoxArrowRight } from "react-icons/bs";

const HeaderDashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <h1>DevPath</h1>
        <div className="forum">
          <Link to="/dashboard/Forum">
            Forum
            <BsChatLeftText className="iconForum" />
          </Link>
        </div>

        <Link to="/">
          <BsBoxArrowRight />
        </Link>
      </Header>
    </>
  );
};

export default HeaderDashboard;
