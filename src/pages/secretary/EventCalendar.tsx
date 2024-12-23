import React , {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import {Indicator} from "@mantine/core";
import {Calendar} from "@mantine/dates";
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

export const CalendarCard = () => {  
    
    return (  
        <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-md">
          <Calendar
            static
            renderDay = {(date) => {
              const day = date.getDate();
              return (
                <Indicator size={6} color="red" offset={-2} disabled={day !== 16}>
                  <div>{day}</div>
                </Indicator>
              );
            }}
          />
        </div> 
    );  
};  



const isLeapYear = (year) => {
  if (year % 100 === 0 ? year % 400 === 0 : year%4 === 0){
    return true;
  }
  else {
    return false;
  }
}


export const CustomCalendarCard = () => {
  const [activeMonth, setActiveMonth] = useState(new Date().getMonth());
  const [activeYear, setActiveYear] = useState(new Date().getFullYear());
  const [today, setToday] = useState(new Date().getDate());
  const [selectedDay, setSelectedDay] = useState(null);  // Track the selected day
  
  const currentYear = new Date().getFullYear();

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

  const markToday = (day, month, year) => {
    let currentDate = new Date(); 
    if (day === today && activeYear === currentDate.getFullYear() && activeMonth === currentDate.getMonth())
      {
        return true;
      } 
      return false;
  }
  // Get the next month
  const getNextMonth = () => {
    if (activeMonth < 11) {
      setActiveMonth(activeMonth + 1);
    } else {
      setActiveMonth(0);
      setActiveYear(activeYear + 1);
    }
  };


  // Get the previous month
  const getPreviousMonth = () => {
    if (activeMonth > 0) {
      setActiveMonth(activeMonth - 1);
    } else {
      setActiveMonth(11);
      setActiveYear(activeYear - 1);
    }
  };

  useEffect(() => {
    // Update the days in February in case of a leap year
    monthsOfYear[1].days = isLeapYear(activeYear) ? 29 : 28;
  }, [activeYear]);

  // Mapping the days to calendar grid cells
  const mappedDays = calendarDays.map((day, index) => {
    if (day === null) return <div key={index}></div>;
    const isSelected = day === selectedDay;
    return (
      <div
        key={index}
        className={`p-2 cursor-pointer ${(markToday(day, activeMonth, activeYear) ) ? 'bg-blue-500 text-white' : ''} ${isSelected ? 'bg-green-500 text-white' : ''}`}
        onClick={() => setSelectedDay(day)}
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
    </div>
  );
};
        


export const CustomCalendarWidget = () => {
  const [activeMonth, setActiveMonth] = useState(new Date().getMonth());
  const [activeYear, setActiveYear] = useState(new Date().getFullYear());
  const [today, setToday] = useState(new Date().getDate());
  const [selectedDay, setSelectedDay] = useState(null);
  const [events, setEvents] = useState({});  // Store events by day
  
  const [eventInput, setEventInput] = useState(''); // Input for adding event
  const [eventDetail, setEventDetail] = useState(''); // Input for adding event

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

  // highlites the day today
  const markToday = (day, month, year) => {
    let currentDate = new Date(); 
    if (day === today && activeYear === currentDate.getFullYear() && activeMonth === currentDate.getMonth())
      {
        return true;
      } 
      return false;
  }
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
    setEventInput('');  // Clear the input after adding
  };

  useEffect(() => {
    // Update February days if the year is a leap year
    monthsOfYear[1].days = isLeapYear(activeYear) ? 29 : 28;
  }, [activeYear]);

  // Handle day click to select day for adding event
  const handleDayClick = (day) => {
    setSelectedDay(day);  // Set the clicked day
    setEventInput('');     // Reset the input field when a day is selected
  };

  // Mapping the days to calendar grid cells
  const mappedDays = calendarDays.map((day, index) => {
    if (day === null) return <div key={index}></div>;
    const isSelected = day === selectedDay;
    return (
      <div
        key={index}
        className={`p-2 cursor-pointer ${markToday(day, activeMonth, activeYear) ? 'bg-blue-500 text-white' : ''} ${isSelected ? 'bg-green-500 text-white' : ''}`}
        onClick={() => handleDayClick(day)}
      >
        {day}
      </div>
    );
  });

  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-md max-w-lg mx-auto">
      <div className="flex w-full items-center justify-between">
        <button className="hover:bg-blue-500 pl-4 pr-4 rounded-full " onClick={getPreviousMonth}>
          {/* Left Arrow Icon */}
          &#8592;
        </button>
        <h2 className="text-xl font-semibold mb-4">{monthsOfYear[activeMonth].month} {activeYear}</h2>
        <button className="hover:bg-blue-500 pl-4 pr-4 rounded-full" onClick={getNextMonth}>
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

      {/* Add Event Form */}
      {selectedDay && (
        <div className="mt-4">
          <h3 className="font-semibold">Add Event for {selectedDay}-{monthsOfYear[activeMonth].month.slice(0,3)}-{activeYear}</h3>
          <input
            type="text"
            value={eventInput}
            onChange={(e) => setEventInput(e.target.value)}
            className="w-full p-2 mt-2 border rounded"
            placeholder="Enter event title"
          />
          <button
            className="bg-blue-500 text-white p-2 mt-2 rounded w-full"
            onClick={addEvent}
          >
            Add Event
          </button>
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


interface Event {  
  date: number;  
  title: string;  
}  

export const CalendarWidget: React.FC = () => {  
  const [events, setEvents] = useState<Event[]>([]);  
  const [eventInput, setEventInput] = useState<string>('');  
  const today = dayjs();  
  const daysInMonth = today.daysInMonth();  
  const firstDayOfMonth = today.startOf('month').day();  

  const handleAddEvent = () => {  
    if (eventInput) {  
      const date = today.date(); // Assume adding events to today's date  
      setEvents([...events, { date, title: eventInput }]);  
      setEventInput('');  
    }  
  };  

  const renderDays = (): any => {  
    const days: any = [];  
    for (let i = 0; i < firstDayOfMonth; i++) {  
      days.push(<div key={`empty-${i}`} className="w-1/7 h-20"></div>);  
    }  
    for (let day = 1; day <= daysInMonth; day++) {  
      const isToday = day === today.date();  
      const hasEvent = events.some(event => event.date === day);  
      days.push(  
        <div  
          key={day}  
          className={`w-1/7 h-20 flex flex-col items-center justify-center border ${isToday ? 'bg-blue-200' : 'bg-white'}`}  
        >  
          <span className="text-lg">{day}</span>  
          {hasEvent && <span className="text-sm text-red-500">📅</span>}  
        </div>  
      );  
    }  
    return days;  
  };  

  return (  
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg">  
      <h2 className="text-xl font-bold text-center mb-4">{today.format('MMMM YYYY')}</h2>  
      <div className="grid grid-cols-7 gap-1">  
        {renderDays()}  
      </div>  
      <div className="mt-4">  
        <input  
          type="text"  
          value={eventInput}  
          onChange={(e) => setEventInput(e.target.value)}  
          className="border rounded p-2 w-full"  
          placeholder="Add event"  
        />  
        <button  
          onClick={handleAddEvent}  
          className="mt-2 w-full bg-blue-500 text-white rounded p-2"  
        >  
          Add Event  
        </button>  
      </div>  
    </div>  
  );  
};  


