import React from "react";

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="reviewSection">
        <h2>Review</h2>
        <h3>Contact Info: </h3>
        {this.props.contactCard}
        <h3>Education: </h3>
        {this.props.educationCards}
        <h3>Work History: </h3>
        {this.props.workCards}
        <div>
          <button className="finalSubmitBtn">Submit</button>
        </div>
      </div>
    );
  }
}
export default Review;
