import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import App from "../App";
import Contact from "../pages/Home/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
