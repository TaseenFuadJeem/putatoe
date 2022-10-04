import React from 'react';
import Consultancy from './Consultancy';
import Counstruction from './Counstruction';
import DailyNeeds from './DailyNeeds';
import Electronics from './Electronics';
import Laundry from './Laundry';

const PopularServices = () => {
    return (
        <section>

            <h1 className='text-center font-semibold text-[#388387] bg-[#c1f6f9] mx-2 mt-3'>Popular Service Products</h1>

            <Counstruction />
            <DailyNeeds />
            <Consultancy />
            <Laundry />
            <Electronics />

        </section>
    );
};

export default PopularServices;