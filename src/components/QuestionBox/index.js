import styled from 'styled-components';

import ActionButtons from '../ActionButtons';
import Body from '../Body';
import Desc from '../Desc';
import Title from '../Title';

function QusetionBox({ question, questionsLength, step, answer, setAnswer }) {
  return (
    <QusetionBoxWrapper>
      <Title> {question.title} </Title>
      <Desc> {question.desc} </Desc>
      <Body
        type={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.options}
      />
      <ActionButtons questionsLength={questionsLength} step={step} />
    </QusetionBoxWrapper>
  );
}

const QusetionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default QusetionBox;
