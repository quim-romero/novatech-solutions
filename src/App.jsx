import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <main className="min-h-screen">
        <AppRoutes />
      </main>
    </Router>
  );
}
