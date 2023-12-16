/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Button } from 'reactstrap';

interface AddButtonProps {
  open: boolean;
}

export const AddButton = styled(Button)<AddButtonProps>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 50;

  svg {
    path {
      transition: all 0.1s ease;
      transform-origin: center;
      ${(props) =>
        props.open ? 'transform: rotate(45deg);' : 'transform: rotate(0deg);'}
    }
  }
`;
