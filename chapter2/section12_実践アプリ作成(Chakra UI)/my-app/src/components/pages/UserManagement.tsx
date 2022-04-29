import { Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { UserCard } from "../organisums/user/UserCard";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }} spacing="30px">
      <WrapItem>
        <UserCard imageUrl="https://source.unsplash.com/random" userName="ああ" fullName="フルネーム"/>
      </WrapItem>
    </Wrap>
  );
});