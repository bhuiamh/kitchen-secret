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
import About from "../pages/Design/About";
import SendFeedback from "../pages/Design/SendFeedback";
import Footer from "../pages/Footer/Footer";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
            <About></About>
            <SendFeedback></SendFeedback>
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
    errorElement: <ErrorPage></ErrorPage>,
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
            <Footer></Footer>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
