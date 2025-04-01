import styled from 'styled-components';

import Progressindicator from '../../components/Progressindicator';
import QusetionBox from '../../components/QuestionBox';

function SurveyPage() {
  return (
    <SurveyPageWrapper>
      <Progressindicator />
      <QusetionBox />
    </SurveyPageWrapper>
  );
}

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default SurveyPage;
