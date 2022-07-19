import React from "react";

class WorkForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: true,
      cardInfo: {
        company: "",
        city: "",
        fromYear: "",
        toYear: "",
        role: "",
        description: "",
      },
    };
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleFromYearChange = this.handleFromYearChange.bind(this);
    this.handleToYearChange = this.handleToYearChange.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.onSubmitTask = this.onSubmitTask.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
  }

  handleCompanyChange = (e) => {
    this.setState({
      cardInfo: {
        company: e.target.value,
        city: this.state.cardInfo.city,
        fromYear: this.state.cardInfo.fromYear,
        toYear: this.state.cardInfo.toYear,
        role: this.state.cardInfo.role,
        description: this.state.cardInfo.description,
      },
    });
  };

  handleCityChange = (e) => {
    this.setState({
      cardInfo: {
        company: this.state.cardInfo.company,
        city: e.target.value,
        fromYear: this.state.cardInfo.fromYear,
        toYear: this.state.cardInfo.toYear,
        role: this.state.cardInfo.role,
        description: this.state.cardInfo.description,
      },
    });
  };

  handleFromYearChange = (e) => {
    this.setState({
      cardInfo: {
        company: this.state.cardInfo.company,
        city: this.state.cardInfo.city,
        fromYear: e.target.value,
        toYear: this.state.cardInfo.toYear,
        role: this.state.cardInfo.role,
        description: this.state.cardInfo.description,
      },
    });
  };

  handleToYearChange = (e) => {
    this.setState({
      cardInfo: {
        company: this.state.cardInfo.company,
        city: this.state.cardInfo.city,
        fromYear: this.state.cardInfo.fromYear,
        toYear: e.target.value,
        role: this.state.cardInfo.role,
        description: this.state.cardInfo.description,
      },
    });
  };

  handleRoleChange = (e) => {
    this.setState({
      cardInfo: {
        company: this.state.cardInfo.company,
        city: this.state.cardInfo.city,
        fromYear: this.state.cardInfo.fromYear,
        toYear: this.state.cardInfo.toYear,
        role: e.target.value,
        description: this.state.cardInfo.description,
      },
    });
  };

  handleDescriptionChange = (e) => {
    this.setState({
      cardInfo: {
        company: this.state.cardInfo.company,
        city: this.state.cardInfo.city,
        fromYear: this.state.cardInfo.fromYear,
        toYear: this.state.cardInfo.toYear,
        role: this.state.cardInfo.role,
        description: e.target.value,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.props.updateCardInfo(e);
    this.props.addCard(this.state.cardInfo);
    this.setState({
      cardInfo: {
        company: "",
        city: "",
        fromYear: "",
        toYear: "",
        role: "",
        description: "",
      },
    });
    this.props.toggleForm();
  };

  cancelForm = (e) => {
    this.props.toggleForm();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="company">Company:</label>
          <input
            onChange={this.handleCompanyChange}
            type="text"
            id="company"
            value={this.state.cardInfo.company}
          ></input>

          <label htmlFor="city">City:</label>
          <input
            onChange={this.handleCityChange}
            type="text"
            id="city"
            value={this.state.cardInfo.city}
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

          <label htmlFor="role">Role:</label>
          <input
            onChange={this.handleRoleChange}
            type="text"
            id="role"
            value={this.state.cardInfo.role}
          ></input>

          <label htmlFor="description">
            Short description of responsibilities:
          </label>
          <textarea
            onChange={this.handleDescriptionChange}
            id="description"
            value={this.state.cardInfo.description}
          ></textarea>

          <div className="cardBtns">
            <button type="submit">Add</button>
            <button onClick={this.cancelForm} type="button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default WorkForm;
