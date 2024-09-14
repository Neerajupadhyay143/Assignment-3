"use client";
import React from 'react';
import { motion } from 'framer-motion';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Navbar() {
    const num = 1;

    return (
        <div className='h-20 bg-[#01B0F1] flex items-center justify-between px-4 md:px-12 shadow-custom'>
            {/* Left navigation */}
            <div className='flex items-center space-x-2'>
                <motion.img
                    src="/Images/logo.png"
                    alt="Logo"
                    className='w-[43px]'
                    initial={{ opacity: 0, x: -100, rotate: -180 }} // Start position
                    animate={{ opacity: 1, x: 0, rotate: 0 }} // End position
                    transition={{ duration: 1, ease: "easeOut" }} // Animation duration and easing
                />
                <motion.img
                    src="/Images/GradHub.png"
                    alt="GradHub"
                    width="155px"
                    height="48px"
                    className='object-contain hidden md:block'
                    initial={{ opacity: 0, y: -50 }} // Start position
                    animate={{ opacity: 1, y: 0 }} // End position
                    transition={{ duration: 1, ease: "easeOut" }} // Animation duration and easing
                />
            </div>

            {/* Right navigation */}
            <div className='flex items-center space-x-4'>
                <div className='relative bg-[#DCF6FF] p-1 rounded-[12px] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer'>
                    <QuestionAnswerIcon />
                    <span className='rounded-full text-white bg-[#0C6687] text-center items-center absolute w-4 text-xs -top-1 left-6'>{num}</span>
                </div>
                <div className='bg-[#DCF6FF] p-1 rounded-[12px] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer relative'>
                    <NotificationsOutlinedIcon className='transition-transform duration-300 hover:animate-ring' />
                </div>
                <div className='bg-[#DCF6FF] p-1 rounded-[12px] transform transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 cursor-pointer flex items-center space-x-1'>
                    <PersonOutlinedIcon />
                    <span><ArrowDropDownIcon /></span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
