import { createBrowserRouter, defer, Navigate, Params, redirect } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import GroupsPage from "./pages/GroupsPage";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import ShedulePage from "./pages/ShedulePage";
import getUser from "./services/getUser.service";
import PaymentsPage from "./pages/PaymentsPage";
import HomePage from "./pages/HomePage";
import GroupPage from "./pages/GroupPage";
import CreateGroupPage from "./pages/CreateGroupPage";
import EditGroupPage from "./pages/EditGroupPage";
import CreateEventPage from "./pages/CreateEventPage";

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
        path: "profile/:UserId", //v
        loader: profileLoader,
        element: <ProfilePage />,
      },
      {
        path: "profile",//v
        element: <Navigate to="/profile/:UserId" />,
      },
      {
        path: "groups", //v
        element: <GroupsPage />,
      },
      {path:"event/new", element:<CreateEventPage/>},
      {
        path: "group/:GroupId", //v
        element: <GroupPage/>,
      },
      {
        path: "group/new", //v
        element: <CreateGroupPage/>,
      },
      {
        path: "group/:GroupId/edit", //v
        element: <EditGroupPage/>,
      },
      {
        path: "groups/shedule",//v
        element: <ShedulePage />,
      },
      {
        path: "payments",//v
        element: <PaymentsPage />,
      },
      {
        path: "payment/:UserId",
        element: <div>payment student</div>,
      },
      {
        path: "paymentGroup/:GroupId",
        element: <div>payment Group</div>,
      },
      {
        path: "/",//v
        element: <HomePage/>,
      },
    ],
  },
  {
    path: "/Auth",//v
    element: <AuthPage />,
  },
]);

export default router