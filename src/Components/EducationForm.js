import React from "react";

class EducationForm extends React.Component {
  render() {
    return (
      <form id="educationForm">
        <label htmlFor="school">University / School:</label>
        <input type="text" id="school"></input>

        <label htmlFor="fromYear">From Year:</label>
        <input type="text" id="fromYear"></input>

        <label htmlFor="toYear">To Year:</label>
        <input type="text" id="toYear"></input>

        <label htmlFor="degree">Qualification / Degree:</label>
        <input type="text" id="degree"></input>

        <button type="button">Previous</button>
        <button type="button">Next</button>
      </form>
    );
  }
}

export default EducationForm;
