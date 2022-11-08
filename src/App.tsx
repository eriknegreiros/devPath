import RoutesMain from "./routes/index"; 
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from "./context/UserContext";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer autoClose={1500} theme="dark"/>
      <AuthProvider>
       <RoutesMain />
      </AuthProvider>
    </>
  );
};
export default App;
