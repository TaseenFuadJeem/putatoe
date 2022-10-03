import React from 'react';
import DailyNeeds from './DailyNeeds';
import Features from './Features';
import Header from './Header';
import PopularServices from './PopularServices';

const AppInterface = () => {
    return (
        <section className='overflow-y-auto'>

            <Header />
            <Features />
            <PopularServices />
            <DailyNeeds />

        </section>
    );
};

export default AppInterface;