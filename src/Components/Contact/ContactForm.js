import React from "react";

class ContactForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName"></input>

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName"></input>

        <label htmlFor="addressLine1">Address Line 1:</label>
        <input type="text" id="addressLine1"></input>

        <label htmlFor="addressLine2">Address Line 2:</label>
        <input type="text" id="addressLine2"></input>

        <label htmlFor="city">Town/City:</label>
        <input type="text" id="city"></input>

        <label htmlFor="zipcode">Zip Code:</label>
        <input type="text" id="zipcode"></input>

        <label htmlFor="email">E-mail:</label>
        <input type={"email"} id="email"></input>

        <label htmlFor="phone">Phone Number:</label>
        <input type="text" id="phone"></input>
      </form>
    );
  }
}

export default ContactForm;
