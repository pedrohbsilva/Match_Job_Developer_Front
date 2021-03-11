import styled from 'styled-components';

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: var(--white);
  margin: 8px;
  width: 220px;
  height: 300px;
  border-radius: 8px;
  box-shadow: 0 0 3px 0px var(--blueViolet);
  transition: 0.5s;
  margin-top: 70px;

  &:hover {
    box-shadow: 0 0 7px 1px var(--blueViolet);
  }
`;

export const ImgCard = styled.img`
  border-radius: 50%;
  border: 2px solid var(--blueViolet);
  margin-top: -60px;
  height: 100px;
`;

export const NameCard = styled.h6`
  font-size: 12px;
`;

export const TextCard = styled.h6`
  font-size: 10px;
`;

export const FooterCard = styled.footer`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  background: var(--lightGrey);
  border-top: 1px solid var(--blueViolet);
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const FooterCardItems = styled.div`
  border: 1px solid var(--grey);
  padding: 4px;
  margin: 4px;
  transition: 0.4s;
  border-radius: 4px;

  &:hover {
    box-shadow: 0 0 5px 1px var(--black);
  }
`;

export const FooterCardText = styled.h6`
  font-size: 10px;
`;
