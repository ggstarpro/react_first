import styled from "styled-components";
import React, { useContext } from "react";
import { userContext } from "../../../providers/UserProvider";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  const context = useContext( userContext );
  console.log(context);
  const { userInfo } = useContext(userContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <Scontainer>
        <Simage
          height={160}
          width={160}
          alt={name}
          src={image}
        />
        <SName>名前</SName>
        { isAdmin && <button>編集</button>}
    </Scontainer>
  );
};

const Scontainer = styled.div`
  text-align: center;
`;
const Simage = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;