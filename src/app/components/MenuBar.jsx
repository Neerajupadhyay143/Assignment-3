"use client";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

function MenuBar() {
    // State to keep track of the selected button
    const [selected, setSelected] = useState(null);

    // Handler for button click
    const handleClick = (id) => {
        setSelected(id);
    };

    return (
        <div className="mt-9 px-2 flex flex-col h-screen">
            <div className="flex flex-col space-y-2 flex-grow">
                {[{ id: 1, icon: "/icons/home.png", label: "Home" },
                { id: 2, icon: "/icons/Group 10.png", label: "Application" },
                { id: 3, icon: "/icons/calender.png", label: "Calendar" }].map((item) => (
                    <motion.button
                        key={item.id}
                        className={`group flex items-center justify-around w-[120px] h-12 sm:w-[149px] sm:h-14 rounded-lg transition-transform duration-300 ease-in-out p-2 ${selected === item.id
                            ? "bg-[#01B0F1]/10 scale-105 text-[#01B0F1] shadow-lg"
                            : "hover:bg-[#01B0F1]/10 hover:scale-105 hover:shadow-lg"
                            }`}
                        onClick={() => handleClick(item.id)}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span
                            className={`transition-colors duration-300 ${selected === item.id ? "text-[#01B0F1]" : ""
                                }`}
                        >
                            <img
                                src={item.icon}
                                alt={item.label}
                                className={`w-5 h-5 sm:w-6 sm:h-6 ${selected === item.id
                                    ? "filter invert sepia brightness-200 contrast-200"
                                    : ""
                                    }`}
                            />
                        </span>
                        {/* Only show text on larger screens */}
                        <span
                            className={`hidden sm:block transition-colors duration-300 ${selected === item.id ? "text-[#01B0F1]" : ""
                                }`}
                        >
                            {item.label}
                        </span>
                    </motion.button>
                ))}
            </div>

            {/* Help Section */}
            <motion.div
                className="mt-auto -mb-12 flex space-x-2 items-center justify-center text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <HelpOutlineOutlinedIcon fontSize="small" />
                <p className="hidden sm:block">Help</p> {/* Only show text on larger screens */}
            </motion.div>
        </div>
    );
}

export default MenuBar;
