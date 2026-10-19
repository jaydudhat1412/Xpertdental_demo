import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";

// Lazy load secondary subpages for compact initial bundle size
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Doctors = lazy(() => import("./pages/Doctors"));
const DoctorProfile = lazy(() => import("./pages/DoctorProfile"));
const Contact = lazy(() => import("./pages/Contact"));

// Sleek top progress indicator matching brand colors (non-blocking)
const TopProgressBar = () => (
  <div className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-gray-100 dark:bg-[#1f1e22] overflow-hidden pointer-events-none">
    <div className="h-full bg-gradient-to-r from-[#d87943] via-[#e78a53] to-[#527575] animate-pulse w-full shadow-[0_0_8px_rgba(216,121,67,0.6)]"></div>
  </div>
);

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<TopProgressBar />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="services/:id" element={<ServiceDetail />} />
              <Route path="doctors" element={<Doctors />} />
              <Route path="doctors/:id" element={<DoctorProfile />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}