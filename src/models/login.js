import {
  login
} from './../services/login';
export default {

  namespace: 'login',

  state: {
    user: null,
    password: null
  },

  subscriptions: {
    setup({
      dispatch,
      history
    }) { // eslint-disable-line
      console.log('tag', '')
    },
  },
  effects: {
    *query({
      payload
    }, {
      call,
      put
    }) { // eslint-disable-line
    console.log(payload, '')
     const data = yield call(login, payload)

    //   yield put({
    //     type: 'save'
    //   });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload
      };
    },
  },

};
