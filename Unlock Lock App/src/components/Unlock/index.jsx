
import {
  BgContainer,
  MainContent,
  ToggleImage,
  Message,
  Button,
} from "./styledComponents";
import { useState } from "react";

const Unlock = () => {
  const [isLocked, isSetLocked] = useState(true);
  console.log(isLocked);
  const toggleLock = () => {
    isSetLocked((prevState) => !prevState);
  };

  const lockImage = "https://assets.ccbp.in/frontend/hooks/lock-img.png";
  const unlockImage = "https://assets.ccbp.in/frontend/hooks/unlock-img.png";

  return (
    <BgContainer>
      <MainContent>
        <ToggleImage
          src={isLocked ? lockImage : unlockImage}
          alt={isLocked ? "lock" : "unlock"}
        />
        <Message>
          {isLocked ? "Your Device is Locked" : "Your Device is Unlocked"}
        </Message>
        <Button onClick={toggleLock}>{isLocked ? "Unlock" : "Lock"}</Button>
      </MainContent>
    </BgContainer>
  );
};

export default Unlock;
