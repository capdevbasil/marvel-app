import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Character from "./pages/Character";
import Root from "./pages/Root";
import Stories from "./pages/Stories";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/character/:id",
          element: <Character />,
        },
        {
          path: "/home",

          element: <Home />,
        },
        {
          path: "/:id/comics",
          element: <Character />,
        },
        {
          path: "/:id/series",
          element: <Character />,
        },
        {
          path: "/:id/stories",
          element: <Stories />,
        },
        {
          path: "/:id/events",
          element: <Character />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
