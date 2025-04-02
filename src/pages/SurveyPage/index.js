import React from 'react';
import styled from 'styled-components';

import Progressindicator from '../../components/Progressindicator';
import QusetionBox from '../../components/QuestionBox';

function SurveyPage() {
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <SurveyPageWrapper>
        <Progressindicator />
        <QusetionBox />
      </SurveyPageWrapper>
    </React.Suspense>
  );
}

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default SurveyPage;
