import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Skills from "./components/pages/Skills";
import Education from "./components/pages/Education";
import Work from "./components/pages/Work";
import Projects from "./components/pages/Project";
import Review from "./components/pages/Review";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import GuideBtns from "./components/GuideBtns";
import Navi from "./components/Navi";
import Container from "react-bootstrap/Container";

export const SetPageInfoContext = React.createContext();

const App = () => {
  const [contactInfo, setContactInfo] = useState([]);
  const [educationInfo, setEducationInfo] = useState([]);
  const [workInfo, setWorkInfo] = useState([]);
  const [projectInfo, setProjectInfo] = useState([]);
  const [skills, setSkills] = useState([]);
  // const [editing, setEditing] = useState([]);

  const [activeKey, setActiveKey] = useState("home");

  return (
    <div className="App d-flex flex-column justify-content-space-between">
      <SetPageInfoContext.Provider
        value={{
          contactInfo,
          setContactInfo,
          educationInfo,
          setEducationInfo,
          workInfo,
          setWorkInfo,
          projectInfo,
          setProjectInfo,
          skills,
          setSkills,
          activeKey,
          setActiveKey,
        }}
      >
        <Navi />
        <Container>
          <Routes>
            <Route path="/cv-project/" element={<Home />}></Route>
            <Route
              path="/cv-project/contact-info"
              element={<Contact />}
            ></Route>
            <Route
              path="/cv-project/education-history"
              element={<Education />}
            ></Route>
            <Route path="/cv-project/work-history" element={<Work />}></Route>
            <Route path="/cv-project/projects" element={<Projects />}></Route>
            <Route path="/cv-project/skills" element={<Skills />}></Route>
            <Route path="/cv-project/review" element={<Review />}></Route>
          </Routes>
        </Container>
        <div className="mb-0 mt-auto">
          <GuideBtns />
          <footer className="mb-0 mt-auto pb-2">
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              © 2022 - Nigel Rodriguez
            </span>
          </footer>
        </div>
      </SetPageInfoContext.Provider>
    </div>
  );
};

export default App;
