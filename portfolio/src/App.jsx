import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Contact from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Skills from "./Components/Skill";
import resumePdf from "./assets/pdf/Maurice-Minin-Dsouza.pdf";
import Home from "./Components/Home";
import { lazy, Suspense } from "react";
import ShimmerResume from "./Components/ShimmerResume";
import { FaBomb } from "react-icons/fa6";

const Project = lazy(() => import("./Components/Projects"));
const Resume = lazy(() => import("./Components/Resume"));

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Suspense
                fallback={
                  <div className="bg-gray-100 ">
                    <FaBomb className="animate-bounce flex m-auto size-6" />
                  </div>
                }
              >
                <Project />
              </Suspense>
              <Skills />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <Suspense fallback={<div>Loading Project...</div>}>
              <Project />
            </Suspense>
          }
        />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/resume"
          element={
            <Suspense
              fallback={
                <div>
                  <ShimmerResume />
                </div>
              }
            >
              {resumePdf && <Resume />}
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
