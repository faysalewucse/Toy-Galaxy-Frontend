import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Main from "./components/Main";
import WithNavbar from "./components/WithNavbar";
import Login from "./pages/Login";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Signup from "./pages/SignUp";
import PrivateRoute from "./hooks/PrivateRoute";
import PublicRoute from "./hooks/PublicRoute";
import ErrorPage from "./pages/ErrorPage";
import AddToy from "./pages/AddToy";
import AllToys from "./pages/AllToys";
import ToyDetails from "./pages/ToyDetails";
import MyToys from "./pages/MyToys";
import Blogs from "./pages/Blogs";

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
          path: "/blogs",
          element: (
            <WithNavbar>
              <Blogs />
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
          path: "/addtoy",
          element: (
            <PrivateRoute>
              <WithNavbar>
                <AddToy />
              </WithNavbar>
            </PrivateRoute>
          ),
        },
        {
          path: "/mytoys",
          element: (
            <PrivateRoute>
              <WithNavbar>
                <MyToys />
              </WithNavbar>
            </PrivateRoute>
          ),
        },
        {
          path: "/alltoys",
          element: (
            <WithNavbar>
              <AllToys />
            </WithNavbar>
          ),
          loader: async () =>
            fetch(`${import.meta.env.VITE_BASE_API_URL}/toys`),
        },
        {
          path: "/toy-details/:toyId",
          element: (
            <PrivateRoute>
              <WithNavbar>
                <ToyDetails />
              </WithNavbar>
            </PrivateRoute>
          ),
          loader: async ({ params }) =>
            fetch(`${import.meta.env.VITE_BASE_API_URL}/toy/${params.toyId}`),
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
