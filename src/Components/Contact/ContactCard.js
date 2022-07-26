import React from "react";

class ContactCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    this.props.toggleForm();
    // this.props.edit(this.props.cardInfo.id); //returns edited obj and then fills inputs fields with its info;
  }

  render() {
    return (
      <div className="contactCard">
        <div>
          <p>First Name: {this.props.firstName}</p>
          <p>Last Name: {this.props.lastName}</p>
          <p>Address 1: {this.props.addr1}</p>
          <p>Address 2: {this.props.addr2}</p>
          <p>City: {this.props.city}</p>
          <p>State: {this.props.addrState}</p>
          <p>Zipcode: {this.props.zip}</p>
          <p>Email: {this.props.email}</p>
          <p>Phone: {this.props.phone}</p>
        </div>
        <div>
          <button onClick={this.handleEdit} type="button">
            Edit
          </button>
        </div>
      </div>
    );
  }
}

export default ContactCard;
