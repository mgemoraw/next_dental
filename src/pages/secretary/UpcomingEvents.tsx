import React from 'react';  

import {Badge, Button, Card, Group, Image, Paper, Text} from "@mantine/core";



const upcomingMeetings = [  
    { time: '10:00 AM', date: "some date", title: 'Team Standup' },  
    { time: '1:00 PM', date: "some date", title: 'Project Kickoff' },  
    { time: '3:00 PM',  date: "some date", title: 'Client Meeting' },  
];  

const UpcomingMeetings = () => {  
    return (  
        <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-md mt-4">  
            <h2 className="text-xl font-semibold mb-4">Upcoming Meetings</h2>  
            <ul>  
                {upcomingMeetings.map((meeting, index) => (  
                    
                    <Group>
                        <li key={index} className="flex justify-between border-b py-2">  
                        <span>{meeting.time}</span>  
                        <span>{meeting.title}</span>  
                    </li>  
                    </Group>
                ))}  
            </ul>  
        </div>  
    );  
};  

export default UpcomingMeetings;