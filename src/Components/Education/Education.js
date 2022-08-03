import React, { useState } from "react";
import EducationForm from "./EducationForm";
import EducationCard from "./EducationCard";
import uniqid from "uniqid";

const Education = (props) => {
  const {toggleEduForm, educationCards, setEducationCards, isEduFormActive} = props;
  const [eduInfo, setEduInfo] = useState({
    school: "",
    fromYear: "",
    toYear: "",
    degree: "",
    id: uniqid(),
  })
  const [isEditActive, setEditActive] = useState(false);
  const [eduData, setEduData] = useState([]);

  // useEffect(() => {
  //   const result = eduData.filter((eduObj) => eduObj.id !== id);
  //   setEduData(result);
  // }, [eduData]);

  function createCards () {
    let orderedState = eduData.sort((a, b) => {
      return new Date(a.fromYear) - new Date(b.fromYear);
    });

    let newState = orderedState.map((obj) => (
      <EducationCard
        key={uniqid()}
        toggleEduForm={toggleEduForm}
        deleteCard={deleteCard}
        edit={edit}
        cardInfo={obj}
        
        eduInfo={eduInfo}
        setEduInfo={setEduInfo}
      />
    ));
    setEducationCards(newState);
  }

  const addEduObj = () => {
    setEduData([...eduData, eduInfo]);
  }

  const clearForm = () => {
    setEduInfo({
      school: "",
      fromYear: "",
      toYear: "",
      degree: "",
      id: uniqid(),
    })
  }

  const edit = async (id) => {
    await setEditActive(true)
    let editedObj = eduData.find((eduObj) => eduObj.id === id); // finds the obj to be edited
    setEduInfo({
      school: editedObj.school,
      fromYear: editedObj.fromYear,
      toYear: editedObj.toYear,
      degree: editedObj.degree,
      id: editedObj.id,
    })
  }

  const deleteCard = async (id) => {
    console.log('eduData')
    await setEduData(eduData.filter((eduObj) => eduObj.id !== id))
    createCards();
  }


    return (
      <div className="educationSection">
        <h2>Education Info</h2>
        {educationCards}
        <div className="addMoreBtn">
          <button onClick={toggleEduForm}>Add More</button>
        </div>
        <div
          className={
            isEduFormActive
              ? "activeEducationForm"
              : "inactiveEducationForm"
          }
        >
          <EducationForm
            toggleEduForm={toggleEduForm}
            addEduObj={addEduObj}
            createCards={createCards}
            deleteCard={deleteCard}
            clearForm={clearForm}
            isEditActive={isEditActive}
            eduInfo={eduInfo}
            setEduInfo={setEduInfo}
            setEditActive={setEditActive}
          />
        </div>
      </div>
    );
  }

export default Education;
