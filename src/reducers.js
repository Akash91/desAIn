import * as TYPES from './Types';

const initialState = {
  userList: {
    total: 0,
    users: [],
  },
};

export default(state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_USER_LIST: {
      return {
        ...state,
        userList: {
          total: action.data.total,
          users: action.data.users,
        },
      };
    }
    case TYPES.SET_NEW_USER_PASSWORD_SUCCESS: {
      // TODO:
      return state;
    }
    default:
      return state;
  }
};
