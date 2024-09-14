"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector from "@mui/material/StepConnector";
import { styled } from "@mui/system";
import CalenderComponent from "./CalenderComponent";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { motion } from "framer-motion"; // Import Framer Motion
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

// Custom connector for the stepper to replace the line and the step circles
const CustomConnector = styled(StepConnector)(({ theme }) => ({
    alternativeLabel: {
        top: 22,
    },
    active: {
        "& .MuiStepConnector-line": {
            borderColor: "#1FAF38",
        },
    },
    completed: {
        "& .MuiStepConnector-line": {
            borderColor: "#1FAF38",
        },
    },
    line: {
        borderColor: "#9E9E9E",
        borderTopWidth: "12px",
    },
}));

function ApplicationPage() {
    const [selectedSlots, setSelectedSlots] = useState([]);
    const [selectedDate, setSelectedDate] = useState("22 June 2024"); // Track the selected date
    const [dialogOpen, setDialogOpen] = useState(false); // State for dialog visibility
    const [slotToDelete, setSlotToDelete] = useState(null); // Track which slot to delete

    const steps = ["Assessment", "Interview 1", "Interview 2", "Offer Letter"];
    const activeStep = 2;

    const timeOptions = [
        { time: "11:00 AM", slot: "Slot 1" },
        { time: "12:00 PM", slot: "Slot 2" },
        { time: "1:00 PM", slot: "Slot 3" },
    ];

    const handleButtonClick = (time, slot) => {
        setSelectedSlots([...selectedSlots, { time, slot }]);
    };

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate); // Update the selected date
    };

    const handleDeleteClick = (slot) => {
        setSlotToDelete(slot); // Set which slot to delete
        setDialogOpen(true); // Open confirmation dialog
    };

    const handleDeleteConfirm = () => {
        setSelectedSlots(selectedSlots.filter((slot) => slot !== slotToDelete)); // Remove slot from selectedSlots
        setDialogOpen(false); // Close dialog
        setSlotToDelete(null); // Reset slotToDelete
    };

    const handleDeleteCancel = () => {
        setDialogOpen(false); // Close dialog without deleting
        setSlotToDelete(null); // Reset slotToDelete
    };

    const remainingTimes = timeOptions.filter(
        (option) => !selectedSlots.find((slot) => slot.time === option.time)
    );

    return (
        <div>
            <Box
                sx={{
                    width: "100%",
                    marginTop: "0px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: { xs: "10px", sm: "20px" }, // Adjust padding for mobile
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: { xs: "100%", sm: "90%", md: "70%", lg: "60%", xl: "50%" },
                        padding: { xs: "10px", sm: "20px" }, // Adjust padding for mobile view
                    }}
                >
                    <Stepper activeStep={activeStep} alternativeLabel connector={<CustomConnector />}>
                        {steps.map((label, index) => (
                            <Step key={label} completed={index < activeStep}>
                                <StepLabel
                                    StepIconComponent={() => null}
                                    sx={{
                                        "& .MuiStepLabel-label": {
                                            color:
                                                index < activeStep
                                                    ? "#1FAF38"
                                                    : index === activeStep
                                                        ? "#01B0F1"
                                                        : "#9E9E9E",
                                            fontWeight: "normal",
                                            fontSize: { xs: "10px", sm: "12px", md: "16px" },
                                            position: 'relative',
                                            zIndex: '1' // Smaller font size for mobile
                                        },
                                    }}
                                >
                                    <span
                                        className={`${index < activeStep
                                            ? "border-[#1FAF38] text-[#1FAF38] "
                                            : index === activeStep
                                                ? "border-[#9E9E9E] text-[#515151]"
                                                : "border-[#9E9E9E] text-[#515151]"
                                            } bg-white p-1 rounded px-2 border-2 text-xs sm:text-sm md:text-base relative z-1`}
                                    >
                                        {label}
                                    </span>
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </Box>

            <div className="-mt-4 justify-between bg-white m-12 h-screen rounded-[15px]">
                <div className="p-8">
                    <div className="float-right px-7">
                        <button className="bg-[#01B0F1] text-white text-center w-[100px] h-[21px] text-[11px] font-inter rounded-[5px] 
                          hover:bg-[#018AC1] hover:shadow-lg transition-all duration-300 ease-in-out 
                          hover:transform hover:scale-105 shadow-md">
                            View students
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row lg:flex-row justify-between pt-2 p-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="flex flex-col space-y-12 m-5"
                    >
                        {/* Interview box */}
                        <div className="flex flex-col">
                            <h1 className="text-[18px] bold font-bold">Interview 1</h1>
                            <span className="text-[12px] font-semibold">(create a slot for students)</span>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="text-[#6F6F6F] flex flex-col space-y-5"
                        >
                            <div className="flex flex-row items-center">
                                <span className="px-[9px]">
                                    <img src="/Icons/time.png" alt="time-icon" />
                                </span>
                                Duration <span>
                                    <ArrowDropDownIcon sx={{ width: "21px" }} />
                                </span>
                            </div>
                            <div className="flex flex-row items-center space-x-2">
                                <span className="px-[9px]">
                                    <img src="/Icons/play.png" alt="play-icon" />
                                </span>
                                Interval <span>
                                    <ArrowDropDownIcon sx={{ width: "21px" }} />
                                </span>
                            </div>
                            <div className="flex flex-row items-center space-x-2">
                                <span className="px-[9px]">
                                    <img src="/Icons/group 12.png" alt="graphic designer" />
                                </span>
                                Graphic designer
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="-mt-4 mr-12"
                    >
                        {/* Calendar box */}
                        <CalenderComponent onDateChange={handleDateChange} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="m-2 flex flex-col items-center space-y-3"
                    >
                        {/* Date with Framer Motion Animation */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            <p className="text-[18px] font-semibold">{selectedDate}</p>
                        </motion.div>

                        {/* Slots Section */}
                        {selectedSlots.map((slot, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="border-[#01B0F1] w-[178px] border-2 rounded -space-y-2 mb-2 px-3 py-1"
                            >
                                <div className="flex justify-between items-start p-1">
                                    <p>{slot.slot}</p>
                                    <button onClick={() => handleDeleteClick(slot)}>
                                        <img src="/Icons/delete.png" alt="delete" className="object-contain" />
                                    </button>
                                </div>
                                <div className="text-[12px] text-[#787575]">
                                    <p>Time: {slot.time}</p>
                                </div>
                            </motion.div>
                        ))}

                        {/* Remaining Time Options */}
                        {remainingTimes.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="flex flex-col"
                            >
                                {remainingTimes.map((option) => (
                                    <motion.button
                                        key={option.time}
                                        className="h-[40px] w-[118px] border-[#01B0F1] border-2 rounded text-[#01B0F1] transition-transform duration-300 ease-in-out hover:shadow-lg hover:bg-[#01B0F1] hover:text-white transform hover:scale-105 mb-2"
                                        onClick={() => handleButtonClick(option.time, option.slot)}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {option.time}
                                    </motion.button>
                                ))}
                            </motion.div>
                        )}
                    </motion.div>
                </div>

                {/* Confirmation Dialog */}
                <Dialog open={dialogOpen} onClose={handleDeleteCancel}>
                    <DialogTitle>Confirm Slot Deletion</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete this slot?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleDeleteCancel} color="primary">
                            No
                        </Button>
                        <Button onClick={handleDeleteConfirm} color="primary">
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default ApplicationPage;
