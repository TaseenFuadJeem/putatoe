import React from 'react';

const Electronics = () => {
    return (
        <section className='mt-4'>

            <h2 className='text-center font-semibold text-gray-500 mt-3'>Electronics</h2>
            <div className='border-t-2 w-3/5 border-gray-500 mx-auto'></div>

            <div className='px-2 mt-3 flex overflow-x-auto'>
                <div className='bg-white rounded mx-1 p-1 w-[53px]'>
                    <img className='rounded' src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/photo_1517336714731_489689fd1ca8_9.jpeg" alt="" />
                    <p className='text-[9px] text-center mt-2'>MacBook Pro</p>
                </div>

            </div>

        </section>
    );
};

export default Electronics;