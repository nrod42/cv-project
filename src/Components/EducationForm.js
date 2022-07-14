import React from "react";

class EducationForm extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <form>
          <label htmlFor="school">University / School:</label>
          <input type="text" id="school"></input>
          <label htmlFor="fromYear">From Year:</label>
          <input type="text" id="fromYear"></input>
          <label htmlFor="toYear">To Year:</label>
          <input type="text" id="toYear"></input>
          <label htmlFor="degree">Qualification / Degree:</label>
          <input type="text" id="degree"></input>
        </form>
      </div>
    );
  }
}

export default EducationForm;
