import * as types from '../mutation-types';
import TagsRepo from '../../repositories/TagsRepo';

import {handleError, handleSuccess, resetAlerts} from '../../utils/utils.js'

const getters = {
    tags: state => state.tags,
    sortType: state => state.sortType,
    isLoading: state => state.isLoading,
};

const actions = {
    getTags({commit}) {

        commit(types.SET_IS_LOADING, true);

        return TagsRepo.getTags().then(response => {

            const tags = response.data.data;
            commit(types.SET_TAGS, tags);
            commit(types.SET_IS_LOADING, false);

            return response;

        }).catch(error => {
            handleError(error, commit)
        }).finally(() => {
            commit(types.SET_IS_LOADING, false);
        });
    },

    createTag({commit, getters}, data) {

        commit(types.SET_IS_LOADING, true);
        resetAlerts(commit);

        return TagsRepo.createTag(data).then(response => {

            const tagCreated = response.data.data;
            commit(types.ADD_TAG, tagCreated);
            commit(types.SET_IS_LOADING, false);
            commit(types.SORT_TAGS, getters.sortType);

            handleSuccess("Tag successfully created.", commit);

            return response;

        }).catch(error => {
            handleError(error, commit);
        }).finally(() => {
            commit(types.SET_IS_LOADING, false);
        });
    },

    deleteTag({commit}, id) {

        commit(types.SET_IS_LOADING, true);
        resetAlerts(commit);

        return TagsRepo.deleteTag(id).then(response => {

            const message = response.data.message;

            commit(types.DELETE_TAG, id);
            commit(types.SET_IS_LOADING, false);

            handleSuccess(message, commit);

            return response;

        }).catch(error => {
            handleError(error, commit)
        }).finally(() => {
            commit(types.SET_IS_LOADING, false);
        });
    },

    sortTags({commit}, type) {
        commit(types.SET_SORT_TYPE, type);
        commit(types.SORT_TAGS, type);
    }
};

const mutations = {
    [types.SET_TAGS](state, tags) {
        state.tags = tags
    },

    [types.ADD_TAG](state, tag) {

        state.tags = [
            ...state.tags,
            tag
        ];
    },

    [types.DELETE_TAG](state, id) {
        state.tags = state.tags.filter(tag => tag.id !== id);
    },

    [types.SET_SORT_TYPE](state, type) {
        state.sortType = type;
    },

    [types.SORT_TAGS](state, type = "asc") {

        let compare;

        if (type === "asc") {
            compare = (a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
        } else {
            compare = (a, b) => (a.name > b.name) ? -1 : ((b.name > a.name) ? 1 : 0);
        }

        state.tags = state.tags.sort(compare);
    },

    [types.SET_IS_LOADING](state, loading) {
        state.isLoading = loading;
    },
};

const state = {
    tags: [],
    sortType: "asc",
    isLoading: false,
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
