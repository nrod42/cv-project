import React from "react";

class ContactCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    this.props.toggleContactForm();
  }

  render() {
    return (
      <div className="contactCard">
        <div className="contactCardInfo">
          <div>
            <div className="cardSubSection">
              <p className="cardTitle">First Name:</p>
              <p>{this.props.firstName}</p>
            </div>
            <div className="cardSubSection">
              <p className="cardTitle">Last Name:</p>
              <p>{this.props.lastName}</p>
            </div>
          </div>

          <div className="cardSubSection">
            <p className="cardTitle">Address 1:</p>
            <p>{this.props.addr1}</p>
          </div>
          <div className="cardSubSection">
            <p className="cardTitle">Address 2:</p>
            <p>{this.props.addr2}</p>
          </div>

          <div>
            <div className="cardSubSection">
              <p className="cardTitle">City:</p>
              <p>{this.props.city}</p>
            </div>
            <div className="cardSubSection">
              <p className="cardTitle">State:</p>
              <p>{this.props.addrState}</p>
            </div>
            <div className="cardSubSection">
              <p className="cardTitle">Zipcode:</p>
              <p>{this.props.zip}</p>
            </div>
          </div>

          <div>
            <p className="cardTitle">Email: </p>
            <p>{this.props.email}</p>
          </div>
          <div>
            <p className="cardTitle">Phone:</p>
            <p>{this.props.phone}</p>
          </div>
        </div>
        <div className="cardBtns">
          <button type="button">
            <img
              src={window.location.origin + "/img/edit_icon.svg"}
              alt="edit button icon"
              onClick={this.handleEdit}
            ></img>
          </button>
        </div>
      </div>
    );
  }
}

export default ContactCard;
