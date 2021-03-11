import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  @media only screen and (max-width: 700px) {
    height: auto;
  }
`;

export const ContainerCardBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
  flex-wrap: wrap;

  @media only screen and (max-width: 700px) {
    justify-content: center;
  }
`;

export const ContainerTextMessage = styled.h1`
  width: 100%;
  font-size: 28px;
  text-align: center;
  color: var(--blueViolet);
  font-weight: bold;
`;

export const TextStyle = styled.p`
  margin: 8px;
  font-size: 18px;
  span {
    margin-right: 8px;
    margin-left: 8px;
    color: var(--blueViolet);
    font-weight: bold;
  }
`;
