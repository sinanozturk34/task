import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { AppRoot } from "./routes/app/root";
import { FlightsRoute } from "./routes/app/flights";
import { FlightSort } from "@/features/book-card/components/flight-sort";
import { SearchFlightsRoute } from "./routes/app/search-flights";
import { FlightsHomepage } from "@/features/book-card/components/flights-homepage";
import { AuthRoot } from "./routes/auth/root";
import { LoginRoute } from "./routes/auth/login";

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: "/auth",
      element: (
        // <ProtectedRoute>
        <AuthRoot />
        // <ProtectedRoute>
      ),
      children: [
        {
          path: "register",
          element: (
            <div className="flex size-full items-center justify-center">
              <div>Register</div>
            </div>
          ),
        },
        {
          path: "login",
          element: (
            <div className="flex size-full items-center justify-center">
              <div>
                <LoginRoute />
              </div>
            </div>
          ),
        },
      ],
    },
    {
      path: "/",
      element: (
        // <ProtectedRoute>
        <AppRoot />
        // </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Navigate to="/homepage" replace />,
        },
        {
          path: "homepage",
          element: <FlightsRoute />,
          children: [
            {
              index: true,
              element: (
                <div className="flex flex-col-reverse gap-y-8  md:flex-row md:gap-x-8">
                  <div className="flex-1">
                    <FlightsHomepage />
                  </div>
                  <div className="flex flex-col gap-y-4 ">
                    <FlightSort />
                  </div>
                </div>
              ),
            },
            {
              path: "search-flights",
              element: <SearchFlightsRoute />,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      lazy: async () => {
        const { NotFoundRoute } = await import("./routes/not-found");
        return { Component: NotFoundRoute };
      },
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};
