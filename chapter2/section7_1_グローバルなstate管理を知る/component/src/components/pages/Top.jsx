import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useHistory} from "react-router-dom";

export const Top = () => {
  const history = useHistory();

  const onClickAdmin = () => history.push({pathname: "/users", state:{isAdmin: true }});
  const onClickGeneral = () => history.push({pathname: "/users", state:{isAdmin: false }});
  return (
    <Scontainer>
      <h2>Topページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザ</SecondaryButton>
      <br />
      <br />

      <SecondaryButton onClick={onClickGeneral}>ユーザ</SecondaryButton>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  text-align: center:
`;
