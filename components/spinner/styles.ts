import styled, { keyframes } from 'styled-components';
import * as colors from '../../global/colors';

export const SpinnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InlineSpinnerContainer = styled.div`
  height: calc(100% - 113px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.div`
  font-size: 2rem;
  font-family: 'Chango', sans-serif;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border-top: 10px solid ${colors.SPIN_DARK};
  border-right: 10px solid ${colors.SPIN_LIGHT};
  border-left: 10px solid ${colors.SPIN_LIGHT};
  border-bottom: 10px solid ${colors.SPIN_LIGHT};

  animation: ${spin} 0.5s linear infinite;
`;

export const InlineSpinner = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border-top: 5px solid black;
  border-right: 5px solid rgba(black, 0.4);
  border-left: 5px solid rgba(black, 0.4);
  border-bottom: 5px solid rgba(black, 0.4);

  animation: ${spin} 0.5s linear infinite;
`;

export const Text = styled.div`
  margin-top: 15px;
  font-size: 1.2rem;
`;
