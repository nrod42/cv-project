import React from "react";
import EducationForm from "./EducationForm";
import EducationCard from "./EducationCard";
import uniqid from "uniqid";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
      eduData: [],
      educationCards: [],
      school: "",
      fromYear: "",
      toYear: "",
      degree: "",
      id: uniqid(),
      editing: false,
      editedObj: "",
    };

    this.toggleEducationForm = this.toggleEducationForm.bind(this);
    this.addEduObj = this.addEduObj.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.createCards = this.createCards.bind(this);
    this.clearForm=this.clearForm.bind(this)
    this.findObj = this.findObj.bind(this);
    this.handleSchoolChange = this.handleSchoolChange.bind(this)
    this.handleFromYearChange = this.handleFromYearChange.bind(this)
    this.handleToYearChange = this.handleToYearChange.bind(this)
    this.handleDegreeChange = this.handleDegreeChange.bind(this)
    this.setEditing = this.setEditing.bind(this)
  }

  handleSchoolChange = (school) => {
    this.setState({
      school: school,
    });
  };

  handleFromYearChange = (year) => {
    this.setState({
      fromYear: year,
    });
  };

  handleToYearChange = (year) => {
    this.setState({
      toYear: year,
    });
  };

  handleDegreeChange = (degree) => {
    this.setState({
      degree: degree,
    });
  };

  setEditing = (state) => {
    this.setState({
      editing: state,
    });
  };

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

  addEduObj() {
    this.setState({
      eduData: [...this.state.eduData, {
        school: this.state.school,
        fromYear: this.state.fromYear,
        toYear: this.state.toYear,
        degree: this.state.degree,
        id: this.state.id,
      }],
    });
  }

  
clearForm () {
  this.setState({
    school: "",
    fromYear: "",
    toYear: "",
    degree: "",
    id: uniqid(),
  })

}
  findObj(id) {
    this.setEditing(true)
    this.setState({
      editedObj: this.state.eduData.find((eduObj) => eduObj.id === id),
    })
  }



  async deleteCard(id) {
    await this.setState({
      eduData: this.state.eduData.filter((eduObj) => eduObj.id !== id),
    });
    this.createCards();
  }

  toggleEducationForm = () => {
    this.clearForm();
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
            deleteCard={this.deleteCard}
            clearForm={this.clearForm}
            school = {this.state.school}
            fromYear = {this.state.fromYear}
            toYear = {this.state.toYear}
            degree = {this.state.degree}
            setSchool={this.handleSchoolChange}
            setFromYear={this.handleFromYearChange}
            setToYear={this.handleToYearChange}
            setDegree={this.handleDegreeChange}
            setEditing={this.setEditing}
            editing={this.state.editing}
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
