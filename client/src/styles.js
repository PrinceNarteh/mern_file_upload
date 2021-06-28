import styled from "styled-components";

export const Button = styled.button`
  /* display: block; */
  border: 2px solid #349adb;
  padding: 1rem 5rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 5rem;
  cursor: pointer;
  color: #349adb;
  transition: all 0.3s;

  &:hover {
    background-color: #349adb;
    color: #fff;
  }
`;

export const Heading = styled.h3`
  font-size: 3rem;
  color: #349adb;
`;
