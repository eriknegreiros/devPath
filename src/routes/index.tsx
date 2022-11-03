import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
export default RoutesMain;
