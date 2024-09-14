"use client";
import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import dayjs from 'dayjs';

export default function CalenderComponent({ onDateChange }) {
    const [selectedDates, setSelectedDates] = React.useState([]);
    const [selectedDate, setSelectedDate] = React.useState(dayjs()); // Keep track of the current selected date

    // Function to check if a date is Sunday
    const isSunday = (date) => date.day() === 0;

    // Function to handle date selection
    const handleDateChange = (date) => {
        const selectedDateFormatted = dayjs(date).format("YYYY-MM-DD");
        setSelectedDate(dayjs(date)); // Store the selected date
        onDateChange(selectedDateFormatted); // Send the selected date back to the parent

        setSelectedDates((prevDates) => {
            // Toggle the date selection
            if (prevDates.includes(selectedDateFormatted)) {
                return prevDates.filter((d) => d !== selectedDateFormatted);
            } else {
                return [...prevDates, selectedDateFormatted];
            }
        });
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2rem" }}>
            {/* Header */}
            <h1 className="text-left text-[22px] font-semibold float-left mr-14">Select date and time</h1>

            {/* Calendar */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                    value={selectedDate}
                    onChange={handleDateChange}
                    sx={{
                        "& .MuiPickersCalendarHeader-label": {
                            fontSize: "1.25rem", // Adjusting the size of the month and year text (e.g., June 2024)
                            fontWeight: "bold",
                        },
                        "& .MuiPickersArrowSwitcher-root": {
                            marginBottom: "8px", // Adds some space between the header and the days of the week
                        },
                        "& .MuiPickersDay-root": {
                            height: "40px", // Make the day cells larger
                            width: "40px",
                        },
                        "& .MuiPickersDay-root.Mui-selected": {
                            backgroundColor: "#01B0F1", // Lighter background
                            color: "#fff", // Text color on selection
                        },
                        "& .MuiPickersDay-root:hover": {
                            backgroundColor: "#01B0F1", // Hover color
                            color: "#fff",
                        },
                    }}
                />
            </LocalizationProvider>

            {/* Time Zone Display */}
            <Box sx={{ marginTop: "1.5rem", textAlign: "center" }}>
                <Typography variant="subtitle1">Time zone</Typography>
                <Select defaultValue="IST" sx={{ minWidth: "200px", marginTop: "0.5rem" }}>
                    <MenuItem value="IST">Indian Standard Time (IST)</MenuItem>
                    <MenuItem value="UTC">UTC</MenuItem>
                    <MenuItem value="PST">Pacific Standard Time (PST)</MenuItem>
                </Select>
            </Box>
        </Box>
    );
}
