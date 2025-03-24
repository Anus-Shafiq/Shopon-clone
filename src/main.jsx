import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import ViewProduct from "./components/viewProduct.jsx";

import App from "./App.jsx";
import NotFound from "./pages/notfound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<App />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home/:id" element={<ViewProduct />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
