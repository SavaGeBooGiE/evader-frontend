import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  font-size: 1.3rem;

  img {
    height: 400px;
  }

  div {
    font-weight: bold;
    letter-spacing: 0.1rem;
    opacity: 0.7;
  }
`;
