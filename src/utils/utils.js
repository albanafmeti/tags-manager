import * as types from '../store/mutation-types';

export const handleError = (error, commit) => {

    if (error.response.status === 422) {
        commit(types.SET_HAS_ERROR, true, {root: true});
        commit(types.SET_VALIDATION_ERRORS, error.response.data.errors, {root: true});
        return;
    }

    let errMsg = error.response.data.message;

    commit(types.SET_HAS_ERROR, true, {root: true});
    commit(types.SET_ERROR_MSG, errMsg, {root: true});
};

export const handleSuccess = (message, commit) => {
    commit(types.SET_HAS_SUCCESS, true, {root: true});
    commit(types.SET_SUCCESS_MSG, message, {root: true});
};

export const resetAlerts = (commit) => {
    commit(types.SET_HAS_SUCCESS, false, {root: true});
    commit(types.SET_SUCCESS_MSG, null, {root: true});
    commit(types.SET_HAS_ERROR, false, {root: true});
    commit(types.SET_ERROR_MSG, null, {root: true});
};
