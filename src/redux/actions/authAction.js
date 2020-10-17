import { AuthConstants } from "../constants/authConatant";
import { AuthService } from "../services/authService";

export const AuthActions = {
    test,
};

function test() {
    return dispatch => {
        dispatch({
            type: AuthConstants.LOGIN_REQUEST
        });
        AuthService.test()
            .then(res => {
                console.log("res res res res res: ", res);
                dispatch({
                    type: AuthConstants.LOGIN_SUCCESS,
                    payload: res
                })
            })
            .catch(err => {
                console.log('ERROR: ', err);
                dispatch({
                    type: AuthConstants.LOGIN_FAILUER,
                    error: err
                });
            })
    };
}

