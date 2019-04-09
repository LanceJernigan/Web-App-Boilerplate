import { app } from './app';

const reducers = (state = {}, action) => ({
    app: app(state.app, action),
});

export default reducers;