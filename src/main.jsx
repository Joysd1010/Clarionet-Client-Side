import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/LoginRegester/Login";
import Errorpage from "./Pages/ERR/Errorpage";
import Registration from "./Pages/LoginRegester/Registration";
import Class from "./Pages/Class/Class";
import Instructors from "./Pages/Instructors/Instructors";
import MyLesson from "./Pages/MyLesson/MyLesson";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MySelectedClass from "./Pages/MyLesson/MySelectedClass/MySelectedClass";
import DashBoardHeader from "./Pages/MyLesson/DashbordHeader/DashBoardHeader";
import Payment from "./Pages/MyLesson/MySelectedClass/Payment";
import AdminHome from "./Pages/MyLesson/Admin/AdminHome";
import ManageUser from "./Pages/MyLesson/Admin/ManageUser";
import AddClass from "./Pages/MyLesson/Instructor/AddClass";
import ManageClass from "./Pages/MyLesson/Admin/ManageClass";
import MyaddedClass from "./Pages/MyLesson/Instructor/MyaddedClass";
import MuEnrolled from "./Pages/MyLesson/MuEnrolled";
import PaymentHistory from "./Pages/MyLesson/MySelectedClass/PaymentHistory";
import AddFeedback from "./Pages/MyLesson/Admin/AddFeedback";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/reg",
        element: <Registration />,
      },
      {
        path: "/class",
        element: <Class />,
        loader: () => fetch("https://clarionet-server-side.vercel.app/class"),
      },
      {
        path: "/instruct",
        element: <Instructors />,
        loader: () => fetch("https://clarionet-server-side.vercel.app/instruct"),
      },
    ],
  },

  {
    path: "myLesson",
    element: (
      <PrivateRoute>
        <MyLesson />
      </PrivateRoute>
    ),
    children: [
      {
        path: "myselceted",
        element: <MySelectedClass />,
      },
      {
        path: "/myLesson",
        element: <DashBoardHeader />,
      },
      {
        path: "pay",
        element: <Payment />,
      },
      {
        path: "adminhome",
        element: <AdminHome />,
      },
      {
        path: "addClass",
        element: <AddClass />,
      },
      {
        path: "manage",
        element: <ManageClass />,
      },
      {
        path: "allusers",
        element: <ManageUser />,
      }
      ,
      {
        path: "enroll",
        element:<MuEnrolled/>,
      }
      ,
      {
        path: "myadded",
        element: <MyaddedClass/>
      }
      ,
      {
        path: "history",
        element: <PaymentHistory/>
      }
      ,
      {
        path: "feedback",
        element: <AddFeedback/>
      }
      ,
    ],
  },
  {
    path: "*",
    element: <Errorpage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
