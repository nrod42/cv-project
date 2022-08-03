import React, { useState, useEffect } from "react";
import EducationForm from "./EducationForm";
import EducationCard from "./EducationCard";
import uniqid from "uniqid";

const Education = (props) => {
  const {
    toggleEduForm,
    eduCards,
    setEduCards,
    isEduFormActive,
    isReviewActive,
  } = props;
  const [isEditActive, setEditActive] = useState(false);
  const [eduArray, setEduArray] = useState([]);
  const [eduInfo, setEduInfo] = useState({
    school: "",
    fromYear: "",
    toYear: "",
    degree: "",
    id: uniqid(),
  });

  // Each card is stored in App.js' edcationCards state
  const createCards = () => {
    let eduCardArray = eduArray.map((eduObj) => (
      <EducationCard
        key={uniqid()}
        cardInfo={eduObj}
        toggleEduForm={toggleEduForm}
        deleteCard={deleteCard}
        eduArray={eduArray}
        edit={edit}
        isReviewActive={isReviewActive}
      />
    ));
    setEduCards(eduCardArray);
  };

  const clearForm = () => {
    setEduInfo({
      school: "",
      fromYear: "",
      toYear: "",
      degree: "",
      id: uniqid(),
    });
  };

  useEffect(() => {
    createCards();
  }, [eduArray]);

  const edit = (id) => {
    setEditActive(true);
    let editedObj = eduArray.find((eduObj) => eduObj.id === id); // finds the obj to be edited
    deleteCard(id);
    setEduInfo({
      school: editedObj.school,
      fromYear: editedObj.fromYear,
      toYear: editedObj.toYear,
      degree: editedObj.degree,
      id: editedObj.id,
    });
  };

  const deleteCard = (id) => {
    setEduArray(eduArray.filter((eduObj) => eduObj.id !== id));
  };

  return (
    <div className="educationSection">
      <h2>Education Info</h2>
      {eduCards}
      <div className="addMoreBtn">
        <button onClick={toggleEduForm}>Add More</button>
      </div>
      <div
        className={
          isEduFormActive ? "activeEducationForm" : "inactiveEducationForm"
        }
      >
        <EducationForm
          toggleEduForm={toggleEduForm}
          createCards={createCards}
          deleteCard={deleteCard}
          clearForm={clearForm}
          isEditActive={isEditActive}
          setEditActive={setEditActive}
          eduInfo={eduInfo}
          setEduInfo={setEduInfo}
          eduArray={eduArray}
          setEduArray={setEduArray}
          // editedObj={editedObj}
        />
      </div>
    </div>
  );
};

export default Education;
