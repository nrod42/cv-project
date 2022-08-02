import React from "react";

const EducationCard = (props) => {
  const { cardInfo, deleteCard, toggleEduForm, edit } = props;
  const { school, fromYear, toYear, degree, id } = cardInfo;

  const handleDelete = () => {
    deleteCard(id);
  };

  const handleEdit = () => {
    toggleEduForm();
    edit(id); //returns edited obj and then fills inputs fields with its info;
  };

  return (
    <div className="eduCard">
      <div className="eduCardInfo">
        <div>
          <p className="cardTitle">University / School:</p>
          <p>{school}</p>
        </div>
        <div>
          <p className="cardTitle">Degree:</p>
          <p>{degree}</p>
        </div>
        <div>
          <div className="cardSubSection">
            <p className="cardTitle">From:</p>
            <p>{fromYear}</p>
          </div>
          <div className="cardSubSection">
            <p className="cardTitle">To:</p>
            <p>{toYear}</p>
          </div>
        </div>
      </div>
      <div className="cardBtns">
        <button type="button" onClick={handleEdit}>
          <img
            src={window.location.origin + "/img/edit_icon.svg"}
            alt="edit button icon"
          ></img>
        </button>
        <button type="button" onClick={handleDelete}>
          <img
            src={window.location.origin + "/img/delete_icon.svg"}
            alt="delete button icon"
          ></img>
        </button>
      </div>
    </div>
  );
};

export default EducationCard;
