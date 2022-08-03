import React from "react";

const WorkForm = (props) => {
  const {
    toggleWorkForm,
    clearForm,
    setEditActive,
    isEditActive,
    workInfo,
    setWorkInfo,
    workArray,
    setWorkArray,
    // deleteCard,
  } = props;

  const { company, city, addrState, fromYear, toYear, role, description, id } =
    workInfo;

  const cancelForm = () => {
    toggleWorkForm();
    clearForm();
    if (isEditActive === true) {
    }
    setEditActive(false);
  };

  const handleCompanyChange = (e) => {
    setWorkInfo({ ...workInfo, company: e.target.value });
  };

  const handleCityChange = (e) => {
    setWorkInfo({ ...workInfo, city: e.target.value });
  };

  const handleAddrStateChange = (e) => {
    setWorkInfo({ ...workInfo, addrState: e.target.value });
  };

  const handleFromYearChange = (e) => {
    setWorkInfo({ ...workInfo, fromYear: e.target.value });
  };

  const handleToYearChange = (e) => {
    setWorkInfo({ ...workInfo, toYear: e.target.value });
  };

  const handleRoleChange = (e) => {
    setWorkInfo({ ...workInfo, role: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setWorkInfo({ ...workInfo, description: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditActive === true) {
      // deleteCard(id);
      setEditActive(false);
    }
    setWorkArray(
      [...workArray, workInfo].sort((a, b) => {
        return new Date(a.fromYear) - new Date(b.fromYear);
      })
    );
    cancelForm();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="workFormContainer">
        <div className="inputDiv doubleInput">
          <label htmlFor="company">Company:</label>
          <input
            onChange={handleCompanyChange}
            type="text"
            id="company"
            value={company}
          ></input>
        </div>
        <div className="roleInput inputDiv doubleInput">
          <label htmlFor="role">Role:</label>
          <input
            onChange={handleRoleChange}
            type="text"
            id="role"
            value={role}
          ></input>
        </div>
        <div className="inputDiv">
          <div>
            <label htmlFor="city">City:</label>
            <input
              onChange={handleCityChange}
              type="text"
              id="city"
              value={city}
            ></input>
          </div>
          <div>
            <label htmlFor="addrState">State:</label>
            <input
              onChange={handleAddrStateChange}
              type="text"
              id="addrState"
              value={addrState}
            ></input>
          </div>
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
        <div className="descInput inputDiv">
          <label htmlFor="description">
            Short description of responsibilities:
          </label>
          <textarea
            onChange={handleDescriptionChange}
            id="description"
            value={description}
            rows="6"
          ></textarea>
        </div>
        <button type="submit">Add</button>
        <button onClick={cancelForm} type="button">
          Cancel
        </button>
      </div>
    </form>
  );
};
export default WorkForm;
