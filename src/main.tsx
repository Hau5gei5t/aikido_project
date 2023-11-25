import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";


const loadUser = async () => {
  const user = localStorage.getItem("user");
  if (!user) {
    return redirect("/Auth");
  }
  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    loader: loadUser,
    element: <MainPage />,
    children: [
      {
        path: "profile/:UserId",
        element: <ProfilePage />,
      },
      {
        path: "groups",
        element: <div>groups</div>,
      },
      {
        path: "group/:GroupId",
        element: <div>groupId</div>,
      },
      {
        path: "group/new",
        element: <div>new groupId</div>,
      },
      {
        path: "group/:GroupId/edit",
        element: <div>edit groupId</div>,
      },
      {
        path: "groups/shedule",
        element: <div>Shedule</div>,
      },
      {
        path: "payments",
        element: <div>payments</div>,
      },
      {
        path: "payment/:UserId",
        element: <div>payment student</div>,
      },
      {
        path: "/",
        element: <div>home</div>,
      },
    ],
  },
  {
    path: "/Auth",
    element: <AuthPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
