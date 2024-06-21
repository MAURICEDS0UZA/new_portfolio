import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Contact from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Skills from "./Components/Skill";

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
              <Projects />
              <Skills />
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
