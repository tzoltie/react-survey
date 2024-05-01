/* eslint-disable react/prop-types */
import Checkboxes from "./Checkboxes";
import RadioComponents from "./RadioComponents";

export default function SurveyForm({
  formData,
  setFormData,
  handleSubmit,
  updateState
}) {
  const updateFormData = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
      console.log("checkbox clicked")
      return;
    }
    if (type === "radio") {
      setFormData({
        ...formData,
        selectedRadioOption: value,
      });
      console.log("radio clicked")
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <RadioComponents updateFormData={updateFormData} formData={formData}/>
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <Checkboxes updateFormData={updateFormData} formData={formData} />
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          value={formData.review}
          onChange={(event) => updateFormData(event)}
        ></textarea>
      </label>
      <label>
        Put your name here (if you feel like it:)
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={(event) => updateFormData(event)}
        />
      </label>
      <label>
        Leave us your email pretty please??
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(event) => updateFormData(event)}
        />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}
