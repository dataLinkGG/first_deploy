import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// 1 - configing router

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./routes/Home.jsx";
import Contact from "./routes/Contact.jsx";
import App from "./App.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import ContactDetails from "./routes/ContactDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // 3 - página de erro
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // 5 - nested routes dynamic routes
      // algo carregado do banco
      {
        path: "contact/:id",
        element: <ContactDetails />,
      },
      // 7 - navigate para paginas nao exitentes, links, bookmarks...
      // ao utilizar alguma pagina, e importante usar isso
      {
        path: "oldcontact",
        element: <Navigate to="contact" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
