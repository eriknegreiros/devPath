import { Routes, Route } from "react-router-dom";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import WhoWeAre from "../Pages/WhoWeAre";
import SelectTask from "../Pages/Dashboard/SelectTask";
import Login from "../Pages/login";
import Forum from "../Pages/DashboardForum";
import DashboardFrontBasic from "../Components/Dashboard/DashboardFrontBasic";
import DashboardFrontIntermediario from "../Components/Dashboard/DashboardFrontIntermediario";
import DashboardFrontAvancado from "../Components/Dashboard/DashboardFrontAvancado";
import SelectFrontEnd from "../Pages/Dashboard/SelectFrontEnd";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<Register />} />
      <Route path="/quemSomos" element={<WhoWeAre />} />
      <Route path="/dashboard/selectTask" element={<SelectTask />} />
      <Route path="dashboard/Forum" element={<Forum />} />
      <Route path="/dashboard/frontEnd" element={<SelectFrontEnd />} />
      <Route
        path="dashboard/selectTask/frontendbasic"
        element={<DashboardFrontBasic />}
      />
      <Route
        path="dashboard/selectTask/frontendintermediario"
        element={<DashboardFrontIntermediario />}
      />
      <Route
        path="dashboard/selectTask/frontendavancado"
        element={<DashboardFrontAvancado />}
      />
    </Routes>
  );
};

export default RoutesMain;
