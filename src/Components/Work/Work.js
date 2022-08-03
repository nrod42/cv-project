import React, { useState, useEffect } from "react";
import WorkForm from "./WorkForm";
import WorkCard from "./WorkCard";
import uniqid from "uniqid";

const Work = (props) => {
  const {
    toggleWorkForm,
    workCards,
    setWorkCards,
    isWorkFormActive,
    isReviewActive,
  } = props;
  const [isEditActive, setEditActive] = useState(false);
  const [workArray, setWorkArray] = useState([]);
  const [workInfo, setWorkInfo] = useState({
    company: "",
    city: "",
    addrState: "",
    fromYear: "",
    toYear: "",
    role: "",
    description: "",
    id: uniqid(),
  });

  const createCards = () => {
    let workCardArray = workArray.map((workObj) => (
      <WorkCard
        key={uniqid()}
        cardInfo={workObj}
        toggleWorkForm={toggleWorkForm}
        deleteCard={deleteCard}
        workArray={workArray}
        edit={edit}
        isReviewActive={isReviewActive}
      />
    ));
    setWorkCards(workCardArray);
  };

  const clearForm = () => {
    setWorkInfo({
      company: "",
      city: "",
      addrState: "",
      fromYear: "",
      toYear: "",
      role: "",
      description: "",
      id: uniqid(),
    });
  };

  useEffect(() => {
    createCards();
  }, [workArray]);

  const edit = (id) => {
    setEditActive(true);
    let editedObj = workArray.find((workObj) => workObj.id === id);
    deleteCard(id);
    setWorkInfo({
      company: editedObj.company,
      city: editedObj.city,
      addrState: editedObj.addrState,
      fromYear: editedObj.fromYear,
      toYear: editedObj.toYear,
      role: editedObj.role,
      description: editedObj.description,
      id: editedObj.id,
    });
  };

  const deleteCard = (id) => {
    setWorkArray(workArray.filter((workObj) => workObj.id !== id));
  };

  return (
    <div className="workSection">
      <h2>Work Info</h2>
      {workCards}
      <div className="addMoreBtn">
        <button onClick={toggleWorkForm}>Add More</button>
      </div>
      <div className={isWorkFormActive ? "activeWorkForm" : "inactiveWorkForm"}>
        <WorkForm
          toggleWorkForm={toggleWorkForm}
          createCards={createCards}
          deleteCard={deleteCard}
          clearForm={clearForm}
          isEditActive={isEditActive}
          setEditActive={setEditActive}
          workInfo={workInfo}
          setWorkInfo={setWorkInfo}
          workArray={workArray}
          setWorkArray={setWorkArray}
        />
      </div>
    </div>
  );
};

export default Work;
