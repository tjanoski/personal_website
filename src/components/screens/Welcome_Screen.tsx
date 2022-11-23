import React, {useState} from 'react';
import styled from '@emotion/styled';
import { TypeAnimation } from 'react-type-animation';

const Welcome_Text = styled.h1`
  color: lawngreen;
  font-weight: 100;
  font-family: "Digitalist";
  padding: 20%;
`;

const Welcome_Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Screen_Selector(){

    return (
        <Welcome_Container>
            <Welcome_Text>
                <TypeAnimation
                    sequence={[
                        'Hi There', // Types 'One'
                        3000, // Waits 1s
                        'Would you like to continue? (y/n)',
                        () => {
                            console.log('Done typing!'); // Place optional callbacks anywhere in the array
                        }
                    ]}
                    speed={10}
                    deletionSpeed={80}
                    cursor={true}
                    style={{ fontSize: '1em' }}
                />
            </Welcome_Text>
        </Welcome_Container>
    )
}