const basePath = 'https://firestore.googleapis.com/v1/';
let parent = 'projects/smartaxessqr/databases/(default)/documents';
let collectionId = 'Users';

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
      let url = basePath + parent;

      /* if (params) {
        Object.entries(params).forEach((item, index) => {
          url += item[1]
            ? index == 0
              ? '?' + item[0] + '=' + item[1]
              : '&' + item[0] + '=' + item[1]
            : '';
        });
      } */

      const structuredQuery = {
        from: [{ collectionId: collectionId }],
        where: {
          compositeFilter: {
            filters: [params.filters],
            op: 'AND',
          },
        },
        orderBy: [params.orderBy],
        limit: params.limit,
      };

      if (params.pageToken) {
        structuredQuery.startAt = {
          values: [{ integerValue: params.pageToken }],
        };
      }

      const res = await fetch(url + ':runQuery', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ structuredQuery }),
      });

      if (!res.ok) {
        // create error instance with HTTP status text
        const error = new Error(res.statusText);
        error.json = res.json();
        throw error;
      } else {
        const json = await res.json();

        //console.log(json);

        const List = json.map((doc) =>
          Object.fromEntries(
            Object.entries(doc.document.fields).map((item) => [
              item[0],
              Object.values(item[1])[0],
            ])
          )
        );

        commit('setUsers', List);

        commit(
          'setNextPageToken',
          List.length ? List[List.length - 1].createTime : null
        );
      }
    },
    createUser: async ({ commit }, document = null) => {
      let url = basePath + parente + collectionId;

      const res = await fetch(url, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ document }),
      });

      if (!res.ok) {
        // create error instance with HTTP status text
        const error = new Error(res.statusText);
        error.json = res.json();
        throw error;
      } else {
        const json = await res.json();

        console.log(json);
      }
    },
  },
};
