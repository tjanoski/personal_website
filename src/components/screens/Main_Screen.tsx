import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import styled from '@emotion/styled';
import { keyframes } from "@emotion/react";
import InputUnstyled from '@mui/base/InputUnstyled';
import {useKeyPress} from "../hooks/ButtonCaptureHook";
import {TextType, TextOutput, SCREEN_NAMES} from "../ScreenSelectorConsts";
import PDF from '../../assets/sample.pdf'

const Welcome_Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: lawngreen;
  padding: 20px;
  padding-left: 50px;
  padding-right: 50px;
  overflow: scroll;
`;

const blinkAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: unset;
  }
`;

const Blinker = styled.span`
  animation: ${blinkAnimation} 1s steps(2) infinite;
  opacity: 100%;
`

const EnteredLine = styled.div`
  width: 100%;
  left-padding: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 36px;
`
const ConsoleLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 24px;
`

const StyledInputElement = styled.input`
  width: 100%;
  flex-grow: 1;
  outline: none;
  font-family: 'digitalist';
  font-size: inherit;
  background-color: black;
  color: lawngreen;
  text-decoration: none;
  box-shadow: none;
  border: none;
  overflow: visible;
  padding: 0;
  `

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Header = styled.div`
  font-size: 80px;
  font-family: DigitalistItalic;
`

const CustomInput = React.forwardRef(function CustomInput(
    props: any,
    ref: React.ForwardedRef<HTMLDivElement>,
) {
    return (
        <InputUnstyled slots={{ input: StyledInputElement, textArea: { maxWidth: '100%'} }} {...props} ref={ref} />
    );
});

interface IProps {
    setCurrentScreen: Dispatch<SetStateAction<SCREEN_NAMES>>;
}
export default function Main_Screen({
    setCurrentScreen
}: IProps){
    const [enteredUserInput, setEnteredUserInput] = useState<TextOutput[]>([])
    const [userInput, setUserInput] = useState<string>('')
    const [userInputLock, setUserInputLock] = useState<boolean>(false)
    const [yesCallback, setYesCallback] = useState(() => () => console.log('callback ran'))
    const pressedEnter = useKeyPress(13)
    const pressedY = useKeyPress('y')
    const pressedN = useKeyPress('n')

    const parseCommand = (command: string) => {
        command = command.toLowerCase()
        if (command == 'clear') {
            setEnteredUserInput([]);
        } else if (command == 'help') {
            const msg = 'Available Commands: HELP CLEAR PLAY RESUME'
            setEnteredUserInput(previous => previous.concat([{text: msg, type: TextType.CONSOLE_OUTPUT}]))
        } else if (command == 'play') {
            setCurrentScreen(SCREEN_NAMES.IDLE_GAME)
        } else if (command == 'resume') {
            setUserInputLock(true)
            const msg = 'This will open a new window, proceed? (y/n)'
            setEnteredUserInput(previous => previous.concat([{text: msg, type: TextType.CONSOLE_OUTPUT}]))
            setYesCallback(() => () =>  window.open(PDF))
        } else {
            const CMDS = 'Unrecognized command: Type HELP for list of available commands'
            setEnteredUserInput(previous => previous.concat([{text: CMDS, type: TextType.CONSOLE_OUTPUT}]))
        }
    }

    const textOutputSelector = (output: TextOutput) => {
        if(output.type == TextType.USER_COMMAND) return (<EnteredLine>*&#62;&nbsp;{output.text} <br /></EnteredLine>);
        if(output.type == TextType.CONSOLE_OUTPUT) return (<ConsoleLine>{output.text} <br /></ConsoleLine>)
    }
    const enterLine = () => {
        const command = userInput
        setEnteredUserInput(previous => previous.concat({text: command, type: TextType.USER_COMMAND}))
        setUserInput('')
        parseCommand(command)
    }
    useEffect(() => {
        if(pressedEnter && userInput !== ''){
            enterLine();
        }
        if(userInputLock){
            if(pressedY){
                yesCallback()
                setUserInputLock(false)
                setYesCallback(() => console.log('nothing sandwich'))
            } else if (pressedN){
                setUserInputLock(false)
            }
        }
    }, [pressedEnter, pressedY, pressedN])

    const handleInputChange = (e: any) => {
        setUserInput(e.target.value)
    }

    return (
        <Welcome_Container>
            <HeaderContainer>
                <Header>
                    T-Terminal
                </Header>
            </HeaderContainer>
            {enteredUserInput.map((output) => {
                return textOutputSelector(output)
            })}
            {!userInputLock &&
                <EnteredLine>
                        <Blinker>
                            *&#62;&nbsp;
                        </Blinker>
                        <CustomInput autoFocus={true} disabled={userInputLock}
                        onChange={handleInputChange}
                        value={userInput}
                        style={{width: '100%'}}
                        />
                </EnteredLine>
            }
        </Welcome_Container>
    )
}