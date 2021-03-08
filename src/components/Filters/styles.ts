import styled from 'styled-components';
import { FormControl } from '@material-ui/core';

export const ContainerFilter = styled.section`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 8px;
`;

export const ContainerFilterItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 8px;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    margin-top: 45px;
    justify-content: space-between;
  }
`;

export const FormControlFilter = styled(FormControl)`
  width: 200px;
`;

export const TextTitleFilter = styled.h1`
  margin: 8px;
  font-size: 30px;
  span {
    margin-right: 8px;
    color: var(--blueViolet);
    font-weight: bold;
  }
`;
