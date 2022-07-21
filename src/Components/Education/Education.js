import React from "react";
import EducationForm from "./EducationForm";
import EducationCard from "./EducationCard";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
      eduData: [],
      educationCards: [],
      editedObj: "",
    };

    this.toggleEducationForm = this.toggleEducationForm.bind(this);
    this.addEduObj = this.addEduObj.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.createCards = this.createCards.bind(this);
    this.findObj = this.findObj.bind(this);
  }

  createCards() {
    let newState = this.state.eduData.map((obj) => (
      <EducationCard
        toggleForm={this.toggleEducationForm}
        deleteCard={this.deleteCard}
        findObj={this.findObj}
        cardInfo={obj}
      />
    ));
    this.setState({
      educationCards: newState,
    });
  }

  addEduObj(obj) {
    this.setState({
      eduData: [...this.state.eduData, obj],
    });
  }

  findObj(id) {
    this.setState({
      editedObj: this.state.eduData.find((eduObj) => eduObj.id === id),
    });
  }

  fillForm(obj) {}
  // editedCardInfo(cardInfo) {}

  async deleteCard(id) {
    await this.setState({
      eduData: this.state.eduData.filter((eduObj) => eduObj.id !== id),
    });
    this.createCards();
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
            toggleForm={this.toggleEducationForm}
            addEduObj={this.addEduObj}
            createCards={this.createCards}
            editedObj={this.state.editedObj}
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
