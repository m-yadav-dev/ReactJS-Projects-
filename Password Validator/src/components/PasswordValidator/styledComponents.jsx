import styled from "styled-components";

export const Container = styled.div`
  background-color: #24263c;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  background-color: #434451;
  width: 100%;
  max-width: 500px;
  padding: 40px 60px;
  border-radius: 8px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Heading = styled.h1`
  color: #ffffff;
  font-size: clamp(1rem, 3vw, 2rem);
  margin: 20px 0 10px 0;
  font-weight: 600;
  font-family: 'Roboto';
`;

export const PasswordValidatorDescription = styled.p`
  color: #ffffff;
  font-size: clamp(0.8rem, 0.9vw, 1.2rem);
  margin: 20px 0 0 0;
  font-weight: 450;
`;



export const PasswordValidatorForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 20px;
`


export const PasswordInput = styled.input`
    width: 100%;
    max-width: 650px;
    padding: 12px 16px;
    border: none; 
    outline : none;
    border-radius: 4px;
    font-size: clamp(0.8rem, 1.7vw, 1.2rem);
    margin: 10px 15px;

    &:focus {
        outline: 2px solid #4164ffff;
    }
    
    &::placeholder {
        font-size: clamp(0.8rem, 1.1vw, 1rem);
        font-weight: 400;
    }
`

export const Message = styled.p`
    font-size: clamp(0.7rem, 1.2vw, 1rem);
    color: #ff5454ff; 
    margin: 10px 0 10px 0;
`


