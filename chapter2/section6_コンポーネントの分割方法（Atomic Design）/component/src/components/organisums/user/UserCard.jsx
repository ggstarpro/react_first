import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  const { user } = props;

  return (
    <Card>
      <div>
        <UserIconWithName image={user.image} />
        <SDL>
          <dt>メール</dt>
          <dd>{user.email}</dd>

          <dt>TEL</dt>
          <dd>{user.phone}</dd>


          <dt>会社名</dt>
          <dd>{user.company.name}</dd>


          <dt>Web</dt>
          <dd>{user.website}</dd>
        </SDL>
      </div>
    </Card>
  );
};

const SDL = styled.dl`
  text-aligin: left;
  margin-bottom: 0px;

  dt {
    float: left;
  }

  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;