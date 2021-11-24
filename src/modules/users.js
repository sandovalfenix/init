const basePath = 'https://firestore.googleapis.com/v1/';

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
      let parent =
        'projects/smartaxessqr/databases/(default)/documents:runQuery';
      let collectionId = 'Users';
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
            filters: [
              {
                fieldFilter: {
                  field: {
                    fieldPath: 'type',
                  },
                  op: 'EQUAL',
                  value: {
                    stringValue: 'NUIP',
                  },
                },
              },
            ],
            op: 'AND',
          },
        },
        orderBy: [
          { field: { fieldPath: 'createTime' }, direction: 'DESCENDING' },
        ],
        limit: params.pageSize,
      };

      if (params.pageToken) {
        structuredQuery.startAt = {
          values: [{ integerValue: params.pageToken }],
        };
      }

      const res = await fetch(url, {
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

        console.log(json);

        const List = json.map((doc) =>
          Object.fromEntries(
            Object.entries(doc.document.fields).map((item) => [
              item[0],
              Object.values(item[1])[0],
            ])
          )
        );

        commit('setUsers', List);

        console.log(List[List.length - 1].createTime);

        commit(
          'setNextPageToken',
          List.length ? List[List.length - 1].createTime : null
        );
      }
    },
  },
};
