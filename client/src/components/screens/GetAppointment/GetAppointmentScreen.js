import React from 'react';
import Navbar from '../../Header/Navbar';
import Footer from '../../Footer/Footer';
import { useState } from 'react';
import AppointHeader from './AppointmentHeader';
import BookAppointment from './BookAppointment';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const GetAppointmentScreen = () => {
    const [selectedDate,setSelectedDate] = useState(new Date);
    const handleDateChange = date =>{
        setSelectedDate(date);
    }
    const history = useHistory()

    const userLogin = useSelector(state => state.userLogin)
      const {userInfo} = userLogin
       
      if(!userInfo){
          history.push('/login')
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