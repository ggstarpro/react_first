import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <Scontainer>
        <Simage
          height={160}
          width={160}
          alt={name}
          src={image}
        />
        <SName>名前</SName>
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