import React from 'react';
import Features from './Features';
import Header from './Header';

const AppInterface = () => {
    return (
        <section className='overflow-x-auto overflow-y-hidden flex-none'>

            <Header />
            <Features />

        </section>
    );
};

export default AppInterface;