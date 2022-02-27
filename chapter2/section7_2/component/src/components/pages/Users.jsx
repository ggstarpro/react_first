import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisums/user/UserCard";
import { useLocation } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton"
import { useContext } from "react";
import { userContext } from "../../providers/UserProvider";
const users = [...Array(10).keys()].map((val)=>{
  return {
    id: val,
    name: `test${val}`,
    image: "https://images.unsplash.com/photo-1628428804685-f63a8f9b9e31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    email: 'test11@example.com',
    phone: "090-1234-1234",
    company: {
      name: "テスト株式会社",
    },
    website: "https:google.com",
  }
});

export const Users = () => {
  // const { state } = useLocation();
  // const isAdmin = state ? state.isAdmin : false;
  const { userInfo, setUserInfo } = useContext(userContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  const onClickSwitch = () => setUserInfo({ isAdmin: !isAdmin });

  return (
    <Scontainer>
      <h2>ユーザ一覧</h2>
      <SearchInput />
      {/* state再レンダリング */}
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>

      <SuserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} isAdmin={isAdmin} />
        ))}
      </SuserArea>
    </Scontainer>
  );
};


const Scontainer = styled.div`
  display: flex;
  flex-derection: column;
  aligin-items: center;
  padding: 24px;
`;

const SuserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`