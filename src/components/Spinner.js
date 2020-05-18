import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #555;
  width: 50px;
  height: 50px;
  animation: ${rotate360} 2s linear infinite;
  position: absolute;
  top: 30%;
}
`;

export default Spinner;
