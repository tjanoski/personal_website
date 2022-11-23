import React, {useState} from 'react';
import styled from '@emotion/styled';
import { TypeAnimation } from 'react-type-animation';

const Welcome_Text = styled.h1`
  color: lawngreen;
  font-weight: 100;
  font-family: "Digitalist";
`;

const Welcome_Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Game_Screen(){
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    return (
        <Welcome_Container>
            <Welcome_Text>
                <TypeAnimation
                    sequence={[
                        'CRYPTO_CRASH',
                        3000,
                        () => {
                            setIsPlaying(true)
                        }
                    ]}
                    speed={10}
                    deletionSpeed={80}
                    cursor={true}
                    style={{ fontSize: '1em' }}
                />
                {isPlaying &&
                    <Welcome_Text> Currently In development </Welcome_Text>
                }
            </Welcome_Text>

        </Welcome_Container>
    )
}