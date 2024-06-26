import { useState } from "react";
import AnswersList from "./AnswersList";
import SurveyForm from "./SurveyForm";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formState, setFormState] = useState([]);
  const [formData, setFormData] = useState({
    review: "",
    username: "",
    email: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault()
    
    setFormData({
      review: "",
      username: "",
      email: ""
    });
    updateState(event)
  }

  const updateState = (event) => {
    event.preventDefault()
    
    setFormState([{
      ...formState,
      formData
    }])
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {<AnswersList formState={formState} />}
      </section>
      <section className="survey__form">
        {
          <SurveyForm
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            updateState={updateState}
          />
        }
      </section>
    </main>
  );
}

export default Survey;
