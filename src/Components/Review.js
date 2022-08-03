import React from "react";

const Review = (props) => {

  return (
    <div className="reviewSection">
      <h2>Review</h2>
      <h3>Contact Info: </h3>
      {props.contactCard}
      <h3>Education: </h3>
      {props.educationCards}
      <h3>Work History: </h3>
      {props.workCards}
      <div>
        <button className="finalSubmitBtn">Submit</button>
      </div>
    </div>
  );
}
  
export default Review;
