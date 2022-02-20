import React from 'react';

export const ColorfullMessage2 = (props) => {
  const { color, children } = props;
  const contentStyle = {
    // color: color,
    color, // 省略
    fontSize: '18px'
  };

  return (
    <>
      <p style={ contentStyle }>{ children }</p>
    </>
  );
}

