import styled from 'styled-components';

export const ContainerCardLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: var(--white);
  margin: 8px;
  width: 220px;
  height: 300px;
  border-radius: 8px;
  transition: 0.5s;
  margin-top: 70px;
  border: 1px solid var(--blueViolet);
  .bg-skeleton {
    width: 100%;
    height: 70px;
    filter: brightness(96%);
  }
  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 220px;
    padding-bottom: 125px;
  }
  .avatar-skeleton {
    z-index: 1;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: -36px 0 10px;
    margin-top: -60px;
    border: 1px solid var(--blueViolet);
  }

  .row-skeleton {
    height: 12px;

    &:nth-child(2) {
      width: 60%;
    }
    &:nth-child(3) {
      width: 60%;
      margin-top: 10px;
    }
    &:nth-child(4) {
      width: 60%;
      margin-top: 10px;
    }
    &:nth-child(5) {
      width: 60%;
      margin-top: 10px;
    }
    &:nth-child(6) {
      width: 99%;
      margin-top: 20px;
      height: 150px;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
`;
