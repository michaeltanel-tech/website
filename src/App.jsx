import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Education } from "./components/Education";
import { Interests } from "./components/Interests";
import { Summary } from "./components/Summary";
import { WorkExperience } from "./components/WorkExperience";
import ErrorBoundary from "./ErrorBoundary";
import { Navbar } from "./Navbar";

// Get the basename dynamically from environment
const getBasename = () => {
  return process.env.NODE_ENV === "development" ? "/" : "/my-website";
};

export const App = () => {
  return (
    <ErrorBoundary>
      <Router basename={getBasename()}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/Interests" element={<Interests />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};
