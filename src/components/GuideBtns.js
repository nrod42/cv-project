import React, { useContext } from "react";
import { SetPageInfoContext } from "../App";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

const GuideBtns = () => {
  const { activeKey, setActiveKey } = useContext(SetPageInfoContext);

  const location = useLocation();
  const navigate = useNavigate();

  const nextBtn = () => {
    if (location.pathname === "/cv-project") {
      navigate("/cv-project/contact-info");
      setActiveKey("contact");
    } else if (location.pathname === "/cv-project/contact-info") {
      navigate("/cv-project/education-history");
      setActiveKey("education");
    } else if (location.pathname === "/cv-project/education-history") {
      navigate("/cv-project/work-history");
      setActiveKey("work");
    } else if (location.pathname === "/cv-project/work-history") {
      navigate("/cv-project/projects");
      setActiveKey("projects");
    } else if (location.pathname === "/cv-project/projects") {
      navigate("/cv-project/skills");
      setActiveKey("skills");
    } else if (location.pathname === "/cv-project/skills") {
      navigate("/cv-project/review");
      setActiveKey("review");
    }
  };

  const prevBtn = () => {
    if (location.pathname === "/cv-project/contact-info") {
      navigate("/cv-project");
      setActiveKey("home");
    } else if (location.pathname === "/cv-project/education-history") {
      navigate("/cv-project/contact-info");
      setActiveKey("contact");
    } else if (location.pathname === "/cv-project/work-history") {
      navigate("/cv-project/education-history");
      setActiveKey("education");
    } else if (location.pathname === "/cv-project/projects") {
      navigate("/cv-project/work-history");
      setActiveKey("work");
    } else if (location.pathname === "/cv-project/skills") {
      navigate("/cv-project/projects");
      setActiveKey("projects");
    } else if (location.pathname === "/cv-project/review") {
      navigate("/cv-project/skills");
      setActiveKey("skills");
    }
  };

  return (
    <div className="guideBtns">
      <Button
        variant="primary"
        style={{
          visibility:
            location.pathname === "/cv-project" ? "hidden" : "visible",
        }}
        onClick={prevBtn}
      >
        ← Previous
      </Button>
      <Button
        variant="primary"
        style={{
          visibility:
            location.pathname === "/cv-project/review" ? "hidden" : "visible",
        }}
        onClick={nextBtn}
      >
        Next →
      </Button>
    </div>
  );
};

export default GuideBtns;
