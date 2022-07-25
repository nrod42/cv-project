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
    this.props.setSchool(e.target.value);
  };

  handleFromYearChange = (e) => {
    this.props.setFromYear(e.target.value);
  };

  handleToYearChange = (e) => {
    this.props.setToYear(e.target.value);
  };

  handleDegreeChange = (e) => {
    this.props.setDegree(e.target.value);
  };

  async onSubmitForm(e) {
    e.preventDefault();

    await this.props.addEduObj();
    this.props.createCards();
    this.props.toggleForm();
    this.props.clearForm();
    // if (this.props.isEditActive === true) {
    //   this.props.deleteCard(this.props.id)
    //   this.props.setEditActive(false)
    // }
  }

  cancelForm = (e) => {
    this.props.toggleForm();
    this.props.clearForm();
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <label htmlFor="school">University / School:</label>
        <input
          onChange={this.handleSchoolChange}
          type="text"
          id="school"
          value={this.props.school}
        ></input>
        <label htmlFor="fromYear">From Year:</label>
        <input
          onChange={this.handleFromYearChange}
          type="date"
          id="fromYear"
          value={this.props.fromYear}
        ></input>
        <label htmlFor="toYear">To Year:</label>
        <input
          onChange={this.handleToYearChange}
          type="date"
          id="toYear"
          value={this.props.toYear}
        ></input>
        <label htmlFor="degree">Degree:</label>
        <input
          onChange={this.handleDegreeChange}
          type="text"
          id="degree"
          value={this.props.degree}
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
