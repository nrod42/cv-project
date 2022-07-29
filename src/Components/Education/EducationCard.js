import React from "react";
// import deleteIcon from "."

class EducationCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete() {
    this.props.deleteCard(this.props.cardInfo.id);
  }

  handleEdit() {
    this.props.toggleEduForm();
    this.props.edit(this.props.cardInfo.id); //returns edited obj and then fills inputs fields with its info;
  }

  render() {
    const { school, fromYear, toYear, degree } = this.props.cardInfo;

    return (
      <div className="eduCard">
        <div className="eduCardInfo">
          <div>
            <p className="cardTitle">University / School:</p>
            <p> {school}</p>
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

export default EducationCard;
