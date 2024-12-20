

import React, { useState } from 'react';
import Navbar from "../common/Navbar.tsx"
import SideBar from '../common/SideBar.jsx';
import { PatientCard } from '../secretary/SecretaryCards.tsx';
import { Badge, Button, Card, Group, Paper, Text } from '@mantine/core';
import { IconBrandOffice, IconDentalBroken, IconReceipt, IconUsersGroup } from '@tabler/icons-react';



export const PatientsCard = () => {

    const totalPatients = 9;
    return (
        <Paper>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    {/* <Image
                        src="../../assets/icons/doctor.png"
                        height={160}
                        alt="Debits"
                    /> */}
                    <IconUsersGroup className="text-teal-900 m-4"/>
                </Card.Section>
                <Group justify="space-between" mt="md" mb="xs">
                    <Text size="xl" fw={500}>Patients</Text>
                    <Badge color="teal"> {totalPatients} </Badge>
                </Group>
                <Text size="sm" c="diamond">
                    Total Patients Served to date
                </Text>
                

            </Card>
        </Paper>
    );
}

export const PaymentsCard = () => {

    const totalPayments = 9000.00;
    return (
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
                    <Text size="xl" fw={500}>Payments</Text>
                    <Badge color="teal"> {totalPayments} ETB</Badge>
                </Group>
                <Text size="sm" c="diamond">
                    Total Payments received to date
                </Text>
                
            </Card>
        </Paper>
    );
}

export const EmployeesCard = () => {

    const totalEmployees = 100;
    return (
        <Paper>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    {/* <Image
                        src="../../assets/icons/doctor.png"
                        height={160}
                        alt="Debits"
                    /> */}
                    <IconBrandOffice className="text-teal-900 m-4"/>
                </Card.Section>
                <Group justify="space-between" mt="md" mb="xs">
                    <Text size="xl" fw={500}>Employees</Text>
                    <Badge color="teal"> {totalEmployees} </Badge>
                </Group>
                <Text size="sm" c="diamond">
                    Total Number of Employees to date
                </Text>
                
            </Card>
        </Paper>
    );
}


export const ServicesCard = () => {

    const totalServices = 50;
    return (
        <Paper>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    {/* <Image
                        src="../../assets/icons/doctor.png"
                        height={160}
                        alt="Debits"
                    /> */}
                    <IconDentalBroken className="text-teal-900 m-4"/>
                </Card.Section>
                <Group justify="space-between" mt="md" mb="xs">
                    <Text size="xl" fw={500}>Dental Care Services</Text>
                    <Badge color="teal"> {totalServices} </Badge>
                </Group>
                <Text size="sm" c="diamond">
                    Total Dental Care Services available to date
                </Text>
                
            </Card>
        </Paper>
    );
}