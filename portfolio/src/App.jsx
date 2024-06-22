import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Contact from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Skills from "./Components/Skill";
import resumePdf from "./assets/pdf/Maurice-Minin-Dsouza.pdf";

import { lazy, Suspense } from "react";

const Project = lazy(() => import("./Components/Projects"));
const Resume = lazy(() => import("./Components/Resume"));
const Home = lazy(() => import("./Components/Home"));

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Suspense fallback={<div>Loading ...</div>}>
                <Home />
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
            <Suspense fallback={<div>Loading Resume...</div>}>
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
