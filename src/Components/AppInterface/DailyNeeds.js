import React from 'react';

const DailyNeeds = () => {
    return (
        <section className='mt-4'>

            <h2 className='text-center font-semibold text-gray-500 mt-3'>Daily Needs</h2>
            <div className='border-t-2 w-3/5 border-gray-500 mx-auto'></div>

            <div className='px-2 mt-3 flex overflow-x-auto'>
                <div className='bg-white rounded mx-1'>
                    <img className='rounded' src="https://minamina.be/Content/img/home-milk.png" alt="" />
                    <p className='text-[9px] text-center mt-2'>Milk</p>
                </div>
                <div className='bg-white rounded mx-1'>
                    <img className='rounded' src="https://minamina.be/Content/img/home-milk.png" alt="" />
                    <p className='text-[9px] text-center mt-2'>Milk</p>
                </div>
                <div className='bg-white rounded mx-1'>
                    <img className='rounded' src="https://minamina.be/Content/img/home-milk.png" alt="" />
                    <p className='text-[9px] text-center mt-2'>Milk</p>
                </div>
                <div className='bg-white rounded mx-1'>
                    <img className='rounded' src="https://minamina.be/Content/img/home-milk.png" alt="" />
                    <p className='text-[9px] text-center mt-2'>Milk</p>
                </div>
                <div className='bg-white rounded mx-1'>
                    <img className='rounded' src="https://minamina.be/Content/img/home-milk.png" alt="" />
                    <p className='text-[9px] text-center mt-2'>Milk</p>
                </div>

            </div>

        </section>
    );
};

export default DailyNeeds;