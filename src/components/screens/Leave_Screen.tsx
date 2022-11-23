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

export default function Leave_Screen(){
    return (
        <Welcome_Container>
            <Welcome_Text>
                <TypeAnimation
                    sequence={[
                        'Then Leave...',
                        3000,
                        'Get out of here...',
                        5000,
                        'Slow day at work huh?',
                        1000,
                        'Well, I can\'t help you with your boring life. So shoo',
                        5000,
                        'Seriosly, last message',
                        3000,
                        'Serio',
                        1000,
                        'Seriously, last message. Refresh to continue'
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