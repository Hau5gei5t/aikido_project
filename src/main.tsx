import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  defer,
  Params,
  redirect,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import getUser from "./services/getUser.service";


const loadUser = async () => {
  const user = localStorage.getItem("user");
  if (!user) {
    return redirect("/Auth");
  }
  return null;
};
const profileLoader = async ({ params }: { params: Params<"UserId"> }) => {
  return defer({
    profile: getUser(params.UserId!),
  });
};

const router = createBrowserRouter([
  {
    path: "/",
    loader: loadUser,
    element: <MainPage />,
    children: [
      {
        path: "profile/:UserId",//v
        loader: profileLoader,
        element: <ProfilePage />,
      },
      {
        path: "groups",//v
        element: <div>groups</div>,
      },
      {
        path: "group/:GroupId",//v
        element: <div>groupId</div>,
      },
      {
        path: "group/new",//v
        element: <div>new groupId</div>,
      },
      {
        path: "group/:GroupId/edit",//v
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
