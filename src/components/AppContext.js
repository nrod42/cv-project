import React, { useState, createContext } from "react";

const SetPageInfoContext = createContext();

const AppContextProvider = ({ children }) => {
  const [contactInfo, setContactInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([]);
  const [workInfo, setWorkInfo] = useState([]);
  const [projectInfo, setProjectInfo] = useState([]);
  const [skills, setSkills] = useState({});
  const [isEditing, setEditing] = useState(false);
  const [edited, setEdited] = useState(1);
  const [activeKey, setActiveKey] = useState("home");

  return (
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
        isEditing,
        setEditing,
        edited,
        setEdited,
        activeKey,
        setActiveKey,
      }}
    >
      {children}
    </SetPageInfoContext.Provider>
  );
};

export { SetPageInfoContext, AppContextProvider };
