import styled from "styled-components";

type Props = {
  isRunning: boolean;
};

export const Container = styled.div<Props>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.isRunning ? "#ff6f00" : "#add5ff")};
  color: ${(props) => (props.isRunning ? "#fff" : "#000")};
`;

export const Number = styled.span`
  font-size: 15rem;
  font-weight: bold;
`;

export const Seconds = styled.span`
  font-size: 2.5rem;
  font-weight: 400;
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  bottom: 0;
  position: absolute;
`;

export const Total = styled.div`
  font-size: 1.5rem;
`;
