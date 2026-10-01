import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  max-weight: 100%;
  display: flex;
`;

export const CreditCardSection = styled.div`
  width: 100%;
  max-width: 50%;
  min-height: 100vh;
  background-color: #3b4b69;
`;

export const CreditCardHeading = styled.h1`
  color: white;
  font-size: clamp(1.3rem, 2vw, 3rem);
  padding: 1.5rem;
  text-transform: uppercase;
  text-align: center;
`;

export const CreditCardBackgroundContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CreditCardBackground = styled.div`
  margin-top: 25%;
  width: 100%;
  max-width: 350px;
  background-image: url("https://assets.ccbp.in/frontend/hooks/credit-card-bg.png");
  background-size: cover;
  background-position: center;
  height: 250px;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const AccountNumberValue = styled.p`
  color: #ffffff;
  font-size: clamp(1rem, 2vw, 1.5rem);
  letter-spacing: 2px;
  margin-top: 80px;
  font-weight: 500;
  position: absolute;
  bottom: 150px;
`;

export const CardHolderNameTitle = styled.p`
  color: #ffffff;
  font-size: clamp(0.8rem, 1.5vw, 1.2rem);
  font-weight: 400;
  position: absolute;
  bottom: 60px;
`;

export const CardHolderNameValue = styled.p`
  color: #ffffff;
  font-size: clamp(0.8rem, 1.5vw, 1.2rem);
  font-weight: 450;
  text-transform: uppercase;
  position: absolute;
  bottom: 20px;
`;
export const PaymentMethodInputContainer = styled.div`
  width: 100%;
  max-width: 50%;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const InputFormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

export const FormHeading = styled.h1`
  font-size: clamp(1rem, 2vw, 2rem);
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 600;
  color: #475569;
`;

export const CardNumberInputContainer = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const CardNumberUserInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 1rem 1.5rem;
  font-size: clamp(0.8rem, 1vw, 1.2rem);
  border: 1px solid #d3d9e0;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  &:focus {
    border-color: #3b82f6;
  }
`;

export const CardHolderInputContainer = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const CardHolderUserInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 1rem 1.5rem;
  font-size: clamp(0.8rem, 1vw, 1.2rem);
  border: 1px solid #d3d9e0;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  &:focus {
    border-color: #3b82f6;
  }
`;
