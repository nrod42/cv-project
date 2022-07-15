import React from "react";
import Navigation from "./Components/Navigation";
import ContactForm from "./Components/ContactForm";
import Education from "./Components/Education";
import WorkForm from "./Components/WorkForm";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentPage: {
        isContactActive: true,
        isEducationActive: false,
        isWorkActive: false,
      },
      workSections: [<WorkForm />],
    };

    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.addWork = this.addWork.bind(this);
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

  addWork() {
    this.setState({
      workSections: [...this.state.workSections, <WorkForm />],
    });
  }

  //Instead of adding one component, there should be an array
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="mainWrapper">
          <div className="forms">
            <div
              className={
                this.state.currentPage.isContactActive
                  ? "activeForm"
                  : "inactiveForm"
              }
            >
              <ContactForm />
            </div>
            <div
              className={
                this.state.currentPage.isEducationActive
                  ? "activeForm"
                  : "inactiveForm"
              }
            >
              <Education />
            </div>
            <div
              className={
                this.state.currentPage.isWorkActive
                  ? "activeForm"
                  : "inactiveForm"
              }
            >
              <h2>Work History</h2>
              {this.state.workSections}
              <div className="addMoreBtn">
                <button onClick={this.addWork}>Add More</button>
              </div>
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
