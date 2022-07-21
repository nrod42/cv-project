import React from "react";
import uniqid from "uniqid";

class EducationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: true,
      school: "",
      fromYear: "",
      toYear: "",
      degree: "",
      id: uniqid(),
    };

    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleFromYearChange = this.handleFromYearChange.bind(this);
    this.handleToYearChange = this.handleToYearChange.bind(this);
    this.handleDegreeChange = this.handleDegreeChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
  }

  handleSchoolChange = (e) => {
    this.setState({
      school: e.target.value,
    });
  };

  handleFromYearChange = (e) => {
    this.setState({
      fromYear: e.target.value,
    });
  };

  handleToYearChange = (e) => {
    this.setState({
      toYear: e.target.value,
    });
  };

  handleDegreeChange = (e) => {
    this.setState({
      degree: e.target.value,
    });
  };

  async onSubmitForm(e) {
    e.preventDefault();
    let eduObj = {
      school: this.state.school,
      fromYear: this.state.fromYear,
      toYear: this.state.toYear,
      degree: this.state.degree,
      id: this.state.id,
    };
    await this.props.addEduObj(eduObj);
    this.props.createCards();
    this.setState({
      school: "",
      fromYear: "",
      toYear: "",
      degree: "",
      id: uniqid(),
    });
    this.props.toggleForm();
  }

  cancelForm = (e) => {
    this.props.toggleForm();
  };

  editedForm(obj) {
    if (this.props.editedObj !== "")
      this.setState({
        school: obj.school,
        fromYear: obj.fromYear,
        toYear: obj.toYear,
        degree: obj.degree,
        id: obj.id,
      });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <label htmlFor="school">University / School:</label>
        <input
          onChange={this.handleSchoolChange}
          type="text"
          id="school"
          value={this.state.school}
        ></input>
        <label htmlFor="fromYear">From Year:</label>
        <input
          onChange={this.handleFromYearChange}
          type="text"
          id="fromYear"
          value={this.state.fromYear}
        ></input>
        <label htmlFor="toYear">To Year:</label>
        <input
          onChange={this.handleToYearChange}
          type="text"
          id="toYear"
          value={this.state.toYear}
        ></input>
        <label htmlFor="degree">Qualification / Degree:</label>
        <input
          onChange={this.handleDegreeChange}
          type="text"
          id="degree"
          value={this.state.degree}
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
