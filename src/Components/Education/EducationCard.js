import React from "react";

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
    this.props.toggleForm();
    this.props.findObj(this.props.cardInfo.id); //returns edited obj;
  }

  fillForm(obj) {}
  //when edit is clicked, it needs to tell parent the id of the clicked card

  render() {
    const { school, fromYear, toYear, degree } = this.props.cardInfo;

    return (
      <div className="eduCard">
        <div>
          <p>University / School: {school}</p>
          <p>From: {fromYear}</p>
          <p>To: {toYear}</p>
          <p>Qualification / Degree: {degree}</p>
        </div>
        <div>
          <button onClick={this.handleEdit} type="button">
            Edit
          </button>
          <button onClick={this.handleDelete} type="button">
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default EducationCard;
