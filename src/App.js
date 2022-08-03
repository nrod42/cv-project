import React, { useState } from "react";
import Navigation from "./Components/Navigation";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Work from "./Components/Work/Work";
import Review from "./Components/Review";
import Footer from "./Components/Footer";

const App = () => {
  const [isContactActive, setContactActive] = useState(true);
  const [isEducationActive, setEducationActive] = useState(false);
  const [isWorkActive, setWorkActive] = useState(false);
  const [isReviewActive, setReviewActive] = useState(false);
  const [isContactFormActive, setContactFormActive] = useState(true);
  const [isEduFormActive, setEduFormActive] = useState(true);
  const [isWorkFormActive, setWorkFormActive] = useState(true);
  const [contactCard, setContactCard] = useState("");
  const [eduCards, setEduCards] = useState([]);
  const [workCards, setWorkCards] = useState([]);

  const nextPage = () => {
    if (isContactActive) {
      setContactActive((prevState) => !prevState);
      setEducationActive((prevState) => !prevState);
    } else if (isEducationActive) {
      setEducationActive((prevState) => !prevState);
      setWorkActive((prevState) => !prevState);
    } else if (isWorkActive) {
      setWorkActive((prevState) => !prevState);
      setReviewActive((prevState) => !prevState);
    }
  };

  const prevPage = () => {
    if (isReviewActive) {
      setReviewActive((prevState) => !prevState);
      setWorkActive((prevState) => !prevState);
    } else if (isWorkActive) {
      setWorkActive((prevState) => !prevState);
      setEducationActive((prevState) => !prevState);
    } else if (isEducationActive) {
      setEducationActive((prevState) => !prevState);
      setContactActive((prevState) => !prevState);
    }
  };

  const toggleContactForm = () => {
    setContactFormActive((prevState) => !prevState);
  };

  const toggleEduForm = () => {
    setEduFormActive((prevState) => !prevState);
  };

  const toggleWorkForm = () => {
    setWorkFormActive((prevState) => !prevState);
  };

  const checkReview = () => {
    console.log(isReviewActive);
  };

  // useEffect(() => {
  //   setReviewActive(isReviewActive);
  // }, [isReviewActive]);

  return (
    <div className="App">
      <Navigation />
      <div className="mainWrapper">
        <div className={isContactActive ? "activeSection" : "inactiveSection"}>
          <Contact
            contactCard={contactCard}
            setContactCard={setContactCard}
            toggleContactForm={toggleContactForm}
            isContactFormActive={isContactFormActive}
          />
        </div>
        <div
          className={isEducationActive ? "activeSection" : "inactiveSection"}
        >
          <Education
            eduCards={eduCards}
            setEduCards={setEduCards}
            toggleEduForm={toggleEduForm}
            isEduFormActive={isEduFormActive}
            isReviewActive={isReviewActive}
          />
        </div>
        <div className={isWorkActive ? "activeSection" : "inactiveSection"}>
          <Work
            workCards={workCards}
            setWorkCards={setWorkCards}
            toggleWorkForm={toggleWorkForm}
            isWorkFormActive={isWorkFormActive}
            isReviewActive={isReviewActive}
          />
        </div>
        <div className={isReviewActive ? "activeSection" : "inactiveSection"}>
          <Review
            contactCard={contactCard}
            educationCards={eduCards}
            workCards={workCards}
          />
        </div>
      </div>
      <div className="formNavBtns">
        <button
          className={isContactActive ? "hiddenBtn" : ""}
          onClick={prevPage}
        >
          Previous
        </button>
        <button
          className={isReviewActive ? "hiddenBtn" : ""}
          onClick={nextPage}
        >
          Next
        </button>
        <button onClick={checkReview}>Test</button>
      </div>
      <Footer />
    </div>
  );
};

export default App;
