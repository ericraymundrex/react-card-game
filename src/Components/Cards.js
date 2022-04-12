import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';
import styles from './Cards.module.css';

const Cards=(props)=>{
    const state_value=useSelector(state=> [state.prev_value,state.solved_array,state.cycle]);
    const dispatch=useDispatch();
    const [open, openState]=useState(false);
    // const [numberOfClicks,setNumberOfClicks]=useState(0);
    const {id,image,do_not_close} = props.card_details;

    // const improvise_clickHander=()=>{
    //     setNumberOfClicks(numberOfClicks+1)
    //     if(state_value[2]===180 && numberOfClicks<3){
    //         if(state_value[1].indexOf(id)!==-1){
    //             openState(true)
    //         }else{
    //             setTimeout(()=>{
    //                 openState(false)
    //                 if(state_value[1].indexOf(id)!==-1){
    //                     openState(true)
    //                     if 
    //                 }
    //             },3000) 
    //         }
    //     }
    // }

    const clickHandler=()=>{       
        dispatch({type:"add_new_element",payload:{new_element:id}})
        // props.move_to_card_list(id);
        openState(true)
        if(state_value[1].indexOf(id) !==-1){
            openState(true)
            return;
        }else{
            setTimeout(()=>{
                openState(false)
                if(state_value[1].indexOf(id)!==-1){
                    openState(true)
                }
            },3000)
        }
    }
    // console.log(state_value[1]);
    return(
        
        <div className={styles.cards}>
           {do_not_close?<img src={image} alt="Card" onClick={clickHandler} />:<img src={ open?image:require('../images/unknown.png')} alt="Card" onClick={clickHandler} />}
        </div>
    )
}

export default Cards;