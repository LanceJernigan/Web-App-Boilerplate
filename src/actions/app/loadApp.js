import * as Actions from './actions';

export default () => (dispatch) => {
  const action = {
    type: Actions.APP_LOADED,
  };

  dispatch(action);
};
