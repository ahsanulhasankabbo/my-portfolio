import React from 'react';
import github from './image/GitHub-Mark.png';
import linkedIn from './image/linkedin-logo-3.png';
import facebook from './image/facebook-logo-13.png';
import "./About.css"

const About = () => {
    return (
        <div className='my-10 px-6 lg:px-20 text-white' id='about'>
            <h1 className='text-3xl font-semibold text-center mb-4'>About Me</h1>
            <p>I am Ahsanul Hasan Kabbo, Junior Front-End Developer Experience with React js for the Front-End and Node Express Js I use for BackEnd Develpment. As a Database to store data in the MongoDB. I want to create my carrier in Software Industry. I am curious to know something new in my life. Exploring is my passion.</p>
            <div className='icon flex justify-center'>
                <a target='_blank' href="https://www.linkedin.com/in/ahsanul-hasan-kabbo-64291522b/"><img src={linkedIn} alt="" /></a>
                <a target='_blank' href="https://github.com/ahsanulhasankabbo"><img src={github} alt="" /></a>
                <a target='_blank' href="https://www.facebook.com/ahsanulhasan.kabbo.9"><img src={facebook} alt="" /></a>
            </div>
        </div>
    );
};

export default About;