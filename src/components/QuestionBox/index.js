import styled from 'styled-components';

import useCurrentAnswer from '../../hooks/useCurrentAnswer';
import useCurrentQuestion from '../../hooks/useCurrentQuestion';
import ActionButtons from '../ActionButtons';
import Body from '../Body';
import Desc from '../Desc';
import Title from '../Title';

function QusetionBox() {
  const [answer, setAnswer] = useCurrentAnswer();
  const question = useCurrentQuestion(); //undefined

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
      <ActionButtons />
    </QusetionBoxWrapper>
  );
}
const QusetionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default QusetionBox;
