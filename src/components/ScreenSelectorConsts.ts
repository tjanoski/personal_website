export enum SCREEN_NAMES {
    'WELCOME_SCREEN',
    'LEAVE_SCREEN',
    'MAIN_CONSOLE',
    'IDLE_GAME',
}

export enum TextType {
    USER_COMMAND,
    CONSOLE_OUTPUT
}

export interface TextOutput {
    type: TextType,
    text: string
}