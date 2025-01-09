import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes";

function App() {
  return (
    <>
      <ToastContainer
        theme="colored"
        position="top-center"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
      />
      <Routes />
    </>
  );
}

export default App;
