import styled from 'styled-components';

interface SpinnerProps {
  width: number;
  height: number;
}

const Spinner = styled.div.attrs<SpinnerProps>(
  ({ width = 18, height = 18 }) => ({
    width: `${width}px`,
    height: `${height}px`,
  }),
)<SpinnerProps>`
  display: inline-block;
  box-sizing: border-box;
  border: solid 2px transparent;
  border-radius: 50%;
  border-top-color: yellow;
  border-left-color: yellow;
  animation: spinner 400ms linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
