import React from "react";

class WorkForm extends React.Component {
  render() {
    return (
      <form id="workForm">
        <label htmlFor="company">Company:</label>
        <input type="text" id="company"></input>

        <label htmlFor="city">City:</label>
        <input type="text" id="city"></input>

        <label htmlFor="fromYear">From Year:</label>
        <input type="text" id="fromYear"></input>

        <label htmlFor="toYear">To Year:</label>
        <input type="text" id="toYear"></input>

        <label htmlFor="role">Role:</label>
        <input type="text" id="role"></input>

        <label htmlFor="description">
          Short description of responsibilities:
        </label>
        <textarea id="description"></textarea>

        <button type="button">Previous</button>
        <button type="button">Next</button>
      </form>
    );
  }
}

export default WorkForm;
