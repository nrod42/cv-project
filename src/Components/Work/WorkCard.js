import React from "react";

const WorkCard = (props) => {
  const { cardInfo, deleteCard, toggleWorkForm, edit } = props;
  const { company, city, addrState, fromYear, toYear, role, description, id } =
    cardInfo;

  const handleDelete = () => {
    deleteCard(id);
  };

  const handleEdit = () => {
    toggleWorkForm();
    edit(id); //returns edited obj and then fills inputs fields with its info;
  };

  return (
    <div className="workCard">
      <div className="workCardInfo">
        <div>
          <p className="cardTitle">Company:</p>
          <p>{company}</p>
        </div>
        <div>
          <p className="cardTitle">Role:</p>
          <p>{role}</p>
        </div>
        <div>
          <div className="cardSubSection">
            <p className="cardTitle">City:</p>
            <p>{city}</p>
          </div>
          <div className="cardSubSection">
            <p className="cardTitle">State:</p>
            <p>{addrState}</p>
          </div>
        </div>
        <div>
          <div className="cardSubSection">
            <p className="cardTitle">From Year:</p>
            <p>{fromYear}</p>
          </div>
          <div className="cardSubSection">
            <p className="cardTitle">To Year:</p>
            <p>{toYear}</p>
          </div>
        </div>
        <div>
          <p className="cardTitle">Description:</p>
          <p>{description}</p>
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

export default WorkCard;
