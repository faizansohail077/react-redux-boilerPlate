import { SIGN_IN } from "../../StoreConstants/AuthConstants"
export function authAction(data) {
    return dispatch => {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve(true)
            }, 3000);
            dispatch({ type: SIGN_IN, payload: data })

        })
    }
}