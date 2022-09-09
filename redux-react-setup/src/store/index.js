// import { createStore } from "redux";

// const initialState = {
//     counter: 0,
//     show: true
// };

// const counterReducer = (state = initialState, action) => {
//     switch (action.type){
//         // never chnage/mutate the existing state while using redux bcoz objects/array/functions are refrences in javascript (super important)
//         case "increment":
//             return {
//                 counter: state.counter + 1,
//                 show: state.show // redux store didn't merge all the states automatically like reducer (it overirdes the old states so we have to merge all the states)
//             }
//         case "decrement":
//             return {
//                 counter: state.counter - 1,
//                 show: state.show
//             }
//         case "increase":
//             return {
//                 counter: state.counter + action.value,
//                 show: state.show
//             }
//         case "toggle":
//             return {
//                 counter: initialState.counter,
//                 show: !state.show
//             }
//     }
//     return initialState;
// }

// const store = createStore(counterReducer);

// export default store;