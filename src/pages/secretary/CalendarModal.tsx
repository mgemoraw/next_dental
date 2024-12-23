import React, { useState, useEffect } from 'react';

// Helper function to determine leap year
const isLeapYear = (year) => {
  return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
};

export const CustomCalendarModal = () => {
  const [activeMonth, setActiveMonth] = useState(new Date().getMonth());
  const [activeYear, setActiveYear] = useState(new Date().getFullYear());
  const [today, setToday] = useState(new Date().getDate());
  const [selectedDay, setSelectedDay] = useState(null);
  const [events, setEvents] = useState({});  // Store events by day
  
  const [eventInput, setEventInput] = useState(''); // Input for adding event
  const [showEventForm, setShowEventForm] = useState(false); // Toggle for event form visibility

  const daysInWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];  
  const monthsOfYear = [
    { month: "January", days: 31 },
    { month: "February", days: isLeapYear(activeYear) ? 29 : 28 },
    { month: "March", days: 31 },
    { month: "April", days: 30 },
    { month: "May", days: 31 },
    { month: "June", days: 30 },
    { month: "July", days: 31 },
    { month: "August", days: 31 },
    { month: "September", days: 30 },
    { month: "October", days: 31 },
    { month: "November", days: 30 },
    { month: "December", days: 31 }
  ];

  // Function to get the first day of the month (0 = Sunday, 6 = Saturday)
  const getFirstDayOfMonth = (year, month) => {
    const date = new Date(year, month, 1);
    return date.getDay(); // 0 for Sunday, 1 for Monday, etc.
  };

  // Days in the current month adjusted based on the first day of the month
  const firstDay = getFirstDayOfMonth(activeYear, activeMonth);
  const daysInMonth = new Array(monthsOfYear[activeMonth].days).fill(null).map((_, index) => index + 1);
  
  // Mapping days in the month to display in a calendar grid
  const calendarDays = new Array(firstDay).fill(null).concat(daysInMonth);

  // Handle navigation to the next month
  const getNextMonth = () => {
    if (activeMonth < 11) {
      setActiveMonth(activeMonth + 1);
    } else {
      setActiveMonth(0);
      setActiveYear(activeYear + 1);
    }
  };

  // Handle navigation to the previous month
  const getPreviousMonth = () => {
    if (activeMonth > 0) {
      setActiveMonth(activeMonth - 1);
    } else {
      setActiveMonth(11);
      setActiveYear(activeYear - 1);
    }
  };

  // Add event to a specific day
  const addEvent = () => {
    if (eventInput.trim() === '') return;

    const newEvents = { ...events };
    const dayKey = selectedDay;

    // If there are no events for this day, initialize an empty array
    if (!newEvents[dayKey]) newEvents[dayKey] = [];
    
    // Add the new event to the selected day
    newEvents[dayKey].push(eventInput.trim());

    // Update state with the new events
    setEvents(newEvents);
    setEventInput('');
    setShowEventForm(false);  // Close the event form
  };

  useEffect(() => {
    // Update February days if the year is a leap year
    monthsOfYear[1].days = isLeapYear(activeYear) ? 29 : 28;
  }, [activeYear]);

  // Handle day click to select day for adding event
  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowEventForm(true);  // Show the event form when a day is selected
  };

  // Mapping the days to calendar grid cells
  const mappedDays = calendarDays.map((day, index) => {
    if (day === null) return <div key={index}></div>;
    const isSelected = day === selectedDay;
    return (
      <div
        key={index}
        className={`p-2 cursor-pointer ${day === today ? 'bg-blue-500 text-white' : ''} ${isSelected ? 'bg-green-500 text-white' : ''}`}
        onClick={() => handleDayClick(day)}
      >
        {day}
      </div>
    );
  });

  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-md max-w-lg mx-auto">
      <div className="flex w-full items-center justify-between">
        <button className="hover:bg-blue-500 p-2 rounded-full" onClick={getPreviousMonth}>
          {/* Left Arrow Icon */}
          &#8592;
        </button>
        <h2 className="text-xl font-semibold mb-4">{monthsOfYear[activeMonth].month} {activeYear}</h2>
        <button className="hover:bg-blue-500 p-2 rounded-full" onClick={getNextMonth}>
          {/* Right Arrow Icon */}
          &#8594;
        </button>
      </div>
      
      <div className="grid grid-cols-7 text-center mb-2">
        {daysInWeek.map((day) => (
          <div key={day} className="font-bold">{day}</div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 text-center gap-2">
        {mappedDays}
      </div>

      {/* Event Form Modal */}
      {showEventForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold">Add Event for {selectedDay}</h3>
            <input
              type="text"
              value={eventInput}
              onChange={(e) => setEventInput(e.target.value)}
              className="w-full p-2 mt-2 border rounded"
              placeholder="Enter event description"
            />
            <div className="mt-4 flex justify-between">
              <button className="bg-blue-500 text-white p-2 rounded" onClick={addEvent}>Add Event</button>
              <button className="bg-red-500 text-white p-2 rounded" onClick={() => setShowEventForm(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Display Events for the Selected Day */}
      {selectedDay && events[selectedDay] && events[selectedDay].length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold">Events for {selectedDay}</h3>
          <ul className="list-disc pl-6">
            {events[selectedDay].map((event, index) => (
              <li key={index} className="mt-2">{event}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
