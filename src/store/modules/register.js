import axios from "axios";

const state = {
  users: [],
};
const getters = {
  listUser: (state) => state.users,
};
const actions = {
  async addUser({ commit }, user) {
    const res = await axios.post(
      "https://628efc440e69410599d36fda.mockapi.io/usermanagement/user",
      user
    );
    commit("addUser", res.data);
  },
};
const mutations = {
  addUser: (state, user) => state.users.push(user),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
