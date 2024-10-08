import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailView from "./components/user/DetailView";
import AddProfile from "./components/admin/AddProfile";
import ProgressSpinner from "./components/ProgressSpinner";
const DetailsView = lazy(() => import("./components/user/DetailView"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const UserPage = lazy(() => import("./pages/user/UserPage"));
const AdminPage = lazy(() => import("./pages/admin/AdminPage"));
const ProfileUpdatePage = lazy(() =>
  import("./components/admin/ProfileUpdatePage")
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={<ProgressSpinner />}>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/user" element={<UserPage />} />
          <Route path="/profile/:id" element={<DetailView />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/profile/:id" element={<ProfileUpdatePage />} />
          <Route path="/admin/add-profile" element={<AddProfile />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
