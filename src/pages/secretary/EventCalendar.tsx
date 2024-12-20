import React , {useState} from 'react';
import dayjs from 'dayjs';


export const CalendarCard = () => {  
    const daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];  
    const daysInMonth = new Array(31).fill(null).map((_, index) => index + 1);  

    return (  
        <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-md">  
            <h2 className="text-xl font-semibold mb-4">Calendar</h2>  
            <div className="grid grid-cols-7 text-center mb-2">  
                {daysInWeek.map((day) => (  
                    <div key={day} className="font-bold">{day}</div>  
                ))}  
            </div>  
            <div className="grid grid-cols-7 text-center">  
                {daysInMonth.map((day) => (  
                    <div key={day} className="p-2">{day}</div>  
                ))}  
            </div>  
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