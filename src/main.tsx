import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from "./routes";
import "./index.css";
  import { ToastContainer, Flip } from "react-toastify";

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Routes />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Flip}
      />
    </StrictMode>
  );
