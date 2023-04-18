import React from 'react';
import { css } from '@emotion/react';
import { BeatLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loading = () => {
  return (
    <div className="sweet-loading">
      <BeatLoader css={override} size={15} margin={2} color={'#123abc'} loading={true} />
    </div>
  );
};


export default Loading;

