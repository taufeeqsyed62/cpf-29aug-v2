import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from "react-responsive";

const statesOfIndia = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi"
];

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const years = [2024, 2025, 2026];

const times = [
    "8:00 AM - 9:00 AM", "9:00 AM - 10:00 AM", "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM", "1:00 PM - 2:00 PM", "2:00 PM - 3:00 PM", "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM", "5:00 PM - 6:00 PM", "6:00 PM - 7:00 PM"
];

const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
};

const getDayOfWeek = (date, month, year) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = new Date(year, month, date).getDay();
    return daysOfWeek[day];
};

const Trainer = () => {
    const [selectedState, setSelectedState] = useState("New Delhi");
    const [selectedMonth, setSelectedMonth] = useState(2); // March
    const [selectedYear, setSelectedYear] = useState(2024);
    const [isEditingMonthYear, setIsEditingMonthYear] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 480 });

    const [selectedDate, setSelectedDate] = useState(9);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState("1:00 PM - 2:00 PM");

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    };

    const handleMonthChange = (event) => {
        setSelectedMonth(parseInt(event.target.value));
    };

    const handleYearChange = (event) => {
        setSelectedYear(parseInt(event.target.value));
    };

    const toggleEditMonthYear = () => {
        setIsEditingMonthYear(!isEditingMonthYear);
    };

    const handleBlur = () => {
        setIsEditingMonthYear(false);
    };

    const handleDateChange = (event) => {
        setSelectedDate(parseInt(event.target.value));
    };

    const handleTimeSlotChange = (event) => {
        setSelectedTimeSlot(event.target.value);
    };

    const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);

    const DestopView = () => {
        return (
            <div className="min-h-screen bg-yellow-50 p-4 md:p-8 lg:p-12">
                <h1 className="text-2xl font-bold mb-6">Register For Training Session</h1>
                <div className="mb-6 relative">
                    <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="absolute left-3 top-3 text-blue-500 text-xl"
                    />
                    <select
                        value={selectedState}
                        onChange={handleStateChange}
                        className="appearance-none w-full md:w-64 p-2 pl-10 border rounded-lg text-lg bg-slate-200 shadow-lg"
                    >
                        {statesOfIndia.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-4">
                        Session happening in {selectedState} -
                        {isEditingMonthYear ? (
                            <>
                                <select
                                    value={selectedMonth}
                                    onChange={handleMonthChange}
                                    onBlur={handleBlur}
                                    className="ml-2 p-1 border rounded-lg text-lg"
                                >
                                    {months.map((month, index) => (
                                        <option key={index} value={index}>{month}</option>
                                    ))}
                                </select>
                                <select
                                    value={selectedYear}
                                    onChange={handleYearChange}
                                    onBlur={handleBlur}
                                    className="ml-2 p-1 border rounded-lg text-lg"
                                >
                                    {years.map((year, index) => (
                                        <option key={index} value={year}>{year}</option>
                                    ))}
                                </select>
                            </>
                        ) : (
                            <span
                                className="ml-2 cursor-pointer underline"
                                onClick={toggleEditMonthYear}
                            >
                                {months[selectedMonth]} {selectedYear}
                            </span>
                        )}
                    </h2>
                    <div className="flex flex-col space-y-4">
                        <Link to="/trainie">
                            <div className="border p-4 rounded-lg shadow-lg bg-blue-100">
                                <div className="flex justify-between items-center">
                                    <span>Mon 14</span>
                                    <span>C.P, New Delhi</span>
                                </div>
                                <h3 className="text-lg font-semibold">Training Session - 1</h3>
                                <p>8:30 AM - 10:30 AM</p>
                            </div>
                        </Link>
                        <div className="border p-4 rounded-lg shadow-lg bg-blue-100">
                            <div className="flex justify-between items-center">
                                <span>Wed 16</span>
                                <span>xyz, New Delhi</span>
                            </div>
                            <h3 className="text-lg font-semibold">Training Session - 2</h3>
                            <p>8:30 AM - 10:30 AM</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-24 flex justify-center items-center">
                    <h1 className="text-2xl">OR</h1>
                </div>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-4">Session happening on Zoom - {months[selectedMonth]} {selectedYear}</h2>
                    <p className="text-gray-600 mb-4">Unable to locate a local session? No worries! You can register for a Zoom session with a trainer.</p>
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label>Select date and time</label>
                            <div className="flex flex-row space-x-4">
                                <select
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    className="w-full md:w-1/2 p-2 border rounded-lg text-lg"
                                >
                                    {Array.from({ length: daysInMonth }, (_, index) => index + 1).map(date => (
                                        <option key={date} value={date}>
                                            {getDayOfWeek(date, selectedMonth, selectedYear)}, {date} {months[selectedMonth]}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    value={selectedTimeSlot}
                                    onChange={handleTimeSlotChange}
                                    className="w-full md:w-1/2 p-2 border rounded-lg text-lg"
                                >
                                    {times.map((time, index) => (
                                        <option key={index} value={time}>{time}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/virtualTrainerInfo">
                    <div className="w-full flex justify-end h-20">
                        <div className="bg-blue-500 hover:bg-blue-700 w-64 mt-9 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center">
                            Next
                        </div>
                    </div>
                </Link>
                <div className="mt-8 text-center">
                    <Link to="/start-induction" className="text-blue-600 hover:underline">Changed my mind? Go solo</Link>
                </div>
            </div>
        )
    }

    const MobileView = () => {
        return (

            <div className="min-h-screen bg-orange-50 p-4 pb-12">
                <h1 className="text-lg mt-3 font-bold mb-6">Register For Training Session</h1>
                <div className="mb-9 relative">
                    <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="absolute left-3 top-3 text-blue-500 text-medium"
                    />
                    <select
                        value={selectedState}
                        onChange={handleStateChange}
                        className="appearance-none w-full md:w-64 p-2 pl-10 border rounded-lg text-medium bg-violet-800 text-white shadow-lg"
                    >
                        {statesOfIndia.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-6">
                    <h2 className="text-lg font-semibold  mb-4">
                        Session happening in {selectedState} -
                        {isEditingMonthYear ? (
                            <>
                                <select
                                    value={selectedMonth}
                                    onChange={handleMonthChange}
                                    onBlur={handleBlur}
                                    className="ml-2 p-1 border rounded-lg text-lg"
                                >
                                    {months.map((month, index) => (
                                        <option key={index} value={index}>{month}</option>
                                    ))}
                                </select>
                                <select
                                    value={selectedYear}
                                    onChange={handleYearChange}
                                    onBlur={handleBlur}
                                    className="ml-2 p-1 border rounded-lg text-lg"
                                >
                                    {years.map((year, index) => (
                                        <option key={index} value={year}>{year}</option>
                                    ))}
                                </select>
                            </>
                        ) : (
                            <span
                                className="ml-2 cursor-pointer underline"
                                onClick={toggleEditMonthYear}
                            >
                                {months[selectedMonth]} {selectedYear}
                            </span>
                        )}
                    </h2>
                    <div className="flex flex-col space-y-4">
                        <Link to="/trainie">
                            <div className="border p-3 rounded-lg shadow-lg bg-violet-800 text-white">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs">Mon 14</span>
                                    <span className="text-xs">C.P, New Delhi</span>
                                </div>
                                <h3 className="text-medium font-semibold">Training Session - 1</h3>
                                <p className="text-sm">8:30 AM - 10:30 AM</p>
                            </div>
                        </Link>
                        <div className="border p-3 rounded-lg shadow-lg bg-violet-800 text-white">
                            <div className="flex justify-between items-center">
                                <span className="text-xs">Wed 16</span>
                                <span className="text-xs">xyz, New Delhi</span>
                            </div>
                            <h3 className="text-medium font-semibold">Training Session - 2</h3>
                            <p className="text-sm">8:30 AM - 10:30 AM</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-20 flex justify-center items-center">
                    <h1 className="text-2xl">OR</h1>
                </div>
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-4">Session happening on Zoom - {months[selectedMonth]} {selectedYear}</h2>
                    <p className="text-gray-600 mb-4 text-sm">Unable to locate a local session? No worries! You can register for a Zoom session with a trainer.</p>
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label>Select date and time</label>
                            <div className="flex flex-col space-y-4">
                                <select
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    className=" p-2 border rounded-lg text-medium"
                                >
                                    {Array.from({ length: daysInMonth }, (_, index) => index + 1).map(date => (
                                        <option key={date} value={date}>
                                            {getDayOfWeek(date, selectedMonth, selectedYear)}, {date} {months[selectedMonth]}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    value={selectedTimeSlot}
                                    onChange={handleTimeSlotChange}
                                    className=" p-2 border rounded-lg text-medium"
                                >
                                    {times.map((time, index) => (
                                        <option key={index} value={time}>{time}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/virtualTrainerInfo">
                    <div className="w-full flex justify-center">
                        <div className="bg-blue-500 hover:bg-blue-700 mt-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center">
                            Next
                        </div>
                    </div>
                </Link>
                <div className="mt-8 text-center">
                    <Link to="/start-induction" className="text-blue-600 text-sm hover:underline">Changed my mind? Go solo</Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            {isMobile ? <MobileView /> : <DestopView />}
        </div>
    );
}

export default Trainer;
