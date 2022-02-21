/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

export const Emotion = () => {
  // 方法1
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  // 方法2
  const titleStyle = css({
    margin: "0",
    color: "#3d84a8",
  });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>Emotion</p>
      <SButton>test</SButton>
    </div>
  );
};

// 方法3
const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;

/**
 * npm i @emotion/react
 * npm i @emotion/styled
 */