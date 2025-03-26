import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';

function App() {
  return (
    <div className="App">
      <AppWrapper>
        <Box>
          <Routes>
            <Route path="/done" element={<CompletionPage />} />
            <Route path="/survey/:surveyId/:step" element={<SurveyPage />} />
          </Routes>
        </Box>
      </AppWrapper>
    </div>
  );
}

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
`;

const Box = styled.div`
  width: 700px;
  min-height: 500px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.7);
  border-radius: 16px;
  padding: 60px;
  display: flex;
  box-sizing: border-box;
`;

export default App;
