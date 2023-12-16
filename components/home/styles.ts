import styled from 'styled-components';
import * as colors from '../../global/colors';

export const IsNotAuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: auto;
  width: 100%;
  height: 100%;
`;

export const ProjectDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
`;

export const ProjectName = styled.div`
  font-family: 'Chango', sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
  user-select: none;
`;

export const ProjectSlogan = styled.div`
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.1rem;
  text-align: center;
  text-transform: capitalize;
  user-select: none;
`;

export const ButtonContainer = styled.div`
  margin-top: 1.5rem;
`;

export const IsAuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  position: relative;

  overflow: auto;
  width: 100%;
`;

export const ImageContainer = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  overflow: hidden;

  @media (max-width: 575px) {
    height: 200px;
    width: 200px;
  }
`;

export const Intro = styled.div`
  font-size: 1rem;
  margin-top: 1.5rem;
`;

export const FullName = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;

  @media (max-width: 575px) {
    font-size: 1.1rem;
  }
`;

export const UsageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  width: 100%;
  margin-top: 1.5rem;
`;

export const Usage = styled.div`
  width: 100px;
  font-size: 1.1rem;
  padding: 5px;
  color: ${colors.TEXT_REDUCED_OPACITY};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UsageParam = styled.div`
  font-size: 2.1rem;
  font-weight: bold;
  color: black;

  @media (max-width: 575px) {
    font-size: 1.8rem;
  }
`;
