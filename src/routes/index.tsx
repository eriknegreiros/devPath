import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Home from "../pages/Home";
import WhoWeAre from "../pages/WhoWeAre";
import SelectTask from "../pages/Dashboard/SelectTask";
import Login from "../pages/login";
import DashboardFrontBasic from "../pages/DashboardFrontBasic";
import DashboardFrontIntermediario from "../pages/DashboardFrontIntermediario";
import DashboardFrontAvancado from "../pages/DashboardFrontAvancado";

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
      
      <Route path="dashboard/selectTask/frontendbasic" element={<DashboardFrontBasic />} />
      <Route path="dashboard/selectTask/frontendintermediario" element={<DashboardFrontIntermediario />} />
      <Route path="dashboard/selectTask/frontendavancado" element={<DashboardFrontAvancado />} />
    </Routes>
  );
};

export default RoutesMain;
