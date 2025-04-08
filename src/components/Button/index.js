import styled from 'styled-components';

import { PRIMARY, SECONDARY, TERIARY } from '../../constants/color';

const colorMap = {
  PRIMARY,
  SECONDARY,
  TERIARY,
};

const Button = styled.button`
  padding: 16px 24px;
  min-width: 200px;

  color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.COLOR};
  background: ${({ type }) => colorMap[type].BUTTON.DEFAULT.BACKGROUND};
  border-radius: 4px;
  border: none;
  font-weight: bold;
  font-size: 18px;
  border: ${({ type }) =>
    type === 'TERIARY' ? `1px solid ${TERIARY.BUTTON.DEFAULT.BORDER}` : 'none'};

  &:hover {
    color: ${({ type }) => colorMap[type].BUTTON.HOVER.COLOR};
    background: ${({ type }) => colorMap[type].BUTTON.HOVER.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERIARY' ? `1px solid ${TERIARY.BUTTON.HOVER.BORDER}` : 'none'};
  }

  &:active {
    color: ${({ type }) => colorMap[type].BUTTON.PRESSED.COLOR};
    background: ${({ type }) => colorMap[type].BUTTON.PRESSED.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERIARY'
        ? `1px solid ${TERIARY.BUTTON.PRESSED.BORDER}`
        : 'none'};
  }

  &:disabled {
    color: ${({ type }) => colorMap[type].BUTTON.DISABLED.COLOR};
    background: ${({ type }) => colorMap[type].BUTTON.DISABLED.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERIARY'
        ? `1px solid ${TERIARY.BUTTON.DISABLED.BORDER}`
        : 'none'};
  }
`;

export default Button;
