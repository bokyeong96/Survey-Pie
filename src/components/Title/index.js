import styled from 'styled-components';

function Title({ children }) {
  return (
    <TitleWrapper>
      <span>Q.</span>
      {children}
    </TitleWrapper>
  );
}

const TitleWrapper = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-heighr: 28px;
  margin: 0;
  color: #121111;

  span {
    margin-right: 12px;
  }
`;

export default Title;
