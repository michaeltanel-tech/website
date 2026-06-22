import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Education } from "./components/Education";
import { Interests } from "./components/Interests";
import { Summary } from "./components/Summary";
import { WorkExperience } from "./components/WorkExperience";
import ErrorBoundary from "./ErrorBoundary";
import { Navbar } from "./Navbar";

export const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/interests" element={<Interests />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
};
