import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// Pages
const HomePage = React.lazy(() => import("./pages/HomePage"));
const AuthPage = React.lazy(() => import("./pages/AuthPage"));

// Store
import useUserStore from "./store/useUserStore";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const { user, checkAuth } = useUserStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <React.Suspense fallback={<LoadingSpinner />}>
                <HomePage />
              </React.Suspense>
            ) : (
              <Navigate to={"/auth"} />
            )
          }
        />
        <Route
          path="/auth"
          element={
            !user ? (
              <React.Suspense fallback={<LoadingSpinner />}>
                <AuthPage />
              </React.Suspense>
            ) : (
              <Navigate to={"/"} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
