import React from "react";
import EducationForm from "./EducationForm";
import EducationCard from "./EducationCard";
import uniqid from "uniqid";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditActive: false,
      eduData: [],
      school: "",
      fromYear: "",
      toYear: "",
      degree: "",
      id: uniqid(),
    };

    this.addEduObj = this.addEduObj.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.createCards = this.createCards.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.edit = this.edit.bind(this);
    this.setSchool = this.setSchool.bind(this);
    this.setFromYear = this.setFromYear.bind(this);
    this.setToYear = this.setToYear.bind(this);
    this.setDegree = this.setDegree.bind(this);
    this.setEditActive = this.setEditActive.bind(this);
  }

  setSchool = (school) => {
    this.setState({
      school: school,
    });
  };

  setFromYear = (year) => {
    this.setState({
      fromYear: year,
    });
  };

  setToYear = (year) => {
    this.setState({
      toYear: year,
    });
  };

  setDegree = (degree) => {
    this.setState({
      degree: degree,
    });
  };

  setEditActive = (status) => {
    this.setState({
      isEditActive: status,
    });
  };

  createCards() {
    let orderedState = this.state.eduData.sort((a, b) => {
      return new Date(a.fromYear) - new Date(b.fromYear);
    });
    let newState = orderedState.map((obj) => (
      <EducationCard
        toggleEduForm={this.props.toggleEduForm}
        deleteCard={this.deleteCard}
        edit={this.edit}
        cardInfo={obj}
        school={this.state.school}
        fromYear={this.state.fromYear}
        toYear={this.state.toYear}
        degree={this.state.degree}
        setSchool={this.setSchool}
        setFromYear={this.setFromYear}
        setToYear={this.setToYear}
        setDegree={this.setDegree}
      />
    ));
    this.props.setEducationCards(newState);
  }

  addEduObj() {
    this.setState({
      eduData: [
        ...this.state.eduData,
        {
          school: this.state.school,
          fromYear: this.state.fromYear,
          toYear: this.state.toYear,
          degree: this.state.degree,
          id: this.state.id,
        },
      ],
    });
  }

  clearForm() {
    this.setState({
      school: "",
      fromYear: "",
      toYear: "",
      degree: "",
      id: uniqid(),
    });
  }

  edit(id) {
    let editedObj = this.state.eduData.find((eduObj) => eduObj.id === id);
    this.setState({
      isEditActive: true,
      school: editedObj.school,
      fromYear: editedObj.fromYear,
      toYear: editedObj.toYear,
      degree: editedObj.degree,
      id: editedObj.id,
    });
  }

  async deleteCard(id) {
    await this.setState({
      eduData: this.state.eduData.filter((eduObj) => eduObj.id !== id),
    });
    this.createCards();
  }

  render() {
    return (
      <div className="educationSection">
        <h2>Education Info</h2>
        {this.props.educationCards}
        <div className="addMoreBtn">
          <button onClick={this.props.toggleEduForm}>Add More</button>
        </div>
        <div
          className={
            this.props.isEduFormActive
              ? "activeEducationForm"
              : "inactiveEducationForm"
          }
        >
          <EducationForm
            toggleEduForm={this.props.toggleEduForm}
            addEduObj={this.addEduObj}
            createCards={this.createCards}
            deleteCard={this.deleteCard}
            clearForm={this.clearForm}
            isEditActive={this.state.isEditActive}
            school={this.state.school}
            fromYear={this.state.fromYear}
            toYear={this.state.toYear}
            degree={this.state.degree}
            id={this.state.id}
            setSchool={this.setSchool}
            setFromYear={this.setFromYear}
            setToYear={this.setToYear}
            setDegree={this.setDegree}
            setEditActive={this.setEditActive}
          />
        </div>
      </div>
    );
  }
}

export default Education;
