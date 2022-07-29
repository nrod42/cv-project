import React from "react";
import Navigation from "./Components/Navigation";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Work from "./Components/Work/Work";
import Review from "./Components/Review";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isContactActive: true,
      isEducationActive: false,
      isWorkActive: false,
      isReviewActive: false,
      isContactFormActive: true,
      isEduFormActive: true,
      isWorkFormActive: true,
      contactCard: "",
      educationCards: [],
      workCards: [],
    };

    this.setContactCard = this.setContactCard.bind(this);
    this.setEducationCards = this.setEducationCards.bind(this);
    this.setWorkCards = this.setWorkCards.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.toggleContactForm = this.toggleContactForm.bind(this);
    this.toggleEduForm = this.toggleEduForm.bind(this);
    this.toggleWorkForm = this.toggleWorkForm.bind(this);
  }

  setContactCard(card) {
    this.setState({
      contactCard: card,
    });
  }

  setEducationCards(cards) {
    this.setState({
      educationCards: cards,
    });
  }

  setWorkCards(cards) {
    this.setState({
      workCards: cards,
    });
  }

  nextPage() {
    if (this.state.isContactActive) {
      this.setState({
        isContactActive: !this.state.isContactActive,
        isEducationActive: !this.state.isEducationActive,
      });
    } else if (this.state.isEducationActive) {
      this.setState({
        isEducationActive: !this.state.isEducationActive,
        isWorkActive: !this.state.isWorkActive,
      });
    } else if (this.state.isWorkActive) {
      this.setState({
        isWorkActive: !this.state.isWorkActive,
        isReviewActive: !this.state.isReviewActive,
      });
    }
  }

  prevPage() {
    if (this.state.isReviewActive) {
      this.setState({
        isReviewActive: !this.state.isReviewActive,
        isWorkActive: !this.state.isWorkActive,
      });
    } else if (this.state.isWorkActive) {
      this.setState({
        isWorkActive: !this.state.isWorkActive,
        isEducationActive: !this.state.isEducationActive,
      });
    } else if (this.state.isEducationActive) {
      this.setState({
        isEducationActive: !this.state.isEducationActive,
        isContactActive: !this.state.isContactActive,
      });
    }
  }

  toggleContactForm = () => {
    this.setState({
      isContactFormActive: !this.state.isContactFormActive,
    });
  };

  toggleEduForm = () => {
    this.setState({
      isEduFormActive: !this.state.isEduFormActive,
    });
  };

  toggleWorkForm = () => {
    this.setState({
      isWorkFormActive: !this.state.isWorkFormActive,
    });
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="mainWrapper">
          <div
            className={
              this.state.isContactActive ? "activeSection" : "inactiveSection"
            }
          >
            <Contact
              contactCard={this.state.contactCard}
              setContactCard={this.setContactCard}
              toggleContactForm={this.toggleContactForm}
              isContactFormActive={this.state.isContactFormActive}
            />
          </div>
          <div
            className={
              this.state.isEducationActive ? "activeSection" : "inactiveSection"
            }
          >
            <Education
              educationCards={this.state.educationCards}
              setEducationCards={this.setEducationCards}
              toggleEduForm={this.toggleEduForm}
              isEduFormActive={this.state.isEduFormActive}
            />
          </div>
          <div
            className={
              this.state.isWorkActive ? "activeSection" : "inactiveSection"
            }
          >
            <Work
              workCards={this.state.workCards}
              setWorkCards={this.setWorkCards}
              toggleWorkForm={this.toggleWorkForm}
              isWorkFormActive={this.state.isWorkFormActive}
            />
          </div>
          <div
            className={
              this.state.isReviewActive ? "activeSection" : "inactiveSection"
            }
          >
            <Review
              contactCard={this.state.contactCard}
              educationCards={this.state.educationCards}
              workCards={this.state.workCards}
              // isContactFormActive={this.state.isContactFormActive}
              // isEduFormActive={this.state.isEduFormActive}
              // isWorkFormActive={this.state.isWorkFormActive}
            />
          </div>
        </div>
        <div className="formNavBtns">
          <button
            className={this.state.isContactActive ? "hiddenBtn" : null}
            onClick={this.prevPage}
          >
            Previous
          </button>
          <button
            className={this.state.isReviewActive ? "hiddenBtn" : null}
            onClick={this.nextPage}
          >
            Next
          </button>
        </div>

        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
