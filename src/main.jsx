import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

function CrashScreen() {
  const [err, setErr] = React.useState("");

  React.useEffect(() => {
    const onError = (e) => setErr(String(e?.error?.stack || e?.message || e));
    const onRejection = (e) => setErr(String(e?.reason?.stack || e?.reason || e));
    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);

  if (!err) return null;

  return (
    <div style={{ padding: 16, background: "#2b0000", color: "white", fontFamily: "monospace" }}>
      <div style={{ fontWeight: 700, marginBottom: 8 }}>💥 Crash détecté</div>
      <pre style={{ whiteSpace: "pre-wrap" }}>{err}</pre>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CrashScreen />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
