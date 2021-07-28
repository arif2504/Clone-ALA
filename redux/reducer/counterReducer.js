import { INCREEMENT, DECREEMENT } from '../actions/counterAction'

const counterReducer = (
       state = {
              value: 0
       }, 
       action) => {

    switch (action.type) {
        case INCREEMENT_COUNTER:
            return {
                   ...state, value: state.value + 1
              };
        case DECREEMENT_COUNTER:
            return {
                   ...state, value: state.value - 1
              };
        default:
            return {...state};
    }
};

export default counterReducer;