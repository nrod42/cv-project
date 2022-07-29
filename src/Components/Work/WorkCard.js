import React from "react";

class WorkCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete() {
    this.props.deleteCard(this.props.cardInfo.id);
  }

  handleEdit() {
    this.props.toggleWorkForm();
    this.props.edit(this.props.cardInfo.id); //returns edited obj and then fills inputs fields with its info;
  }

  render() {
    const { company, city, addrState, fromYear, toYear, role, description } =
      this.props.cardInfo;

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
          <button type="button">
            <img
              src={window.location.origin + "/img/edit_icon.svg"}
              alt="edit button icon"
              onClick={this.handleEdit}
            ></img>
          </button>
          <button type="button">
            <img
              src={window.location.origin + "/img/delete_icon.svg"}
              alt="delete button icon"
              onClick={this.handleDelete}
            ></img>
          </button>
        </div>
      </div>
    );
  }
}

export default WorkCard;
