import { useState } from "react";
import {
  AccountNumberValue,
  CardHolderInputContainer,
  CardHolderNameTitle,
  CardHolderNameValue,
  CardHolderUserInput,
  CardNumberInputContainer,
  CardNumberUserInput,
  Container,
  CreditCardBackground,
  CreditCardBackgroundContainer,
  CreditCardHeading,
  CreditCardSection,
  FormHeading,
  InputFormContainer,
  PaymentMethodInputContainer,
} from "./styledComponents";

const CreditCard = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");

  return (
    <>
      <Container>
        <CreditCardSection>
          <CreditCardHeading>Credit Card</CreditCardHeading>
          <CreditCardBackgroundContainer>
            <CreditCardBackground data-testid="creditCard">
              <AccountNumberValue>{accountNumber}</AccountNumberValue>
              <CardHolderNameTitle>CARDHOLDER NAME</CardHolderNameTitle>
              <CardHolderNameValue>{cardHolderName}</CardHolderNameValue>
            </CreditCardBackground>
          </CreditCardBackgroundContainer>
        </CreditCardSection>

        <PaymentMethodInputContainer>
          <InputFormContainer>
            <FormHeading>Payment Method</FormHeading>
            <CardNumberInputContainer>
              <CardNumberUserInput
                type="text"
                onChange={(event) => {
                  setAccountNumber(event.target.value);
                }}
                placeholder="Enter Your Card Number here..."
                value={accountNumber}
              />
            </CardNumberInputContainer>
            <CardHolderInputContainer>
              <CardHolderUserInput
                type="text"
                onChange={(event) => {
                  setCardHolderName(event.target.value);
                }}
                placeholder="Cardholder Name"
                value={cardHolderName}
              />
            </CardHolderInputContainer>
          </InputFormContainer>
        </PaymentMethodInputContainer>
      </Container>
    </>
  );
};

export default CreditCard;
