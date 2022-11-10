import RoutesMain from "./Routes/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer autoClose={1500} theme="dark" />

      <RoutesMain />
    </>
  );
};
export default App;
