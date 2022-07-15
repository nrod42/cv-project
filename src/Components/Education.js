import React from "react";
import EducationForm from "./EducationForm";
import EducationCard from "./EducationCard";
// import uniqid from "uniqid";

class Education extends React.Component {
  constructor() {
    super();
    //Instead of making a new form, only allow one. once that form is submitted, a card is made and the form is wiped and hidden. When add more is clicked, we simply show the form again
    this.state = {
      educationCards: [],
      cardInfo: {
        school: "",
        fromYear: "",
        toYear: "",
        degree: "",
      },
    };
  }

  //   addEducationCard() {
  //     this.setState({
  //       educationCards: [...this.state.educationCards, <EducationCard />],
  //     });
  //   }

  render() {
    return (
      <div>
        <h2>Education Info</h2>
        {/* Ideally, we could send state of form div and then in the form componenet, make toggle affect the state here in the parent. 
        Basically, you click submit in child, it updates state here and hides the form.
        Thhen, in here, clicking add more shows form again */}
        <EducationForm />
        <div className="addMoreBtn">
          <button>Add More</button>
        </div>
      </div>
    );
  }
}

export default Education;
