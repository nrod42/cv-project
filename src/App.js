import React from "react";
import Navigation from "./Components/Navigation";
import ContactForm from "./Components/ContactForm";
import Education from "./Components/Education/Education";
import Work from "./Components/Work/Work";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentPage: {
        isContactActive: true,
        isEducationActive: false,
        isWorkActive: false,
      },
    };

    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
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
    }
  }

  prevPage() {
    if (this.state.currentPage.isWorkActive) {
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
              <ContactForm />
            </div>
            <div
              className={`educationSectionWrapper
                ${
                  this.state.currentPage.isEducationActive
                    ? "activeForm"
                    : "inactiveForm"
                }`}
            >
              <Education />
            </div>
            <div
              className={`workSectionWrapper
                ${
                  this.state.currentPage.isWorkActive
                    ? "activeForm"
                    : "inactiveForm"
                }`}
            >
              <Work />
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
