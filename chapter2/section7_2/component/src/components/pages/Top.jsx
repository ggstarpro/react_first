import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useHistory} from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../providers/UserProvider";

export const Top = () => {
  const history = useHistory();
  const { setUserInfo } = useContext(userContext);

  const onClickAdmin = () => {
    setUserInfo({isAdmin: true});
    history.push("/users");
    // "{pathname: "/users", state:{isAdmin: true }}
  }
  const onClickGeneral = () => {
    setUserInfo({isAdmin: false});
    history.push("/users");
  }
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
