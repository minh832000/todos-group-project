import TokenService from '../services/token.service';

const user = TokenService.getUser();

const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    refreshToken({ commit }, accessToken) {
      commit('refreshToken', accessToken);
    }
  },
  mutations: {
    refreshToken(state, accessToken) {
      state.status.loggedIn = true;
      state.user = {
        ...state.user,
        accessToken: accessToken,
      }
    }
  }
};

export default auth;