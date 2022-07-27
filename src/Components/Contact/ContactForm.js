import React from "react";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.handlefFirstName = this.handleFirstName.bind(this);
    this.handlefLastName = this.handleLastName.bind(this);
    this.handleAddr1 = this.handleAddr1.bind(this);
    this.handleAddr2 = this.handleAddr2.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleAddrState = this.handleAddrState.bind(this);
    this.handleZip = this.handleZip.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
  }

  handleFirstName = (e) => {
    this.props.setFirstName(e.target.value);
  };

  handleLastName = (e) => {
    this.props.setLastName(e.target.value);
  };

  handleAddr1 = (e) => {
    this.props.setAddr1(e.target.value);
  };

  handleAddr2 = (e) => {
    this.props.setAddr2(e.target.value);
  };

  handleCity = (e) => {
    this.props.setCity(e.target.value);
  };

  handleAddrState = (e) => {
    this.props.setAddrState(e.target.value);
  };

  handleZip = (e) => {
    this.props.setZip(e.target.value);
  };

  handleEmail = (e) => {
    this.props.setEmail(e.target.value);
  };

  handlePhone = (e) => {
    this.props.setPhone(e.target.value);
  };

  onSubmitForm(e) {
    e.preventDefault();
    this.props.createCard();
    this.props.toggleContactForm();
  }

  cancelForm = (e) => {
    this.props.toggleContactForm();
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <label htmlFor="firstName">First Name:</label>
        <input
          onChange={this.handleFirstName}
          type="text"
          id="firstName"
          value={this.props.firstName}
        ></input>

        <label htmlFor="lastName">Last Name:</label>
        <input
          onChange={this.handleLastName}
          type="text"
          id="lastName"
          value={this.props.lastName}
        ></input>

        <label htmlFor="addr1">Address Line 1:</label>
        <input
          onChange={this.handleAddr1}
          type="text"
          id="addr1"
          value={this.props.addr1}
        ></input>

        <label htmlFor="addr2">Address Line 2:</label>
        <input
          onChange={this.handleAddr2}
          type="text"
          id="addr2"
          value={this.props.addr2}
        ></input>

        <label htmlFor="city">Town/City:</label>
        <input
          onChange={this.handleCity}
          type="text"
          id="city"
          value={this.props.city}
        ></input>

        <label htmlFor="addrState">State:</label>
        <input
          onChange={this.handleAddrState}
          type="text"
          id="addrState"
          value={this.props.addrState}
        ></input>

        <label htmlFor="zip">Zip Code:</label>
        <input
          onChange={this.handleZip}
          type="text"
          id="zip"
          value={this.props.zip}
        ></input>

        <label htmlFor="email">E-mail:</label>
        <input
          onChange={this.handleEmail}
          type={"email"}
          id="email"
          value={this.props.email}
        ></input>

        <label htmlFor="phone">Phone Number:</label>
        <input
          onChange={this.handlePhone}
          type="text"
          id="phone"
          value={this.props.phone}
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

export default ContactForm;
