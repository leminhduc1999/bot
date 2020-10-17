import { AuthConstants } from '../constants/authConatant';

const initState = { };

export function authReducer(state = initState, action) {
    switch (action.type) {
        case AuthConstants.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case AuthConstants.LOGIN_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
            }
        
        case AuthConstants.LOGIN_FAILUER:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };

        default:
            return state
    }
}
