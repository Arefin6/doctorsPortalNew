import React from 'react';
import Navbar from '../../Header/Navbar';
import Footer from '../../Footer/Footer';
import { useState } from 'react';
import AppointHeader from './AppointmentHeader';
import BookAppointment from './BookAppointment';

const GetAppointmentScreen = () => {
    const [selectedDate,setSelectedDate] = useState(new Date);
    const handleDateChange = date =>{
        setSelectedDate(date);
    }
    return (
        <div>
           <Navbar></Navbar>
           <AppointHeader handleDateChange={handleDateChange}></AppointHeader>
           <BookAppointment date={selectedDate}></BookAppointment>
           <Footer></Footer>
        </div>
    );
};

export default GetAppointmentScreen;