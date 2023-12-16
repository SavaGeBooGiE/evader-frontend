import styled from 'styled-components';
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardFooter,
  Button,
} from 'reactstrap';
import * as colors from '../../global/colors';

interface StatusProps {
  status: number;
}

export const CardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  padding-top: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  height: 100%;
`;

export const Image = styled(CardImg)`
  height: 150px;
  width: 150px;
  overflow: hidden;
  background-color: #e6e6e6;
  border-radius: 50%;
`;

export const Title = styled(CardTitle)`
  text-align: center;
`;

export const Text = styled(CardText)`
  text-align: center;
  color: ${colors.INFO};
`;

export const Footer = styled(CardFooter)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatusText = styled.h6<StatusProps>`
  text-transform: uppercase;
  ${(props) => {
    switch (props.status) {
      case 0:
        return `color: ${colors.BG_PRIMARY};`;
      case 1:
        return `color: ${colors.SUCCESS};`;
      default:
        return `color: ${colors.DANGER};`;
    }
  }}
`;

export const DeleteButton = styled(Button)`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 30;
`;
