import React from "react";

class EducationForm extends React.Component {
  constructor(props) {
    super(props);

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
    this.cancelForm = this.cancelForm.bind(this);
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

  onSubmitTask = (e) => {
    e.preventDefault();
    this.props.updateCardInfo(e);
    this.props.addCard(this.state.cardInfo);
    this.setState({
      cardInfo: {
        school: "",
        fromYear: "",
        toYear: "",
        degree: "",
      },
    });
    this.props.toggleForm();
  };

  cancelForm = (e) => {
    this.props.toggleForm();
  };

  render() {
    return (
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
