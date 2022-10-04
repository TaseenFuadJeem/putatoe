import React from 'react';
import Features from './Features';
import Header from './Header';
import PopularServices from './PopularServices';

const AppInterface = () => {
    return (
        <section className='overflow-y-auto'>

            <Header />
            <Features />
            <PopularServices />

        </section>
    );
};

export default AppInterface;