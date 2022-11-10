import { Header } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { BsBoxArrowRight } from "react-icons/bs";

const HeaderDashboardForum = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <div className="containerHeader">
        <Link to='/dashboard/selectTask'> <h1>DevPath</h1></Link> 
          <div>
            <Link className="backpage" to={"/dashboard/selectTask"}>
              Voltar
            </Link>
            <Link to="/">
              <BsBoxArrowRight />
            </Link>
          </div>
        </div>
      </Header>
    </>
  );
};

export default HeaderDashboardForum;
