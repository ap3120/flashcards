import { Link, useParams } from "react-router-dom";
import {useSelector} from 'react-redux';
import Card from "../cards/Card";
import ROUTES from "../../app/routes";
import {selectQuiz} from './quizzesSlice.js';

export default function Quiz() {
  const quizzes = useSelector(selectQuiz);
  let { quizId } = useParams();
  const quiz = quizzes[quizId];
    console.log(quizzes, quizId, quiz);
  return (
    <section className='center'>
      <h1>{quiz.name}</h1>
      <ul className="cards-list">
        {quiz.cardIds.map((id) => (
          <Card key={id} id={id} />
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button">
        Create a New Quiz
      </Link>
    </section>
  );
}
