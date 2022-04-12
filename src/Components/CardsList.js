import { Fragment,useState } from 'react';
import { useSelector } from 'react-redux';

import Cards from './Cards';
import styles from './CardsList.module.css'

const card_details=[
    {
        id:1,
        image:require('../images/1.png')
    },
    {
        id:2,
        image:require('../images/2.png')
    },
    {
        id:3,
        image:require('../images/3.png')
    },
    {
        id:4,
        image:require('../images/4.png')
    },
    {
        id:5,
        image:require('../images/5.png')
    },
    {
        id:6,
        image:require('../images/6.png')
    }
]

const shuffle=array=>{
    const length = array.length;
    for (let i = length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const currentIndex = i - 1;
      const temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
}


const CardsList=()=>{
    const [cards]=useState([...shuffle(card_details),...shuffle(card_details)])
    const openedCard=useSelector(state=>state.solved_array)
    const moves=useSelector(state=>state.moves)
//    console.log(moves)
    // console.log(openedCard)
    return(
    <Fragment> 
        <div className={styles.cards_list_placeholder_}> Moves: {moves}</div>
        <div className={styles.cards_list_placeholder}>
            <h1>Welcome to the Card Game</h1>
            <div className={styles.cards_list}>
                {cards.map((card_details,index)=>{
                    return <Cards card_details={card_details} key={index} do_not_close={card_details in openedCard?true:false} /> 
                })}
            </div>           
        </div>
    </Fragment>

    )
}

export default CardsList;