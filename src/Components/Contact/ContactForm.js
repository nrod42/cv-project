import React from "react";

const ContactForm = (props) => {
  const {
    createCard,
    toggleContactForm,
    contactInfo,
    setContactInfo,

  } = props;

  const {firstName, lastName, addr1, addr2, city, addrState, zip, email, phone} = contactInfo


  const handleFirstName = (e) => {
    setContactInfo({...contactInfo, firstName: e.target.value});
  };

  const handleLastName = (e) => {
    setContactInfo({...contactInfo, lastName: e.target.value});
  };

  const handleAddr1 = (e) => {
    setContactInfo({...contactInfo, addr1: e.target.value});
  };

  const handleAddr2 = (e) => {
    setContactInfo({...contactInfo, addr2: e.target.value});
  };

  const handleCity = (e) => {
    setContactInfo({...contactInfo, city: e.target.value});
  };

  const handleAddrState = (e) => {
    setContactInfo({...contactInfo, addrState: e.target.value});
  };

  const handleZip = (e) => {
    setContactInfo({...contactInfo, zip: e.target.value});
  };

  const handleEmail = (e) => {
    setContactInfo({...contactInfo, email: e.target.value});
  };

  const handlePhone = (e) => {
    setContactInfo({...contactInfo, phone: e.target.value});
  };

  // const handleChange = (e) => {
  //   setContactInfo(...contactInfo,)
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    createCard();
    toggleContactForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="contactFormContainer">
        <div>
          <div className="inputDiv">
            <label htmlFor="firstName">First Name:</label>
            <input
              onChange={handleFirstName}
              type="text"
              id="firstName"
              value={firstName}
            ></input>
          </div>
          <div className="inputDiv">
            <label htmlFor="lastName">Last Name:</label>
            <input
              onChange={handleLastName}
              type="text"
              id="lastName"
              value={lastName}
            ></input>
          </div>
        </div>
        <div className="inputDiv">
          <label htmlFor="addr1">Address Line 1:</label>
          <input
            onChange={handleAddr1}
            type="text"
            id="addr1"
            value={addr1}
          ></input>
        </div>
        <div className="inputDiv">
          <label htmlFor="addr2">Address Line 2:</label>
          <input
            onChange={handleAddr2}
            type="text"
            id="addr2"
            value={addr2}
          ></input>
        </div>
        <div>
          <div className="inputDiv">
            <label htmlFor="city">City/Town:</label>
            <input
              onChange={handleCity}
              type="text"
              id="city"
              value={city}
            ></input>
          </div>
          <div className="inputDiv">
            <label htmlFor="addrState">State:</label>
            <input
              onChange={handleAddrState}
              type="text"
              id="addrState"
              value={addrState}
            ></input>
          </div>
        </div>
        <div className="inputDiv">
          <label htmlFor="zip">Zip Code:</label>
          <input 
            onChange={handleZip} 
            type="text" i
            d="zip" 
            value={zip}></input>
        </div>
        <div className="inputDiv">
          <label htmlFor="email">E-mail:</label>
          <input
            onChange={handleEmail}
            type={"email"}
            id="email"
            value={email}
          ></input>
        </div>
        <div className="inputDiv">
          <label htmlFor="phone">Phone Number:</label>
          <input
            onChange={handlePhone}
            type="text"
            id="phone"
            value={phone}
          ></input>
        </div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default ContactForm;
