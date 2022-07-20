import React from "react";

class EducationCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete () {
    this.props.deleteCard(this.props.cardId)
  }

  editCard () {

  }

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
          <button onClick={this.props.toggleEducationForm} type="button">Edit</button>
          <button onClick={this.handleDelete} type="button">Delete</button>
        </div>
      </div>
    );
  }
}

export default EducationCard;
