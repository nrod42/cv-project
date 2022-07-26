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
      currentPage: {
        isContactActive: true,
        isEducationActive: false,
        isWorkActive: false,
        isReviewActive: false,
      },
      contactCard: "",
      educationCards: [],
      workCards: [],
    };
    this.setContactCard = this.setContactCard.bind(this);
    this.setEducationCards = this.setEducationCards.bind(this);
    this.setWorkCards = this.setWorkCards.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
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
    if (this.state.currentPage.isContactActive) {
      this.setState({
        currentPage: {
          isContactActive: !this.state.currentPage.isContactActive,
          isEducationActive: !this.state.currentPage.isEducationActive,
        },
      });
    } else if (this.state.currentPage.isEducationActive) {
      this.setState({
        currentPage: {
          isEducationActive: !this.state.currentPage.isEducationActive,
          isWorkActive: !this.state.currentPage.isWorkActive,
        },
      });
    } else if (this.state.currentPage.isWorkActive) {
      this.setState({
        currentPage: {
          isWorkActive: !this.state.currentPage.isWorkActive,
          isReviewActive: !this.state.currentPage.isReviewActive,
        },
      });
    }
  }

  prevPage() {
    if (this.state.currentPage.isReviewActive) {
      this.setState({
        currentPage: {
          isReviewActive: !this.state.currentPage.isReviewActive,
          isWorkActive: !this.state.currentPage.isWorkActive,
        },
      });
    } else if (this.state.currentPage.isWorkActive) {
      this.setState({
        currentPage: {
          isWorkActive: !this.state.currentPage.isWorkActive,
          isEducationActive: !this.state.currentPage.isEducationActive,
        },
      });
    } else if (this.state.currentPage.isEducationActive) {
      this.setState({
        currentPage: {
          isEducationActive: !this.state.currentPage.isEducationActive,
          isContactActive: !this.state.currentPage.isContactActive,
        },
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="mainWrapper">
          <div className="forms">
            <div
              className={`contactSectionWrapper
                ${
                  this.state.currentPage.isContactActive
                    ? "activeForm"
                    : "inactiveForm"
                }`}
            >
              <Contact
                contactCard={this.state.contactCard}
                setContactCard={this.setContactCard}
              />
            </div>
            <div
              className={`educationSectionWrapper
                ${
                  this.state.currentPage.isEducationActive
                    ? "activeForm"
                    : "inactiveForm"
                }`}
            >
              <Education
                educationCards={this.state.educationCards}
                setEducationCards={this.setEducationCards}
              />
            </div>
            <div
              className={`workSectionWrapper
                ${
                  this.state.currentPage.isWorkActive
                    ? "activeForm"
                    : "inactiveForm"
                }`}
            >
              <Work
                workCards={this.state.workCards}
                setWorkCards={this.setWorkCards}
              />
            </div>
            <div
              className={`reviewSectionWrapper ${
                this.state.currentPage.isReviewActive
                  ? "activeForm"
                  : "inactiveForm"
              }`}
            >
              <Review
                contactCard={this.state.contactCard}
                educationCards={this.state.educationCards}
                workCards={this.state.workCards}
              />
            </div>
          </div>
          <div className="formNavBtns">
            <button onClick={this.prevPage}>Previous</button>
            <button onClick={this.nextPage}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
