import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
