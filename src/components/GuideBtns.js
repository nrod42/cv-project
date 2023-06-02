import React, { useContext } from "react";
import { SetPageInfoContext } from "../components/AppContext";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const GuideBtns = () => {
  const { setActiveKey } = useContext(SetPageInfoContext);

  const location = useLocation();
  const navigate = useNavigate();

  const pages = [
    { path: "/cv-project/", key: "home" },
    { path: "/cv-project/contact-info", key: "contact" },
    { path: "/cv-project/education-history", key: "education" },
    { path: "/cv-project/work-history", key: "work" },
    { path: "/cv-project/projects", key: "projects" },
    { path: "/cv-project/skills", key: "skills" },
    { path: "/cv-project/review", key: "review" },
  ];

  const currentIndex = pages.findIndex(
    (page) => page.path === location.pathname
  );

  const navigateToNext = () => {
    const nextPage = pages[currentIndex + 1];
    if (nextPage) {
      navigate(nextPage.path);
      setActiveKey(nextPage.key);
    }
  };

  const navigateToPrevious = () => {
    const previousPage = pages[currentIndex - 1];
    if (previousPage) {
      navigate(previousPage.path);
      setActiveKey(previousPage.key);
    }
  };

  return (
    <div className="guideBtns">
      <Button
        variant="light"
        style={{
          visibility: currentIndex === 0 ? "hidden" : "visible",
        }}
        onClick={navigateToPrevious}
      >
        ← Previous
      </Button>
      <Button
        variant="secondary"
        style={{
          visibility: currentIndex === pages.length - 1 ? "hidden" : "visible",
        }}
        onClick={navigateToNext}
      >
        Next →
      </Button>
    </div>
  );
};

export default GuideBtns;
