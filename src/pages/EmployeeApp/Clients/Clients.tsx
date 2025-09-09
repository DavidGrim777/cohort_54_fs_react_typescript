import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

import { PageWrapper, ButtonControl, Title } from "./styles";


function Clients() {
  const navigate = useNavigate();

  const goToFacebook = () => {
    navigate("/clients/facebook");
  };

  const goToIstagram = () => {
    navigate("/clients/instagram");
  };

    const goToLinkedIn = () => {
    navigate("/clients/linkedIn");
  };

  return (
    <PageWrapper>
      <Title>Clients</Title>
      <ButtonControl>
        <Button onClick={goToFacebook} name="Facebook" />
      </ButtonControl>
      <ButtonControl>
        <Button onClick={goToIstagram} name="Istagram" />
      </ButtonControl>
      <ButtonControl>
        <Button onClick={goToLinkedIn} name="LinkedIn" />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Clients;