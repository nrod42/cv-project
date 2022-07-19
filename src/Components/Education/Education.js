import React from "react";
import EducationForm from "./EducationForm";
import EducationCard from "./EducationCard";
import uniqid from "uniqid";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
      educationCards: [],
      cardInfo: {
        school: "",
        fromYear: "",
        toYear: "",
        degree: "",
      },
    };

    this.toggleEducationForm = this.toggleEducationForm.bind(this);
    this.updateCardInfo = this.updateCardInfo.bind(this);
    this.addEducationCard = this.addEducationCard.bind(this);
  }

  updateCardInfo(e) {
    this.setState({
      cardInfo: {
        school: e.target.school.value,
        fromYear: e.target.fromYear.value,
        toYear: e.target.toYear.value,
        degree: e.target.degree.value,
      },
    });
  }

  addEducationCard(props) {
    this.setState({
      educationCards: [
        ...this.state.educationCards,
        <EducationCard cardInfo={props} />,
      ],
    });
  }

  toggleEducationForm = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    return (
      <div className="educationSection">
        <h2>Education Info</h2>
        {this.state.educationCards}
        <div
          className={
            this.state.isActive
              ? "activeEducationForm"
              : "inactiveEducationForm"
          }
        >
          <EducationForm
            updateCardInfo={this.updateCardInfo}
            toggleForm={this.toggleEducationForm}
            addCard={this.addEducationCard}
          />
        </div>
        <div className="addMoreBtn">
          <button onClick={this.toggleEducationForm}>Add More</button>
        </div>
      </div>
    );
  }
}

export default Education;
