import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Home from "../pages/Home";
import WhoWeAre from "../pages/WhoWeAre";
import SelectTask from "../pages/Dashboard/SelectTask";
import Login from "../pages/login";
import DashboardContents from "../pages/DashboardContents";


const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<Register />} />
      <Route path="/quemSomos" element={<WhoWeAre />} />

      <Route path="/dashboard/selectTask" element={<SelectTask/>} />
      <Route path="dashboard/selectTask/contents" element={< DashboardContents />} />


    </Routes>
  );
};

export default RoutesMain;
