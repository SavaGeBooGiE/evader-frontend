/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Button } from 'reactstrap';

interface AddButtonProps {
  open: boolean;
}

export const AddButton = styled(Button)<AddButtonProps>`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 50;
  font-size: 1.1rem;

  svg {
    path {
      transition: all 0.1s ease;
      transform-origin: center;
      ${(props) =>
        props.open ? 'transform: rotate(45deg);' : 'transform: rotate(0deg);'}
    }
  }
`;
