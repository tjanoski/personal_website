import React, {useEffect, useState} from 'react';
import {useKeyPress} from './hooks/ButtonCaptureHook'
import {SCREEN_NAMES} from './ScreenSelectorConsts'

import Main_Screen from "./screens/Main_Screen";
import Welcome_Screen from './screens/Welcome_Screen';
import Leave_Screen from "./screens/Leave_Screen";
import Game_Screen from "./screens/Game_Screen";

export default function Screen_Selector(){
    const [currentScreen, setCurrentScreen] = useState<SCREEN_NAMES>(SCREEN_NAMES.WELCOME_SCREEN);
    const pressedY = useKeyPress("y")
    const pressedN = useKeyPress("n")
    const pressedTilda = useKeyPress("`")

    useEffect(() => {
        if(pressedTilda){
            setCurrentScreen(SCREEN_NAMES.WELCOME_SCREEN)
        }
        if(currentScreen == 0){
            if(pressedY){
                setCurrentScreen(SCREEN_NAMES.MAIN_CONSOLE)
            }
            if(pressedN){
                setCurrentScreen(SCREEN_NAMES.LEAVE_SCREEN)
            }
        }
    }, [pressedN, pressedY, pressedTilda])

    if (currentScreen == SCREEN_NAMES.WELCOME_SCREEN) {
        return <Welcome_Screen />;
    }

    if (currentScreen == SCREEN_NAMES.LEAVE_SCREEN) {
        return <Leave_Screen />;
    }

    if (currentScreen == SCREEN_NAMES.MAIN_CONSOLE) {
        return <Main_Screen setCurrentScreen={setCurrentScreen} />;
    }

    if (currentScreen == SCREEN_NAMES.IDLE_GAME) {
        return <Game_Screen />
    }

    return (<div />)
}