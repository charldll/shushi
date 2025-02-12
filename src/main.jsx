import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";

import Kitchen from "./routes/Kitchen.jsx";
import Layout from "./Layout/index.jsx";
import Contact from "./routes/Contact.jsx";
import RamenComponent from "./routes/RamenComponent.jsx";
import Home from "./routes/Home.jsx";
import Menu from "./routes/Menu.jsx";
//import Ramen from
import Admin from "./routes/Admin.jsx";
import PageNotFound from "./routes/PageNotFound.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./Layout/components/ProtectedRoute.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />

            <Route
              path="/kitchen"
              element={
                <ProtectedRoute>
                  <Kitchen />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<PageNotFound />} />
            <Route path="custom-ramen" element={<RamenComponent />} />
            <Route path="custom-ramen/:table" element={<RamenComponent />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
