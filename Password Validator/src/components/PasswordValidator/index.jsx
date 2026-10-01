import { useState } from "react";
import {
  Container,
  FormContainer,
  Heading,
  PasswordValidatorDescription,
  PasswordValidatorForm,
  PasswordInput,
  Message,
} from "./styledComponents";

const PasswordValidator = () => {
  const [password, setPassword] = useState("");
  console.log(password);
  return (
    <>
      <Container>
        <FormContainer>
          <Heading>Password Validator</Heading>
          <PasswordValidatorDescription>
            Check the strength of your password and ensure it meets all security
            requirements.
            <PasswordValidatorForm>
              <PasswordInput
                type="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                value={password}
                placeholder="Enter Your Password here..."
              />
              <Message>
                {password.length < 8
                  ? "Your Password must be at least 8 characters"
                  : ""}
              </Message>
            </PasswordValidatorForm>
          </PasswordValidatorDescription>
        </FormContainer>
      </Container>
    </>
  );
};

export default PasswordValidator;
