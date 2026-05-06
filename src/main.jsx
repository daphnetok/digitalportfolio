import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const runId = `pre-fix-${Date.now()}`;

// #region agent log
fetch("http://127.0.0.1:7789/ingest/4cad9f9e-39a5-48db-9dd0-038ddb88a4a3", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Debug-Session-Id": "0b756e",
  },
  body: JSON.stringify({
    sessionId: "0b756e",
    runId,
    hypothesisId: "H4",
    location: "src/main.jsx:7",
    message: "main entry reached before App import",
    data: { hasRoot: Boolean(document.getElementById("root")) },
    timestamp: Date.now(),
  }),
}).catch(() => {});
// #endregion

import("./App")
  .then(({ default: App }) => {
    // #region agent log
    fetch("http://127.0.0.1:7789/ingest/4cad9f9e-39a5-48db-9dd0-038ddb88a4a3", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "0b756e",
      },
      body: JSON.stringify({
        sessionId: "0b756e",
        runId,
        hypothesisId: "H2",
        location: "src/main.jsx:27",
        message: "dynamic App import succeeded",
        data: {},
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion

    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  })
  .catch((error) => {
    // #region agent log
    fetch("http://127.0.0.1:7789/ingest/4cad9f9e-39a5-48db-9dd0-038ddb88a4a3", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "0b756e",
      },
      body: JSON.stringify({
        sessionId: "0b756e",
        runId,
        hypothesisId: "H1",
        location: "src/main.jsx:51",
        message: "dynamic App import failed",
        data: {
          errorMessage: error?.message ?? "unknown",
          errorName: error?.name ?? "unknown",
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion

    throw error;
  });
