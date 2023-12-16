/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import * as colors from '../../global/colors';

export const TableHeader = styled.th`
  text-align: center;
  vertical-align: middle;
  font-size: 0.9rem;
`;

export const TableData = styled.td`
  text-align: center;
  vertical-align: middle;
`;

export const Name = styled.div`
  font-size: 1rem;
  color: black;

  @media (max-width: 575px) {
    font-size: 0.8rem;
  }
`;

export const Organization = styled.div`
  color: ${colors.TEXT_REDUCED_OPACITY};

  @media (max-width: 575px) {
    font-size: 0.8rem;
  }
`;
