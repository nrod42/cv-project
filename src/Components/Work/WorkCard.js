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
    this.props.toggleForm();
    this.props.edit(this.props.cardInfo.id); //returns edited obj and then fills inputs fields with its info;
  }

  render() {
    const { company, city, fromYear, toYear, role, description } =
      this.props.cardInfo;

    return (
      <div className="workCard">
        <div>
          <p>Company: {company}</p>
          <p>City: {city}</p>
          <p>From Year: {fromYear}</p>
          <p>To Year: {toYear}</p>
          <p>Role: {role}</p>
          <p>Description: {description}</p>
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

export default WorkCard;
