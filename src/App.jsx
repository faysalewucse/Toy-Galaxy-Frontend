import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Main from "./components/Main";
import WithNavbar from "./components/WithNavbar";
import Login from "./pages/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Signup from "./pages/SignUp";
import PrivateRoute from "./hooks/PrivateRoute";
import PublicRoute from "./hooks/PublicRoute";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: (
            <WithNavbar>
              <Home />
            </WithNavbar>
          ),
        },
        {
          path: "/login",
          element: (
            <PublicRoute>
              <WithNavbar>
                <Login />
              </WithNavbar>
            </PublicRoute>
          ),
        },
        {
          path: "/register",
          element: (
            <PublicRoute>
              <WithNavbar>
                <Signup />
              </WithNavbar>
            </PublicRoute>
          ),
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
