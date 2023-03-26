import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Smocktest from "./components/sMockTest/Smocktest";
import Exam from "./pages/exam/Exam";
import Home from "./pages/Home";
import Jee from "./pages/jee/Jee";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

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
        path: "/register",
        element: <Register />,
      },
      {
        path: "/jee",
        element: <Jee />,
      },
      {
        path: "/jee/sub/mocktest",
        element: <Smocktest />,
      },
      {
        path: "/start/exam",
        element: <Exam />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
