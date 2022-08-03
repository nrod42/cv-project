import React from "react";

const EducationForm = (props) => {
  const {
    toggleEduForm,
    clearForm,
    setEditActive,
    isEditActive,
    eduInfo,
    setEduInfo,
    eduArray,
    setEduArray,
    // deleteCard,
  } = props;

  const { school, fromYear, toYear, degree, id } = eduInfo;

  const cancelForm = () => {
    toggleEduForm();
    clearForm();
    if (isEditActive === true) {
    }
    setEditActive(false);
  };

  const handleSchoolChange = (e) => {
    setEduInfo({ ...eduInfo, school: e.target.value });
  };

  const handleFromYearChange = (e) => {
    setEduInfo({ ...eduInfo, fromYear: e.target.value });
  };

  const handleToYearChange = (e) => {
    setEduInfo({ ...eduInfo, toYear: e.target.value });
  };

  const handleDegreeChange = (e) => {
    setEduInfo({ ...eduInfo, degree: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditActive === true) {
      // deleteCard(id);
      setEditActive(false);
    }
    setEduArray(
      [...eduArray, eduInfo].sort((a, b) => {
        return new Date(a.fromYear) - new Date(b.fromYear);
      })
    );
    cancelForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="eduFormContainer">
        <div className="inputDiv doubleInput">
          <label htmlFor="school">University / School:</label>
          <input
            onChange={handleSchoolChange}
            type="text"
            id="school"
            value={school}
          ></input>
        </div>
        <div className="inputDiv doubleInput">
          <label htmlFor="degree">Degree:</label>
          <input
            onChange={handleDegreeChange}
            type="text"
            id="degree"
            value={degree}
          ></input>
        </div>
        <div className="inputDiv">
          <div className="twoLineInputs">
            <div>
              <label htmlFor="fromYear">From Year:</label>
              <input
                onChange={handleFromYearChange}
                type="date"
                id="fromYear"
                value={fromYear}
              ></input>
            </div>
            <div>
              <label htmlFor="toYear">To Year:</label>
              <input
                onChange={handleToYearChange}
                type="date"
                id="toYear"
                value={toYear}
              ></input>
            </div>
          </div>
        </div>
        <div className="inputDiv">
          <button type="submit">Add</button>
          <button onClick={cancelForm} type="button">
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default EducationForm;
