import React from 'react';
import {Footer, Header} from "../../components";
import SectionOne from "./components/SectionOne/SectionOne";
import SectionAbout from "./components/SectionAbout/SectionAbout";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import SectionThree from "./components/SectionThree/SectionThree";

const Main = () => {
    return (
        <div className="container">
            <Header/>
            <SectionOne/>
            <SectionAbout/>
            <SectionTwo/>
            <SectionThree/>
            <Footer/>
        </div>
    );
};

export default Main;