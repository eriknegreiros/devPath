import { Routes, Route, Navigate } from "react-router-dom";
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
import DashboardLogicaProgramacao from "../Pages/DashboardLogicaProgramacao";
import ProtectedRoutes from "../Components/ProtectedRoutes";

const RoutesMain = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<Navigate to={"/"} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<Register />} />
      <Route path="/quemSomos" element={<WhoWeAre />} />
      <Route path="/dashboard/selectTask" element={<SelectTask />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard/selectTask" element={<SelectTask />} />
        <Route path="dashboard/Forum" element={<Forum />} />
        <Route
          path="logicaprogramacao"
          element={<DashboardLogicaProgramacao />}
        />
        <Route path="dashboard/frontEnd" element={<SelectFrontEnd />}>
          <Route index element={<DashboardFrontBasic />} />

          <Route
            path="frontEndIntermediary"
            element={<DashboardFrontIntermediario />}
          />

          <Route path="frontEndAdvanced" element={<DashboardFrontAvancado />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RoutesMain;
