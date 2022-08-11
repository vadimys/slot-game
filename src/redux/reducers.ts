import IAction from '../helpers/interfaces/IAction';

const initialState = {
};

export function rootReducer(state = initialState, action: IAction) {
    switch (action.type) {
        default:
            return state;
    }
}
