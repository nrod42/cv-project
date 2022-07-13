import React from "react";
import GeneralInfoForm from "./Components/GeneralForm";
import EducationForm from "./Components/EducationForm";
import WorkForm from "./Components/WorkForm";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="forms">
          <GeneralInfoForm />
          <EducationForm />
          <WorkForm />
        </div>
      </div>
    );
  }
}

export default App;
