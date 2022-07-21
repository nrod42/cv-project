import React from "react";

class EducationForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleFromYearChange = this.handleFromYearChange.bind(this);
    this.handleToYearChange = this.handleToYearChange.bind(this);
    this.handleDegreeChange = this.handleDegreeChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
  }
  handleSchoolChange = (e) => {
    this.props.setSchool(e.target.value)
    // maybe we make another state. one state is for inputs being edit-active or not and another for the form itself
    // this.props.setEditing(false)
  };

  handleFromYearChange = (e) => {
    this.props.setFromYear(e.target.value)
    // this.props.setEditing(false)
  };

  handleToYearChange = (e) => {
    this.props.setToYear(e.target.value)
    // this.props.setEditing(false)
  };

  handleDegreeChange = (e) => {
    this.props.setDegree(e.target.value)
    // this.props.setEditing(false)
  };

  async onSubmitForm(e) {
    e.preventDefault();
    await this.props.addEduObj()
    
    if (this.props.editing === true) {
      //we delete the old card. since we're going to reorder cards array based on data anyway there is no need to keep in same order
      this.props.deleteCard(this.props.editedObj.id)
    }
    this.props.createCards();
    this.props.clearForm();
    this.props.toggleForm();
    this.props.setEditing(false)
  }

  cancelForm = (e) => {
    this.props.toggleForm();
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <label htmlFor="school">University / School:</label>
        <input
          onChange={this.handleSchoolChange}
          type="text"
          id="school"
          value={this.props.editing === true ? this.props.editedObj.school : this.props.school}
        ></input>
        <label htmlFor="fromYear">From Year:</label>
        <input
          onChange={this.handleFromYearChange}
          type="text"
          id="fromYear"
          value={this.props.editing === true ? this.props.editedObj.fromYear : this.props.fromYear}
        ></input>
        <label htmlFor="toYear">To Year:</label>
        <input
          onChange={this.handleToYearChange}
          type="text"
          id="toYear"
          value={this.props.editing === true ? this.props.editedObj.toYear : this.props.toYear}
        ></input>
        <label htmlFor="degree">Qualification / Degree:</label>
        <input
          onChange={this.handleDegreeChange}
          type="text"
          id="degree"
          value={this.props.editing === true ? this.props.editedObj.degree : this.props.degree}
        ></input>
        <div className="cardBtns">
          <button type="submit">Add</button>
          <button onClick={this.cancelForm} type="button">
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default EducationForm;
