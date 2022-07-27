import React from "react";

class WorkForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleFromYearChange = this.handleFromYearChange.bind(this);
    this.handleToYearChange = this.handleToYearChange.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
  }

  handleCompanyChange = (e) => {
    this.props.setCompany(e.target.value);
  };

  handleCityChange = (e) => {
    this.props.setCity(e.target.value);
  };

  handleFromYearChange = (e) => {
    this.props.setFromYear(e.target.value);
  };

  handleToYearChange = (e) => {
    this.props.setToYear(e.target.value);
  };

  handleRoleChange = (e) => {
    this.props.setRole(e.target.value);
  };

  handleDescriptionChange = (e) => {
    this.props.setDescription(e.target.value);
  };

  async onSubmitForm(e) {
    e.preventDefault();
    if (this.props.isEditActive === true) {
      await this.props.deleteCard(this.props.id); //Without await,
      this.props.setEditActive(false);
    }
    await this.props.addWorkObj();
    this.props.createCards();
    this.props.toggleWorkForm();
    this.props.clearForm();
  }

  cancelForm = (e) => {
    this.props.toggleWorkForm();
    this.props.clearForm();
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <label htmlFor="company">Company:</label>
        <input
          onChange={this.handleCompanyChange}
          type="text"
          id="company"
          value={this.props.company}
        ></input>

        <label htmlFor="city">City:</label>
        <input
          onChange={this.handleCityChange}
          type="text"
          id="city"
          value={this.props.city}
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

        <label htmlFor="role">Role:</label>
        <input
          onChange={this.handleRoleChange}
          type="text"
          id="role"
          value={this.props.role}
        ></input>

        <label htmlFor="description">
          Short description of responsibilities:
        </label>
        <textarea
          onChange={this.handleDescriptionChange}
          id="description"
          value={this.props.description}
        ></textarea>

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
export default WorkForm;
