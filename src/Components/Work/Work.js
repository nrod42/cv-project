import React from "react";
import WorkForm from "./WorkForm";
import WorkCard from "./WorkCard";
import uniqid from "uniqid";

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditActive: false,
      workData: [],
      company: "",
      city: "",
      addrState: "",
      fromYear: "",
      toYear: "",
      role: "",
      description: "",
      id: uniqid(),
    };

    this.addWorkObj = this.addWorkObj.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.createCards = this.createCards.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.edit = this.edit.bind(this);
    this.setCompany = this.setCompany.bind(this);
    this.setCity = this.setCity.bind(this);
    this.setAddrState = this.setAddrState.bind(this);
    this.setFromYear = this.setFromYear.bind(this);
    this.setToYear = this.setToYear.bind(this);
    this.setRole = this.setRole.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setEditActive = this.setEditActive.bind(this);
  }

  setCompany = (company) => {
    this.setState({
      company: company,
    });
  };

  setCity = (city) => {
    this.setState({
      city: city,
    });
  };

  setAddrState = (addrState) => {
    this.setState({
      addrState: addrState,
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

  setRole = (role) => {
    this.setState({
      role: role,
    });
  };

  setDescription = (description) => {
    this.setState({
      description: description,
    });
  };

  setEditActive = (status) => {
    this.setState({
      isEditActive: status,
    });
  };

  createCards() {
    let orderedState = this.state.workData.sort((a, b) => {
      return new Date(a.fromYear) - new Date(b.fromYear);
    });
    let newState = orderedState.map((obj) => (
      <WorkCard
        key={uniqid()}
        toggleWorkForm={this.props.toggleWorkForm}
        deleteCard={this.deleteCard}
        edit={this.edit}
        cardInfo={obj}
        company={this.state.company}
        city={this.state.city}
        addrState={this.state.addrState}
        fromYear={this.state.fromYear}
        toYear={this.state.toYear}
        role={this.state.role}
        description={this.state.description}
        setCompany={this.setCompany}
        setCity={this.setCity}
        setAddrState={this.setAddrState}
        setFromYear={this.setFromYear}
        setToYear={this.setToYear}
        setRole={this.setRole}
        setDescription={this.setDescription}
      />
    ));
    this.props.setWorkCards(newState);
  }

  addWorkObj() {
    this.setState({
      workData: [
        ...this.state.workData,
        {
          company: this.state.company,
          city: this.state.city,
          addrState: this.state.addrState,
          fromYear: this.state.fromYear,
          toYear: this.state.toYear,
          role: this.state.role,
          description: this.state.description,
          id: this.state.id,
        },
      ],
    });
  }

  clearForm() {
    this.setState({
      company: "",
      city: "",
      addrState: "",
      fromYear: "",
      toYear: "",
      role: "",
      description: "",
      id: uniqid(),
    });
  }

  edit(id) {
    let editedObj = this.state.workData.find((workObj) => workObj.id === id);
    this.setState({
      isEditActive: true,
      company: editedObj.company,
      city: editedObj.city,
      addrState: editedObj.addrState,
      fromYear: editedObj.fromYear,
      toYear: editedObj.toYear,
      role: editedObj.role,
      description: editedObj.description,
      id: editedObj.id,
    });
  }

  async deleteCard(id) {
    await this.setState({
      workData: this.state.workData.filter((workObj) => workObj.id !== id),
    });
    this.createCards();
  }

  render() {
    return (
      <div className="workSection">
        <h2>Work Info</h2>
        {this.props.workCards}
        <div className="addMoreBtn">
          <button onClick={this.props.toggleWorkForm}>Add More</button>
        </div>
        <div
          className={
            this.props.isWorkFormActive ? "activeWorkForm" : "inactiveWorkForm"
          }
        >
          <WorkForm
            toggleWorkForm={this.props.toggleWorkForm}
            addWorkObj={this.addWorkObj}
            createCards={this.createCards}
            deleteCard={this.deleteCard}
            clearForm={this.clearForm}
            isEditActive={this.state.isEditActive}
            company={this.state.company}
            city={this.state.city}
            addrState={this.state.addrState}
            fromYear={this.state.fromYear}
            toYear={this.state.toYear}
            role={this.state.role}
            description={this.state.description}
            id={this.state.id}
            setCompany={this.setCompany}
            setCity={this.setCity}
            setAddrState={this.setAddrState}
            setFromYear={this.setFromYear}
            setToYear={this.setToYear}
            setRole={this.setRole}
            setDescription={this.setDescription}
            setEditActive={this.setEditActive}
          />
        </div>
      </div>
    );
  }
}

export default Work;
