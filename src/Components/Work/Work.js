import React from "react";
import WorkForm from "./WorkForm";
import WorkCard from "./WorkCard";
import uniqid from "uniqid";

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
      workCards: [],
      cardInfo: {
        company: "",
        city: "",
        fromYear: "",
        toYear: "",
        role: "",
        description: "",
      },
    };

    this.toggleWorkForm = this.toggleWorkForm.bind(this);
    this.updateCardInfo = this.updateCardInfo.bind(this);
    this.addWorkCard = this.addWorkCard.bind(this);
  }

  updateCardInfo(e) {
    this.setState({
      cardInfo: {
        company: e.target.company.value,
        city: e.target.city.value,
        fromYear: e.target.fromYear.value,
        toYear: e.target.toYear.value,
        role: e.target.role.value,
        description: e.target.description.value,
      },
    });
  }

  addWorkCard(props) {
    this.setState({
      workCards: [...this.state.workCards, <WorkCard cardInfo={props} />],
    });
    this.state.workCards.forEach((card) => {
      console.log(card.props);
    });
  }

  toggleWorkForm = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    return (
      <div className="workSection">
        <h2>Work Info</h2>
        {this.state.workCards}
        <div
          className={
            this.state.isActive ? "activeWorkForm" : "inactiveWorkForm"
          }
        >
          <WorkForm
            updateCardInfo={this.updateCardInfo}
            toggleForm={this.toggleWorkForm}
            addCard={this.addWorkCard}
          />
        </div>
        <div className="addMoreBtn">
          <button onClick={this.toggleWorkForm}>Add More</button>
        </div>
      </div>
    );
  }
}

export default Work;
