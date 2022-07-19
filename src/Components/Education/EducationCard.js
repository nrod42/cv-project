import React from "react";

class EducationCard extends React.Component {
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
      </div>
    );
  }
}

export default EducationCard;
