import React from 'react';
import styled from '@emotion/styled';
import Screen_Selector from "./Screen_Selector";

const Screen = styled.div`
  background-color: black;
  color: lawngreen;
  width: 80%;
  height: 80%;
`;
const Screen_Frame = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function TV() {
    return (
        <Screen_Frame>
            {/*<Screen>*/}
                <Screen_Selector />
            {/*</Screen>*/}
        </Screen_Frame>
    );
}