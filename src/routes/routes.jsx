import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/HomePage/Home";
import TimeLine from "../pages/TimeLine/TimeLine";
import Stats from "../pages/Stats/Stats";
import FriendDetails from "../pages/FriendDetails/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
        {index:true,element: <Home/>},
        {
          path:'/timeline',
          element:<TimeLine/>
        },
        {
          path:'/stats',
          element:<Stats/>
        },
        {
          path:'/friends/:id',
          element:<FriendDetails/>
        }
    ]
  },
]);