import NewTopicForm from "../../components/NewTopicForm";
import {useSelector} from 'react-redux';
import { Link, useParams } from "react-router-dom";
import ROUTES from "../../app/routes";
import {selectQuiz} from '../quizzes/quizzesSlice.js';
import {selectTopics} from '../topics/topicsSlice.js';

export default function Topic() {
  const topics = useSelector(selectTopics);
  const quizzes = useSelector(selectQuiz);
  let { topicId } = useParams();
  const topic = topics[topicId];
  const quizzesForTopic = topic.quizIds.map((quizId) => quizzes[quizId]);

  return (
    <section className='center'>
      <img src={topic.icon} alt="" className="topic-icon" />
      <h1>Topic: {topic.name}</h1>
      <ul className="quizzes-list">
        {quizzesForTopic.map((quiz) => (
          <li className="quiz" key={quiz.id}>
            <Link to={ROUTES.quizRoute(quiz.id)}>{quiz.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/quizzes/new" className="button">
        Create a New Quiz
      </Link>
    </section>
  );
}
