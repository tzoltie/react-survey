/* eslint-disable react/prop-types */
export default function RadioComponents({ formData, updateFormData }) {
  return (
    <ul>
      <li>
        <label htmlFor="colour-one"><input
          id="colour-one"
          type="radio"
          name="colour"
          value="1"
          onChange={(event) => updateFormData(event)}
          checked={formData.duckColour === "1"}
        />1</label>
        
      </li>
      <li>
        <label htmlFor="colour-two">
          <input
            id="colour-two"
            type="radio"
            name="colour"
            value="2"
            onChange={(event) => updateFormData(event)}
            checked={formData.duckColour === "2"}
          />
          2
        </label>
      </li>
      <li>
        <label htmlFor="colour-three">
          <input
            id="colour-three"
            type="radio"
            name="colour"
            value="3"
            onChange={(event) => updateFormData(event)}
            checked={formData.duckColour === "3"}
          />
          3
        </label>
      </li>
      <li>
        <label htmlFor="colour-four">
          <input
            id="colour-four"
            type="radio"
            name="colour"
            value="4"
            onChange={(event) => updateFormData(event)}
            checked={formData.duckColour === "4"}
          />
          4
        </label>
      </li>
    </ul>
  );
}
