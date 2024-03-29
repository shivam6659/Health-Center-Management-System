import * as actionTypes from '../actionTypes';

const initialState = {
    count: 0,
};

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                ...{ count: state.count + 1 },
            };

        case actionTypes.DECREMENT:
            return {
                ...state,
                ...{ count: state.count - 1 },
            };

        case actionTypes.RESET:
            return {
                ...state,
                ...{ count: initialState.count },
            };


        default:
            return state;
    }
}

export default homeReducer;
