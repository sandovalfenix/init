const basePath =
  "https://firestore.googleapis.com/v1/projects/control-security-f8c2c/databases/(default)/documents/";

export default {
  namespaced: true,
  state: {
    Users: [],
    nextPageToken: null,
  },
  getters: {
    Users: (state) => state.Users,
    nextPageToken: (state) => state.nextPageToken,
  },
  mutations: {
    setNextPageToken(state, nextPageToken) {
      state.nextPageToken = nextPageToken;
    },
    setUsers(state, Users) {
      state.Users = Users;
    },
  },
  actions: {
    listUsers: async ({ commit }, params = null) => {
      let collectionID = "Users";
      let url = basePath + collectionID;

      if (params) {
        Object.entries(params).forEach((item, index) => {
          url += item[1]
            ? index == 0
              ? "?" + item[0] + "=" + item[1]
              : "&" + item[0] + "=" + item[1]
            : "";
        });
      }

      const res = await fetch(url, {
        method: "get",
        headers: {
          "content-type": "application/json",
        },
      });

      if (!res.ok) {
        // create error instance with HTTP status text
        const error = new Error(res.statusText);
        error.json = res.json();
        throw error;
      } else {
        const json = await res.json();

        commit(
          "setUsers",
          json.documents.map((doc) =>
            Object.fromEntries(
              Object.entries(doc.fields).map((item) => [
                item[0],
                Object.values(item[1])[0],
              ])
            )
          )
        );

        commit(
          "setNextPageToken",
          json.nextPageToken ? json.nextPageToken : null
        );
      }
    },
  },
};
