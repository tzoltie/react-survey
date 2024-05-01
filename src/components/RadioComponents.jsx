/* eslint-disable react/prop-types */
export default function RadioComponents({formData, updateFormData}) {
    return (
        <ul>
            <li>
                <label htmlFor="colour-one">1</label><input id="color-one" type="radio" name="colour" value="1" onChange={() => console.log('HERE!!!!')} checked={formData.selectedRadioOption === '1'}/>
            </li>
            <li>
            <label htmlFor="colour-two"><input id="color-two" type="radio" name="colour" value="2" onChange={(event) => updateFormData(event)} checked={formData.selectedRadioOption === '2'}/>2</label>
            </li>
            <li>
            <label htmlFor="colour-three"><input id="color-three" type="radio" name="colour" value="3" onChange={(event) => updateFormData(event)} checked={formData.selectedRadioOption === '3'}/>3</label>
            </li>
            <li>
            <label htmlFor="colour-four"><input id="color-four" type="radio" name="colour" value="4" onChange={(event) => updateFormData(event)} checked={formData.selectedRadioOption === '4'}/>4</label>
            </li>
        </ul>
    )
}