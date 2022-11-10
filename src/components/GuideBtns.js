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
      navigate("/contact-info");
    } else if (location.pathname === "/contact-info") {
      navigate("/education-history");
    } else if (location.pathname === "/education-history") {
      navigate("/work-history");
    } else if (location.pathname === "/work-history") {
      navigate("/review");
    }
  };

  const prevBtn = () => {
    if (location.pathname === "/contact-info") {
      navigate("/");
    } else if (location.pathname === "/education-history") {
      navigate("/contact-info");
    } else if (location.pathname === "/work-history") {
      navigate("/education-history");
    } else if (location.pathname === "/review") {
      navigate("/work-history");
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
