import * as C from '../constants';

export const getUserInfo = (accessToken) => {
  return (dispatch) => {
    console.log(accessToken);
    dispatch( { type: C.AUTH_ACTIONS.GET_USER_INFO });
    console.log('got here');
    return fetch(`${C.FACEBOOK_GRAPH_URL}me?fields=id,name`)
      .then((res) => {
        console.log(res);
        dispatch(
          { type: C.AUTH_ACTIONS.GET_USER_INFO_SUCCESS, payload: res }
        );
      })
      .catch((err) => {
        dispatch(
          { type: C.AUTH_ACTIONS.GET_USER_INFO_ERROR, payload: err }
        );
      });
  };
};