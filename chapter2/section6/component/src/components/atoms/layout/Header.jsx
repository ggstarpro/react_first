import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SLINK to="/">HOME</SLINK>
      <SLINK to="/users">USERS</SLINK>
    </SHeader>
  )
};

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

const SLINK = styled(Link)`
  margin: 0 8px;
`;
