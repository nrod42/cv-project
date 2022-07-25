import React from "react";
import ContactForm from "./ContactForm";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };
  }

  render() {
    return (
      <div className="contactSection">
        <h2>Education Info</h2>
        {this.state.contactCard}
        <div className="addMoreBtn">
          <button onClick={this.toggleContactForm}>Add More</button>
        </div>
        <div
          className={this.state.isActive ? "activeForm" : "inactiveContactForm"}
        >
          <ContactForm />
        </div>
      </div>
    );
  }
}
