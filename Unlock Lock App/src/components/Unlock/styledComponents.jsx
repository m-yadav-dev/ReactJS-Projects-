import styled from "styled-components";

export const BgContainer = styled.div`
  background-image: linear-gradient(to bottom, #161617, #3c2940);
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

export const MainContent = styled.div`
  text-align: center;
  color: #ffffff;
`;

export const ToggleImage = styled.img`
  width: 100%;
  height: 400px;
  max-width: 400px;
  margin-bottom: 20px;
`;

export const Message = styled.p`
  font-size: clamp(1rem, 1.7vw, 1.5rem);
  font-weight: 500;
  margin-bottom: 20px;
  font-family: "Roboto";
`;

export const Button = styled.button`
  height: 60px;
  width: 150px;
  background-color: #9bfcff;
  border: none;
  border-radius: 8px;
  font-weight: 650;
  cursor: pointer;
  margin-top: 40px;
  font-weight: 1rem;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    background-color: #4fc6ca;
    transform: scale(1.1);
  }
`;
