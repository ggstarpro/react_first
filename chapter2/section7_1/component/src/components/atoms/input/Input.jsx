import styled from "styled-components";

export const Input = (props) => {
  const { placeholder = "" } = props;
  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
  paddinng: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`;