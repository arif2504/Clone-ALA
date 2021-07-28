//Action Types
export const INCREEMENT = "INCREMENT_COUNTER";
export const DECREEMENT = "DECREMENT_COUNTER";


//Action Creator
export const incrementCounter = () => ({
   type: INCREMENT_COUNTER
});

export const decrementCounter = () => ({
    type: DECREMENT_COUNTER
});
