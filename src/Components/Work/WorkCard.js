import React from "react";

class WorkCard extends React.Component {
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
          <button type="button">Edit</button>
          <button type="button">Delete</button>
        </div>
      </div>
    );
  }
}

export default WorkCard;
