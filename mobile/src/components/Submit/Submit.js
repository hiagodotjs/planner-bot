import React from 'react';

import {SubmitBtnStyled, BtnText} from './Styles';

const Submit = props => {
  return (
    <SubmitBtnStyled onPress={() => props.execute()}>
      <BtnText>{props.text}</BtnText>
    </SubmitBtnStyled>
  );
};

export default Submit;
