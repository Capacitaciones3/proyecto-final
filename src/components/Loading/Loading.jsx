import React from 'react';
import { BeatLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div>
      <BeatLoader size={50} margin={50} color={'#123abc'} loading={true} cssOverride={{display:'flex', justifyContent:'center', 
      alignItems:'center', height:'70vh'}}/>
    </div>
  );
};


export default Loading;

