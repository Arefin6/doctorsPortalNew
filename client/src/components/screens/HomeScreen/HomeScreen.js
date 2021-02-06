import React from 'react';
import FeaturedService from '../../FeaturedService/FeaturedService';
import Header from '../../Header/Header';
import Services from '../../Services/Services';
import MakeAppointment from '../../MakeAppointment/MakeAppoinrment'
import Testimonials from '../../Testimonials/Testimonials';
import BlogHome from '../../Blogs/BlogHome';
import Doctors from '../../Doctors/Doctors';
import Contact from '../../Contact/Contact';
import Footer from '../../Footer/Footer';

const HomeScreen = () => {
    return (
        <>
         <Header></Header>
         <Services></Services>
         <FeaturedService></FeaturedService>
         <MakeAppointment></MakeAppointment>
         <Testimonials></Testimonials>
         <BlogHome></BlogHome>
         <Doctors></Doctors>
         <Contact></Contact>
         <Footer></Footer>
         
        </>
    );
};

export default HomeScreen;