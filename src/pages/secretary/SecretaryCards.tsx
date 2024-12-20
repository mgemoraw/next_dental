import React, {useState, useEffect} from 'react';
import {Badge, Button, Card, Group, Image, Paper, Text} from "@mantine/core"
import {
    IconReceipt, 
    IconCoin,
    IconReport, 
    IconRepeat, 
    IconCreditCard,
    IconDeviceWatch,
    IconMessage,
    IconAlarm,
    IconMessage2,
    IconBell,
    IconUsersGroup,
    IconNotification
    } from "@tabler/icons-react";
import dayjs from 'dayjs';  

export  const DebitCard = () => {

    const totalPayments = 1600.00 ;

    return (
        <>
        <Paper>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    {/* <Image
                        src="../../assets/icons/doctor.png"
                        height={160}
                        alt="Debits"
                    /> */}
                    <IconReceipt className="text-teal-900 m-4"/>
                </Card.Section>
                <Group justify="space-between" mt="md" mb="xs">
                    <Text size="xl" fw={500}>Total Debit</Text>
                    <Badge color="teal"> {totalPayments} ETB</Badge>
                </Group>
                <Text size="sm" c="diamond">
                    Total Paymens to date
                </Text>
                <Button color="blue" fullWidth mt="md" radius="md">View Details</Button>

            </Card>
        </Paper>
        
        </>
    );
}

export  const CreditCard = () => {
    const totalCredits = 8000.00;
    return (
        <>
        <Paper>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <IconCreditCard className="text-pink-900 m-4"/>
                </Card.Section>
                <Group justify="space-between" mt="md" mb="xs">
                    <Text size="xl" fw={500}>Total Credits</Text>
                    <Badge color="pink"> {totalCredits} ETB</Badge>
                </Group>
                <Text size="sm" c="diamond">
                    Total Paymens to date
                </Text>
                <Button  color="pink" c="white" fullWidth mt="md" radius="md" >View Details</Button>

            </Card>
        </Paper>
        
        </>
    );
}


export const MessageCard = () => {
    const totalMessages = 29;
    const messages = [
        {id: 1, message: "some text message", date: "10/3/2017", time: "18:40LT"},
        {id: 2, message: "some text message", date: "12/2/2017", time: "18:40LT"},
        {id: 3, message: "some text message", date:"15/2/2017", time: "18:40LT"},
        {id: 4, message: "some text message", date: "1/2/2017", time: "18:40LT"},
        {id: 5, message: "some text message", date: "11/4/2017", time: "18:40LT"},
    ];

    var mappedMessages = messages.map((element, index)=>(
        <Group className="hover:bg-blue-400" justify="space-between" mt="md" mb="xs">
            {/* <Text>{index+1}</Text> */}
            <Text>{element.time}</Text>
            <Text>{element.date}</Text>
            <Text>{element.message} </Text>
        </Group>
    ));
    return (
        <>
        <Paper>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section >
                    <Group justify="start" mt="md" mb="xs">
                    <IconMessage className="font-xl text-pink-900 ml-4 mr-4"/>
                    <Text size="xl" fw={500}>Messages</Text>
                    <Badge color="pink"> {totalMessages} </Badge>

                    </Group>
                </Card.Section>
                
                <div>
                    {mappedMessages}
                </div>
                <Button  color="pink" c="white" fullWidth mt="md" radius="md" >View Details</Button>

            </Card>
        </Paper>
        
        </>
    );
}


export const AppointmentCard = () => {
    const [appointmentsList, setAppointmentList] = useState(null);

    const appointments = [
        {pid: 1, date: "10/03/2017", time: `10:00LT`, diagnosis: "something new"},
        {pid: 2, date: "10/03/2017", time: `10:00LT`, diagnosis: "something new"},
        {pid: 3, date: "10/03/2017", time: `10:00LT`, diagnosis: "something new"},
        {pid: 4, date: "10/03/2017", time: `10:00LT`, diagnosis: "something new"},
        {pid: 5, date: "10/03/2017", time: `10:00LT`, diagnosis: "something new"},
        
    ]
    function viewDetails(){
        //
    }

    useEffect(()=>{
        // fetchAppointments()
    }, [])

    var mappedAppointments = appointments.map((element, index)=>(
        <Group className="hover:bg-blue-400" justify="space-between" mt="md" mb="xs">
            {/* <Text>{index+1}</Text> */}
            <Text>{element.time}</Text>
            <Text>{element.date}</Text>
            <Text>{element.diagnosis} </Text>
        </Group>
    ));
    return (
        <>
        <Paper>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>

                    <Group justify="start" mt="md" mb="xs">
                        <IconAlarm className="text-pink-900 m-4"/>

                        <Text size="xl" fw={500}>Appointments</Text>
                        <Badge color="blue"> {appointments.length} </Badge>
                    </Group>
                </Card.Section>
               
                <Text size="sm" c="diamond">
                   Latest Appointments
                </Text>
                <div>
                    {mappedAppointments}
                </div>
                <Button  color="blue" c="white" fullWidth mt="md" radius="md" onClick={viewDetails} >View Details</Button>

            </Card>
        </Paper>
        
        </>
    );
}


export const PatientCard = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const totalMessages = 29;
    const patients = [
        {pid: 1, fname: "Abebe", mname: "Kebede", lname:"Jema", createdAt:"10/03/2017", updatedAt: "10/03/2017"},
        {pid: 2, fname: "Abebe", mname: "Kebede", lname:"Jema", createdAt:"10/03/2017", updatedAt: "10/03/2017"},
        {pid: 3, fname: "Abebe", mname: "Kebede", lname:"Jema", createdAt:"10/03/2017", updatedAt: "10/03/2017"},
        {pid: 4, fname: "Abebe", mname: "Kebede", lname:"Jema", createdAt:"10/03/2017", updatedAt: "10/03/2017"},
        {pid: 5, fname: "Abebe", mname: "Kebede", lname:"Jema", createdAt:"10/03/2017", updatedAt: "10/03/2017"},
        
    ]
    function viewDetails() {
        setTabIndex(2)
    }

    var mappedPatients = patients.map((element, index)=>(
        <Group className="hover:bg-blue-400" justify="space-between" mt="md" mb="xs">
            <Text>{index+1}</Text>
            <Text>{element.fname} {element.mname} {element.lname}</Text>
            <Text>{element.createdAt}</Text>
        </Group>
    ));
    return (
        <>
        <Paper>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Group justify="start" mt="md" mb="xs">
                        <IconUsersGroup className="text-pink-900 m-4"/>
                        <Text size="xl" fw={500}>Patients</Text>
                        <Badge color="blue"> {patients.length} </Badge>
                    </Group>
                </Card.Section>
                <Text size="xl" fw={500}>
                    Latest Records
                </Text>
                <div>
                    {mappedPatients}
                </div>
                <Button  onClick={viewDetails} color="blue" c="white" fullWidth mt="md" radius="md" >View Details</Button>

            </Card>
        </Paper>
        
        </>
    );
}


export const UpcomingEvents = () => {
    const events = [
        {title: "event 1", date: "18/04/2017", time: "10:00LT"},
        {title: "event 2", date: "19/04/2017", time: "10:00LT"},
        {title: "event 3", date: "20/04/2017", time: "9:30LT"},
        {title: "event 4", date: "25/04/2017 ", time: "10:00LT"}
    ]
    const viewDetails = () => {
        // detail implementation
    }

    var mappedEvents = events.map((event, index) => (
        <Group className="hover:bg-blue-400" justify="space-between" mt="md" mb="xs">
            {/* <Text>{index+1}</Text> */}
            <Text>{event.time}</Text>
            <Text>{event.date}</Text>
            <Text>{event.title}</Text>
        </Group>
    ));
    return (
        <>
        <Paper>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Group justify="start" mt="md" mb="xs">
                        <IconNotification className="text-blue-900 m-4"/>
                        <Text size="xl" fw={500}>Upcoming Events</Text>
                        <Badge color="blue"> {events.length} </Badge>
                    </Group>
                </Card.Section>
                
                <div >
                    {mappedEvents}
                </div>
                
                <Button  onClick={viewDetails} color="blue" c="white" fullWidth mt="md" radius="md" >View Details</Button>

            </Card>
        </Paper>
        
        </>
    );
}

