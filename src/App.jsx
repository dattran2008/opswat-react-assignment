import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "@/components/Loading";

import "./App.css";

const HomePage = lazy(() => import("@/layouts/HomePage.jsx"));
const WidgetApp = lazy(() => import("@/features/template"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/widget" element={<WidgetApp />} />
      </Routes>
    </Suspense>
  );
}

export default App;
