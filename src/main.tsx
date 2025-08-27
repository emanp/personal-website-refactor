import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ContactPage from "./pages/Contact";
import Home from "./pages/Home";
import "./styles/globals.css"
import PortfolioPage from "./pages/Portfolio";
import InquiriesPage from "./pages/Inquiries";
// import HomePage from "./pages/home"; // You might want a separate file for Home

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact", element: <ContactPage /> },
      { path: "portfolio", element: <PortfolioPage />}, 
      { path: "inquiries", element: <InquiriesPage />}
    ],
  },

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
