import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "context/AuthContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
   // AuthContextProvider 최상단에 적용,사용자정보를 가져올수 있게함(MenuList컴포넌트에서 사용)
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
);
