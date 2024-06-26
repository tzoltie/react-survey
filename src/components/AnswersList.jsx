/* eslint-disable react/prop-types */
import AnswersItem from "./AnswersItem";

export default function AnswersList({formState}) {

  return (
    <ul>
      {formState.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}
