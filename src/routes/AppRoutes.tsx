import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Login = lazy(() => import("@pages/auth/Login"));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
          {/* <Route element={<AuthWrapper />}> */}
          <Route path="/" Component={Login} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
