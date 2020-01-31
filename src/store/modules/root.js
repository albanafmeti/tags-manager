import * as types from '../mutation-types';

const getters = {
    hasError: state => state.hasError,
    errorMsg: state => state.errorMsg,
    hasSuccess: state => state.hasSuccess,
    successMsg: state => state.successMsg,
    validationErrors: state => state.validationErrors,
};

const actions = {

    clearSuccess({commit}) {
        commit(types.SET_HAS_SUCCESS, false);
        commit(types.SET_SUCCESS_MSG, null);
    },

    clearError({commit}) {
        commit(types.SET_HAS_ERROR, false);
        commit(types.SET_ERROR_MSG, null);
    }
};

const mutations = {
    [types.SET_HAS_SUCCESS](state, success) {
        state.hasSuccess = success;
    },
    [types.SET_SUCCESS_MSG](state, message) {
        state.successMsg = message;
    },
    [types.SET_HAS_ERROR](state, error) {
        state.hasError = error;
    },
    [types.SET_ERROR_MSG](state, message) {
        state.errorMsg = message;
    },
    [types.SET_VALIDATION_ERRORS](state, errors) {
        state.validationErrors = errors;
    },
};

const state = {
    hasError: false,
    errorMsg: null,

    hasSuccess: false,
    successMsg: null,

    validationErrors: {}
};

export default {
    state,
    getters,
    actions,
    mutations
}
