const basePath = 'https://firestore.googleapis.com/v1/projects/';

export default {
  namespaced: true,
  state: {
    Docs: [],
    Users: [],
    User: {},
    file: false,
  },
  getters: {
    Docs: state => state.Docs,
    Users: state => state.Users,
  },
  mutations: {
    setDocs(state, Docs) {
      state.Docs = Docs;
    },
    setUsers(state, Users) {
      state.Users = Users;
    },
  },
  actions: {
    listUsers: (async ({ commit }) => {
      const res = await fetch(basePath + 'smartaxessqr/databases/(default)/documents/Users?pageSize=10&orderBy=createTime', {
        method: 'get',
        headers: {
          'content-type': 'application/json'
        }
      })

      if (!res.ok) {
        // create error instance with HTTP status text
        const error = new Error(res.statusText);
        error.json = res.json();
        throw error;
      } else {
        const json = await res.json();
        const Docs = json.documents
        const Users = Docs.map(doc => Object.fromEntries(Object.entries(doc.fields).map((item) => [item[0], Object.values(item[1])[0]])))

        commit('setDocs', Docs)
        commit('setUsers', Users)
      }
    })
  }
}