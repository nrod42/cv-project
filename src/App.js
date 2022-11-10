import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Education from "./components/pages/Education";
import Work from "./components/pages/Work";
import Review from "./components/pages/Review";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import GuideBtns from "./components/GuideBtns";
import Navi from "./components/Navi";

export const SetListsContext = React.createContext();

const App = () => {
  const [contactInfo, setContactInfo] = useState([]);
  const [educationInfo, setEducationInfo] = useState([]);
  const [workInfo, setWorkInfo] = useState([]);
  // const [editing, setEditing] = useState([]);

  return (
    <div className="App">
      <Navi />
      <SetListsContext.Provider
        value={{
          contactInfo,
          setContactInfo,
          educationInfo,
          setEducationInfo,
          workInfo,
          setWorkInfo,
          // editing,
          // setEditing,
        }}
      >
        <Routes>
          <Route path="/cv-project/" element={<Home />}></Route>
          <Route path="/cv-project/contact-info" element={<Contact />}></Route>
          <Route path="/cv-project/education-history" element={<Education />}></Route>
          <Route path="/cv-project/work-history" element={<Work />}></Route>
          <Route path="/cv-project/review" element={<Review />}></Route>
        </Routes>
      </SetListsContext.Provider>
      <GuideBtns />
      <footer>By: Nigel Rodriguez</footer>
    </div>
  );
};

export default App;
