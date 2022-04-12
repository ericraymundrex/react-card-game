import { createStore } from "redux";

const initalState={prev_value: -1,solved_array:[-1], moves:0}
// Action. Type
// Action. Payload ->new_element 

const storeReducer=(state=initalState,action)=>{

    if(action.type==="add_new_element"){
        if(action.payload.new_element===state.prev_value){
            // To Close the previour value
            return{
                ...state,
                solved_array: [...state.solved_array,state.prev_value],
                prev_value: -1,
                moves:state.moves+1
            }
        }
        // To get the 1st value
        return{
            ...state,
            prev_value:action.payload.new_element,
            moves:state.moves+1
        }
    }

    return state;
}
const store=createStore(storeReducer)

export default store;