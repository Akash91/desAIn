import * as TYPES from './Types';

export const deleteUser = userObject => (dispatch) => {
  UserApi.deleteUser(userObject).then((response) => {
    dispatch({
      type: TYPES.DELETE_USER_SUCCESS,
      data: response.data,
    });
  },
  (error) => {
    handleHttpError(error, {
      default: {
        message: 'Failed',
      },
    });
  });
};
