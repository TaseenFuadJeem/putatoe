import React from 'react';

const PopularServices = () => {
    return (
        <section>

            <h1 className='text-center font-semibold text-[#388387] bg-[#c1f6f9] mx-2 mt-3'>Popular Service Products</h1>

            <h2 className='text-center font-semibold text-gray-500 mt-3'>Construction</h2>
            <div className='border-t-2 w-3/5 border-gray-500 mx-auto'></div>

            <div className='px-2 mt-3 flex overflow-x-auto'>
                <div className='bg-white rounded mx-1'>
                    <img className='rounded' src="https://cementshop.in/wp-content/uploads/2021/06/karimnagar-bricks.jpg" alt="" />
                    <p className='text-[9px] text-center'>Royal Brick</p>
                </div>
                <div className='bg-white rounded mx-1'>
                    <img className='rounded' src="https://cementshop.in/wp-content/uploads/2021/06/karimnagar-bricks.jpg" alt="" />
                    <p className='text-[9px] text-center'>Royal Brick</p>
                </div>
                <div className='bg-white rounded mx-1'>
                    <img className='rounded' src="https://cementshop.in/wp-content/uploads/2021/06/karimnagar-bricks.jpg" alt="" />
                    <p className='text-[9px] text-center'>Royal Brick</p>
                </div>
                <div className='bg-white rounded mx-1'>
                    <img className='rounded' src="https://cementshop.in/wp-content/uploads/2021/06/karimnagar-bricks.jpg" alt="" />
                    <p className='text-[9px] text-center'>Royal Brick</p>
                </div>
                <div className='bg-white rounded mx-1'>
                    <img className='rounded' src="https://cementshop.in/wp-content/uploads/2021/06/karimnagar-bricks.jpg" alt="" />
                    <p className='text-[9px] text-center'>Royal Brick</p>
                </div>

            </div>

        </section>
    );
};

export default PopularServices;