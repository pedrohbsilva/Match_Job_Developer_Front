import styled from 'styled-components';

export default styled.div`
  background-image: linear-gradient(
    -90deg,
    var(--lightWhite) 0%,
    var(--mediumGrey) 50%,
    var(--lightWhite) 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1s infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
