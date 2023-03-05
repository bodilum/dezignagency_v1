///////////// ACTIONS ////////////
export const MAINAPP_ACTIONS = {
    USER_SIGN_IN: 'user-sign-in',
    USER_LOG_OUT: 'user-log-out',
    USER_SIGN_UP: 'user-sign-up',
    USER_RECOVER_ACCOUNT: 'user-recover-account',
}

//////////////// REDUCER ////////////
export const mainAppReducer = (state, actions) => {
    switch (actions.type) {
        case MAINAPP_ACTIONS.USER_SIGN_UP:
            break;
        case MAINAPP_ACTIONS.USER_SIGN_IN:
            break;
        case MAINAPP_ACTIONS.USER_LOG_OUT:
            break;
        default:
            return state;
    }
}


/////////////// FUNCTIONS ////////////