import React from "react";

class EducationForm extends React.Component {
  constructor() {
    super();

    this.state = {
      isActive: true,
      cardInfo: {
        school: "",
        fromYear: "",
        toYear: "",
        degree: "",
      },
    };

    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleFromYearChange = this.handleFromYearChange.bind(this);
    this.handleToYearChange = this.handleToYearChange.bind(this);
    this.handleDegreeChange = this.handleDegreeChange.bind(this);
    this.onSubmitTask = this.onSubmitTask.bind(this);
    this.toggleEducationForm = this.toggleEducationForm.bind(this);
  }

  handleSchoolChange = (e) => {
    this.setState({
      cardInfo: {
        school: e.target.value,
        fromYear: this.state.cardInfo.fromYear,
        toYear: this.state.cardInfo.toYear,
        degree: this.state.cardInfo.degree,
      },
    });
  };

  handleFromYearChange = (e) => {
    this.setState({
      cardInfo: {
        school: this.state.cardInfo.school,
        fromYear: e.target.value,
        toYear: this.state.cardInfo.toYear,
        degree: this.state.cardInfo.degree,
      },
    });
  };

  handleToYearChange = (e) => {
    this.setState({
      cardInfo: {
        school: this.state.cardInfo.school,
        fromYear: this.state.cardInfo.fromYear,
        toYear: e.target.value,
        degree: this.state.cardInfo.degree,
      },
    });
  };

  handleDegreeChange = (e) => {
    this.setState({
      cardInfo: {
        school: this.state.cardInfo.school,
        fromYear: this.state.cardInfo.fromYear,
        toYear: this.state.cardInfo.toYear,
        degree: e.target.value,
      },
    });
  };

  toggleEducationForm = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    console.log(this.state.cardInfo);
    this.setState({
      cardInfo: {
        school: "",
        fromYear: "",
        toYear: "",
        degree: "",
      },
    });
    this.toggleEducationForm();
  };

  render() {
    return (
      <div
        className={
          this.state.isActive ? "ActiveEducationForm" : "InactiveEducationForm"
        }
      >
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="school">University / School:</label>
          <input
            onChange={this.handleSchoolChange}
            type="text"
            id="school"
            value={this.state.cardInfo.school}
          ></input>
          <label htmlFor="fromYear">From Year:</label>
          <input
            onChange={this.handleFromYearChange}
            type="text"
            id="fromYear"
            value={this.state.cardInfo.fromYear}
          ></input>
          <label htmlFor="toYear">To Year:</label>
          <input
            onChange={this.handleToYearChange}
            type="text"
            id="toYear"
            value={this.state.cardInfo.toYear}
          ></input>
          <label htmlFor="degree">Qualification / Degree:</label>
          <input
            onChange={this.handleDegreeChange}
            type="text"
            id="degree"
            value={this.state.cardInfo.degree}
          ></input>
          <button type="submit">Add</button>
          <button type="button">Cancel</button>
        </form>
      </div>
    );
  }
}

export default EducationForm;
