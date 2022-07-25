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
    this.props.edit(this.props.cardInfo.id); //returns edited obj and then fills inputs fields with its info;
  }

  render() {
    const { school, fromYear, toYear, degree } = this.props.cardInfo;

    return (
      <div className="eduCard">
        <div>
          <p>University / School: {school}</p>
          <p>From: {fromYear}</p>
          <p>To: {toYear}</p>
          <p>Degree: {degree}</p>
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
