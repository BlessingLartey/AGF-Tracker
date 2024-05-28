import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// import Login from "./components/Login";
// import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import EmployeesAppraisal from "./Pages/EmployeesAppraisal";
import NotFound from "./Pages/NotFound";
import MainPageLayout from "./Pages/MainPageLayout";
// import Settings from "./Pages/Settings";
// import Dashboard from "./Pages/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPageLayout />}>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/" element={<Home />}>
        <Route index element={<EmployeesAppraisal />} />
        <Route path="dashboard" element={<NotFound />} />
        <Route path="profile" element={<NotFound />} />
        <Route path="settings" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
