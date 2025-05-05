import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Login from "@pages/auth/Login";

function App() {
  // return <AppRoutes />;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
