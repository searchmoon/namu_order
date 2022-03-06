import React from 'react';
import Drink1Menu from './Drink1Menu';

function Drink1() {
    const drink1Menu = ['아메리카노', '바닐라 라떼', '카페 라떼', '카페모카' ];
    const drink2Menu = ['초코 라떼', '말차 라떼' ];
    const Categories = ['Coffee', 'Latte', 'Ade', 'Tea'];
    return (
        <div>
            <h3>{Categories[0]}</h3>
            <Drink1Menu drink1Menu={drink1Menu[0]}/>
            <Drink1Menu drink1Menu={drink1Menu[1]}/>
            <Drink1Menu drink1Menu={drink1Menu[2]}/>
            <Drink1Menu drink1Menu={drink1Menu[3]}/>
            <h3>{Categories[1]}</h3>
            <Drink1Menu drink1Menu={drink2Menu[0]}/>
            <Drink1Menu drink1Menu={drink2Menu[1]}/>
        </div>
    )
}

export default Drink1; 