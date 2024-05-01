/* eslint-disable react/prop-types */
export default function Checkboxes({updateFormData, formData}) {
  return (
    <ul>
      <li>
        <label>
          <input name="spend-time" type="checkbox" value="swimming" onChange={(event) => updateFormData(event)} checked={formData.name} />
          Swimming
        </label>
      </li>
      <li>
        <label>
          <input name="spend-time" type="checkbox" value="bathing" onChange={(event) => updateFormData(event)} checked={formData.name}/>
          Bathing
        </label>
      </li>
      <li>
        <label>
          <input name="spend-time" type="checkbox" value="chatting" onChange={(event) => updateFormData(event)} checked={formData.name}/>
          Chatting
        </label>
      </li>
      <li>
        <label>
            <input name="spend-time" type="checkbox" value="noTime" onChange={(event) => updateFormData(event)} checked={formData.name}/>
            I don't like to spend time with it
        </label>
      </li>
    </ul>
  );
}
