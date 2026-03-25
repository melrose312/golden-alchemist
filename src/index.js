import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#161a22",
            color: "#C5A059",
            fontFamily: "Raleway, sans-serif",
            fontSize: "1.2rem",
          }}
        >
          Loading...
        </div>
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>
);
