import React from 'react';
import { MdHome, MdAccountCircle, MdOutlineMenu, MdListAlt, MdOutlineChat } from 'react-icons/md';

const Navbar = () => {
    return (
        <nav className='bg-white w-full p-2'>

            <div className='grid grid-cols-5'>

                <div>
                    <MdHome className='text-2xl mx-auto text-primary' />
                    <p className='text-center text-xs text-primary'>Home</p>
                </div>
                <div>
                    <MdAccountCircle className='text-2xl mx-auto text-primary' />
                    <p className='text-center text-xs text-primary'>Profile</p>
                </div>
                <div className='bg-primary w-10 rounded-full mx-auto'>
                    <MdOutlineMenu className='text-2xl mx-auto text-white relative top-2' />
                </div>
                <div>
                    <MdListAlt className='text-2xl mx-auto text-primary' />
                    <p className='text-center text-xs text-primary'>Follow List</p>
                </div>
                <div>
                    <MdOutlineChat className='text-2xl mx-auto text-primary' />
                    <p className='text-center text-xs text-primary'>Chat</p>
                </div>

            </div>

        </nav>
    );
};

export default Navbar;