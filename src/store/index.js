import Vue from 'vue';
import Vuex from 'vuex';
import loginState from './State/login';
import articleState from './State/article';
import loginMutation from './Mutations/login';
import articleMutation from './Mutations/article';
import articleActions from './Actions/article.js';
import navState from './State/nav.js';
import navMutation from './Mutations/nav.js';



Vue.use(Vuex);

const state = {
    ...loginState,
    ...articleState,
    ...navState
};

const mutations = {
    ...loginMutation,
    ...articleMutation,
    ...navMutation
};

const actions = {
    ...articleActions
};

const store = new Vuex.Store({
    state,
    mutations,
    actions
});

export default store;