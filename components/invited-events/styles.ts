import { Button } from 'reactstrap';
import styled from 'styled-components';
import * as colors from '../../global/colors';

interface ExpandProps {
  open: boolean;
}

export const Heading = styled.th`
  font-weight: bold;
`;

export const Date = styled.span`
  white-space: nowrap;
`;

export const TimeHeading = styled.th`
  @media (max-width: 575px) {
    display: none;
  }
`;

export const ExpandHeading = styled.th`
  @media (min-width: 576px) {
    display: none;
  }
`;

export const Timings = styled.td`
  @media (max-width: 575px) {
    display: none;
  }
`;

export const Time = styled.span`
  white-space: nowrap;
  color: ${colors.TEXT_REDUCED_OPACITY};
`;

export const Expand = styled.td`
  @media (min-width: 576px) {
    display: none;
  }
`;

export const ExpandButton = styled(Button)<ExpandProps>`
  svg {
    path {
      transition: all 0.1s ease;
      transform-origin: center;
      ${(props) =>
        props.open ? 'transform: rotate(180deg);' : 'transform: rotate(0deg);'}
    }
  }
`;

export const Expanded = styled.tr<ExpandProps>`
  ${(props) => (props.open ? 'display: table-row;' : 'display: none;')}

  @media (min-width: 576px) {
    display: none;
  }
`;
