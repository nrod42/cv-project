import React from "react";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
      firstName: "",
      lastName: "",
      addr1: "",
      addr2: "",
      city: "",
      state: "",
      zipcode: "",
      email: "",
      phone: "",
    };

    this.toggleContactForm = this.toggleContactForm.bind(this);
    this.createCard = this.createCard.bind(this);
    this.setFirstName = this.setFirstName.bind(this);
    this.setLastName = this.setLastName.bind(this);
    this.setAddr1 = this.setAddr1.bind(this);
    this.setAddr2 = this.setAddr2.bind(this);
    this.setCity = this.setCity.bind(this);
    this.setAddrState = this.setAddrState.bind(this);
    this.setZip = this.setZip.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPhone = this.setPhone.bind(this);
  }

  setFirstName = (name) => {
    this.setState({
      firstName: name,
    });
  };

  setLastName = (name) => {
    this.setState({
      lastName: name,
    });
  };

  setAddr1 = (addr) => {
    this.setState({
      addr1: addr,
    });
  };

  setAddr2 = (addr) => {
    this.setState({
      addr2: addr,
    });
  };

  setCity = (city) => {
    this.setState({
      city: city,
    });
  };

  setAddrState = (state) => {
    this.setState({
      state: state,
    });
  };

  setZip = (zip) => {
    this.setState({
      zip: zip,
    });
  };

  setEmail = (email) => {
    this.setState({
      email: email,
    });
  };

  setPhone = (phone) => {
    this.setState({
      phone: phone,
    });
  };

  createCard() {
    this.props.setContactCard(
      <ContactCard
        toggleForm={this.toggleContactForm}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        addr1={this.state.addr1}
        addr2={this.state.addr2}
        city={this.state.city}
        addrState={this.state.addrState}
        zip={this.state.zip}
        email={this.state.email}
        phone={this.state.phone}
        setFirstName={this.setFirstName}
        setLastName={this.setLastName}
        setAddr1={this.setAddr1}
        setAddr2={this.setAddr2}
        setCity={this.setCity}
        setAddrState={this.setAddrState}
        setZip={this.setZip}
        setEmail={this.setEmail}
        setPhone={this.setPhone}
      />
    );
  }

  toggleContactForm = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  clearForm() {
    this.setState({
      firstName: "",
      lastName: "",
      addr1: "",
      addr2: "",
      city: "",
      state: "",
      zipcode: "",
      email: "",
      phone: "",
    });
  }

  render() {
    return (
      <div className="contactSection">
        <h2>Contact Info</h2>
        {this.props.contactCard}
        <div
          className={
            this.state.isActive ? "activeContactForm" : "inactiveContactForm"
          }
        >
          <ContactForm
            toggleForm={this.toggleContactForm}
            createCard={this.createCard}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            addr1={this.state.addr1}
            addr2={this.state.addr2}
            city={this.state.city}
            addrState={this.state.addrState}
            zip={this.state.zip}
            email={this.state.email}
            phone={this.state.phone}
            setFirstName={this.setFirstName}
            setLastName={this.setLastName}
            setAddr1={this.setAddr1}
            setAddr2={this.setAddr2}
            setCity={this.setCity}
            setAddrState={this.setAddrState}
            setZip={this.setZip}
            setEmail={this.setEmail}
            setPhone={this.setPhone}
          />
        </div>
      </div>
    );
  }
}

export default Contact;
