import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";

import KitchenDashboard from "./routes/KitchenDashboard.jsx";
import Layout from "./Layout/index.jsx";
import Contact from "./routes/Contact.jsx";
import RamenComponent from "./routes/RamenComponent.jsx";
import Home from "./routes/Home.jsx";
// import Menu from "./routes/Menu.jsx";
import About from "./routes/About.jsx";
import Admin from "./routes/Admin.jsx";
import PageNotFound from "./routes/PageNotFound.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import ProtectedRoute from "./Layout/components/ProtectedRoute.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <ScrollToTop>
                  <Layout />
                </ScrollToTop>
              }
            >
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="custom-ramen" element={<RamenComponent />} />
              <Route path="custom-ramen/:table" element={<RamenComponent />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route
              path="/kitchen"
              element={
                <ProtectedRoute>
                  <KitchenDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
