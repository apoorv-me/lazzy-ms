import React from "react";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wallet from "./pages/Wallet";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import EditGallery from "./pages/EditGallery";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Explore from "./pages/Explore";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { logIn } from "./slices/userSlice";
import ViewGallery from "./pages/ViewGallery";
import CreateUnityGallery from "./pages/CreateUnityGallery";
import UnityGallery from "./pages/UnityGallery";
import { ContactUS } from "./pages/ContactUS";
import { FAQ } from "./pages/FAQ";

const routes = [
  {
    path: "/",
    exact: true,
    component: <Layout view={<Home />} title="Metaframes" />,
  },
  {
    path: "/connect-wallet",
    exact: true,
    component: <Layout view={<Wallet />} title="Metaframes" heading="Wallet" />,
  },
  {
    path: "/profile/:id",
    exact: true,
    component: <Layout view={<Profile />} title="Metaframes" />,
  },
  {
    path: "/edit-profile/:id",
    exact: true,
    component: (
      <Layout
        view={<EditProfile />}
        title="Metaframes"
        heading="Edit Profile"
      />
    ),
  },
  {
    path: "/galleries/:id",
    exact: true,
    component: <ViewGallery />,
  },
  {
    path: "/unity/:id",
    exact: true,
    component: <UnityGallery />,
  },

  {
    path: "/create-unity-gallery/",
    exact: true,
    component: <CreateUnityGallery />,
  },

  {
    path: "/contact-us",
    exact: true,
    component: <Layout view={<ContactUS />} title="Metaframes" isBg />,
  },

  {
    path: "/faq",
    exact: true,
    component: <Layout view={<FAQ />} title="Metaframes" isBg />,
  },

  {
    path: "/edit-gallery/:id",
    exact: true,
    component: (
      <Layout
        view={<EditGallery />}
        title="Metaframes"
        heading="Edit Gallery"
      />
    ),
  },
  {
    path: "/login",
    exact: true,
    component: <Layout view={<Login />} title="Metaframes" isBg />,
  },
  {
    path: "/register",
    exact: true,
    component: <Layout view={<Register />} title="Metaframes" isBg />,
  },
  {
    path: "/explore",
    exact: true,
    component: (
      <Layout view={<Explore />} title="Metaframes" heading="Explore" />
    ),
  },
  {
    path: "/forgot-password",
    exact: true,
    component: <Layout view={<ForgotPassword />} title="Metaframes" isBg />,
  },
  {
    path: "/reset-password",
    exact: true,
    component: <Layout view={<ResetPassword />} title="Metaframes" isBg />,
  },
];
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch(logIn(user));
    }
  });

  return (
    <Router basename={"/metaframe"}>
      <Routes>
        {routes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            element={<>{route.component}</>}
          />
        ))}
        <Route key="404" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
