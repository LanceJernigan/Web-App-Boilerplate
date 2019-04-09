import * as Actions from '../../actions/app/actions';

const defaultState = ({
    loaded: false,
});

export const app = (previousState = defaultState, action) => {
    switch (action.type) {
        case Actions.APP_LOADED:
            return ({
                ...previousState,
                loaded: true,
            });

        default:
            return previousState;
    }
};
