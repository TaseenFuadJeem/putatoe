import React from 'react';
import AllServiceProvider from './AllServiceProvider';
import Features from './Features';
import Header from './Header';
import PopularServices from './PopularServices';

const AppInterface = () => {
    return (
        <section className='overflow-y-auto'>

            <Header />
            <Features />
            <PopularServices />
            <AllServiceProvider />

        </section>
    );
};

export default AppInterface;