import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

const GuideBtns = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const nextBtn = () => {
    if (location.pathname === "/") {
      navigate("/cv-project/contact-info");
    } else if (location.pathname === "/contact-info") {
      navigate("/cv-project/education-history");
    } else if (location.pathname === "/education-history") {
      navigate("/cv-project/work-history");
    } else if (location.pathname === "/work-history") {
      navigate("/cv-project/review");
    }
  };

  const prevBtn = () => {
    if (location.pathname === "/contact-info") {
      navigate("/cv-project");
    } else if (location.pathname === "/education-history") {
      navigate("/cv-project/contact-info");
    } else if (location.pathname === "/work-history") {
      navigate("/education-history");
    } else if (location.pathname === "/review") {
      navigate("/cv-project/work-history");
    }
  };

  return (
    <div className="guideBtns">
      <Button
        variant="secondary"
        style={{ visibility: location.pathname === "/" ? "hidden" : "visible" }}
        onClick={prevBtn}
      >
        Previous
      </Button>
      <Button
        variant="secondary"
        style={{
          visibility: location.pathname === "/review" ? "hidden" : "visible",
        }}
        onClick={nextBtn}
      >
        Next
      </Button>
    </div>
  );
};

export default GuideBtns;
