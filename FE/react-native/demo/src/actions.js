export const ActionTypes = {
    SAVE_LOGIN: 'SAVE_LOGIN',
};


export const saveLogin = (userName, password) => {
        return {
            type: ActionTypes.SAVE_LOGIN,
            payload: { userName, password }
        }
    }

