import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { BsFillBellFill, BsCartPlus } from 'react-icons/bs';

const Header = () => {
    return (
        <header>

            <div className='w-full h-28 bg-primary'>

                <div className='flex justify-between items-center pt-10'>

                    <MdLocationOn className='text-3xl text-white' />
                    <input type="text" defaultValue={`Dhaka, Bangladesh`} className='text-white rounded-lg p-1 text-xs border border-white bg-transparent w-[200px]' />
                    <div className="indicator">
                        <span className="indicator-item badge badge-secondary"></span>
                        <div className="place-items-center">
                            <BsFillBellFill className='text-2xl text-white ' />
                        </div>
                    </div>
                    <BsCartPlus className='text-2xl text-white mx-2' />

                </div>

            </div>

        </header>
    );
};

export default Header;