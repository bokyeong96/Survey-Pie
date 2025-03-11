import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Progressindicator from '../../components/Progressindicator';
import QusetionBox from '../../components/QuestionBox';

function SurveyPage() {
  const params = useParams();
  console.log('params', params);

  const questions = [
    {
      title: '질문1 입니다.',
      desc: '설명1 입니다. ',
      type: 'text',
      required: false,
      options: {},
    },
    {
      title: '질문2 입니다.',
      desc: '설명2 입니다. ',
      type: 'text',
      required: true,
      options: {},
    },
  ];

  const step = parseInt(params.step);

  const [answers, setAnswers] = useState([]);

  return (
    <div>
      <Progressindicator />
      <QusetionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answers={answers[step]}
        setAnswer={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
            return newAnswers;
          });
        }}
      />
    </div>
  );
}

export default SurveyPage;
