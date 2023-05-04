import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import ChefsLayout from "../layouts/ChefsLayout/ChefsLayout";
import Login from "../pages/Login/Login";
import Chefs from "../pages/Chefs/Chefs";
import ChefsDetails from "../pages/ChefsDetails/ChefsDetails";
import Register from "./../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
import CarouselDesign from "../pages/Design/CarouselDesign";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/",
        element: (
          <div>
            <CarouselDesign></CarouselDesign>
            <Chefs></Chefs>
          </div>
        ),
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },

  {
    path: "Chefs",
    element: <ChefsLayout></ChefsLayout>,
    children: [
      {
        path: "/Chefs",
        element: <Chefs></Chefs>,
      },
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <ChefsDetails></ChefsDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
