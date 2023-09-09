import {Fragment} from 'react';

import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals=()=>{

    return (
        <div className='flex flex-col mt-[170px] p-2 '>
            <MealsSummary/>
            <AvailableMeals/>
        </div>
    );
}

export default Meals;