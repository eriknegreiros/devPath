import { Routes, Route, Navigate } from "react-router-dom";
import Register from "../pages/Register";
import Home from "../pages/Home";
import WhoWeAre from "../pages/WhoWeAre";
import SelectTask from "../pages/Dashboard/SelectTask";
import Login from "../pages/Login";
import Forum from "../pages/DashboardForum";
import DashboardFrontBasic from "../components/Dashboard/DashboardFrontBasic";
import DashboardFrontIntermediario from "../components/Dashboard/DashboardFrontIntermediario";
import DashboardFrontAvancado from "../components/Dashboard/DashboardFrontAvancado";
import SelectFrontEnd from "../pages/Dashboard/SelectFrontEnd";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to={'/'}/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<Register />} />
      <Route path="/quemSomos" element={<WhoWeAre />} />
      <Route path="/dashboard/selectTask" element={<SelectTask />} />
      <Route path="dashboard/Forum" element={<Forum />} />
      

      <Route path="dashboard/frontEnd" element={<SelectFrontEnd />}>

        <Route index element={<DashboardFrontBasic />} />
    
        <Route path="frontEndIntermediary" element={<DashboardFrontIntermediario />} />

        <Route path="frontEndAdvanced"element={ <DashboardFrontAvancado />} />
     
      </Route>
  
  
  
    </Routes>
  );
};

export default RoutesMain;

