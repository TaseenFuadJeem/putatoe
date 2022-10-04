import React from 'react';
import Cleaning from './Cleaning';
import Dance from './Dance';
import Education from './Education';
import Health from './Health';
import HouseMaintain from './HouseMaintain';
import Tour from './Tour';

const AllServiceProvider = () => {
    return (
        <section>

            <h1 className='text-center font-semibold text-[#388387] bg-[#c1f6f9] mx-2 mt-3'>All Popular Service Providers</h1>

            <Cleaning />
            <HouseMaintain />
            <Tour />
            <Dance />
            <Health />
            <Education />

        </section>
    );
};

export default AllServiceProvider;