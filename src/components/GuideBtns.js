import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

const GuideBtns = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const nextBtn = () => {
    if (location.pathname === "/cv-project") {
      navigate("/cv-project/contact-info");
    } else if (location.pathname === "/cv-project/contact-info") {
      navigate("/cv-project/education-history");
    } else if (location.pathname === "/cv-project/education-history") {
      navigate("/cv-project/work-history");
    } else if (location.pathname === "/cv-project/work-history") {
      navigate("/cv-project/projects");
    } else if (location.pathname === "/cv-project/projects") {
      navigate("/cv-project/skills");
    } else if (location.pathname === "/cv-project/skills") {
      navigate("/cv-project/review");
    }
  };

  const prevBtn = () => {
    if (location.pathname === "/cv-project/contact-info") {
      navigate("/cv-project");
    } else if (location.pathname === "/cv-project/education-history") {
      navigate("/cv-project/contact-info");
    } else if (location.pathname === "/cv-project/work-history") {
      navigate("/cv-project/education-history");
    } else if (location.pathname === "/cv-project/projects") {
      navigate("/cv-project/work-history");
    } else if (location.pathname === "/cv-project/skills") {
      navigate("/cv-project/projects");
    } else if (location.pathname === "/cv-project/review") {
      navigate("/cv-project/skills");
    }
  };

  return (
    <div className="guideBtns">
      <Button
        variant="warning"
        style={{ visibility: location.pathname === "/cv-project" ? "hidden" : "visible" }}
        onClick={prevBtn}
      >
        ← Previous
      </Button>
      <Button
        variant="warning"
        style={{
          visibility: location.pathname === "/cv-project/review" ? "hidden" : "visible",
        }}
        onClick={nextBtn}
      >
        Next →
      </Button>
    </div>
  );
};

export default GuideBtns;
