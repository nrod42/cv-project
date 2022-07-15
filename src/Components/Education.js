import React from "react";
import EducationForm from "./EducationForm";
import EducationCard from "./EducationCard";
import uniqid from "uniqid";

class Education extends React.Component {
  constructor() {
    super();
    //Instead of making a new form, only allow one. once that form is submitted, a card is made and the form is wiped and hidden. When add more is clicked, we simply show the form again
    this.state = {
      educationForms: [<EducationForm />],
      //   cardInfo={this.state.cardInfo}
      educationCards: [],
      cardInfo: {
        school: "",
        fromYear: "",
        toYear: "",
        degree: "",
      },
    };

    this.addEducationForm = this.addEducationForm.bind(this);
    this.addEducationCard = this.addEducationCard.bind(this);
  }

  addEducationForm() {
    this.setState({
      educationForms: [...this.state.educationForms, <EducationForm />],
    });
  }

  addEducationCard() {
    this.setState({
      educationCards: [...this.state.educationCards, <EducationCard />],
    });
  }

  //   makeCard (school,fromYear,toYear,degree) {
  //     <EducationCard school={school}
  //   }

  render() {
    return (
      <div>
        <h2>Education Info</h2>
        {this.state.educationForms}
        <div className="addMoreBtn">
          <button onClick={this.addEducationForm}>Add More</button>
        </div>
      </div>
    );
  }
}

export default Education;
