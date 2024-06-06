import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NavBar from "./components/navbar/NavBar";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import LeftBar from "./components/leftbar/LeftBar";
import RightBar from "./components/rightbar/RightBar";

import './style.scss';
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

function App() {
  // const currentUser = true;

  const {darkMode} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);

  const queryClient = new QueryClient();

  const Layout = () => {
    
    return (
      <QueryClientProvider client={queryClient}>
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{flex:'6'}}>
          <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
      </QueryClientProvider>
    );
  };


  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to="/login" />
    }

    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout /></ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
