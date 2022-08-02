import React from "react";

const WorkForm = (props) => {
  const {
    addWorkObj,
    createCards,
    toggleWorkForm,
    clearForm,
    deleteCard,
    setEditActive,
    isEditActive,
    setCompany,
    setCity,
    setAddrState,
    setFromYear,
    setToYear,
    setRole,
    setDescription,
    company,
    city,
    addrState,
    fromYear,
    toYear,
    role,
    description,
    id,
  } = props;

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleAddrStateChange = (e) => {
    setAddrState(e.target.value);
  };

  const handleFromYearChange = (e) => {
    setFromYear(e.target.value);
  };

  const handleToYearChange = (e) => {
    setToYear(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditActive === true) {
      await deleteCard(id); //Without await,
      setEditActive(false);
    }
    await addWorkObj();
    createCards();
    toggleWorkForm();
    clearForm();
  };

  const cancelForm = (e) => {
    toggleWorkForm();
    clearForm();
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
