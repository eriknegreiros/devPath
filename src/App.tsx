import RoutesMain from "./Routes/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./Context/UserContext";

const App = () => {
  return (
    <>
      <ToastContainer autoClose={1500} theme="dark" />
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  );
};
export default App;
