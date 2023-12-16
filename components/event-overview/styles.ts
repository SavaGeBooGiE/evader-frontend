import styled from 'styled-components';
import { Col } from 'reactstrap';
import * as colors from '../../global/colors';

export const Column = styled(Col)`
  padding: 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  background-color: #fff;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

export const LocationIcon = styled.td`
  svg {
    color: ${colors.INFO};
  }
`;

export const CalendarIcon = styled.td`
  svg {
    color: ${colors.DANGER};
  }
`;

export const PictureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 150px;
  width: 150px;
  border-radius: 50%;
  background-color: #e6e6e6;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const Name = styled.h5`
  text-transform: capitalize;
  text-align: center;
  margin-top: 0.5rem;
`;

export const Description = styled.p`
  text-align: center;
  width: 75%;
`;

export const CurrentStatus = styled.div`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const ModifyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  button {
    margin: 0.2rem;
  }
`;
