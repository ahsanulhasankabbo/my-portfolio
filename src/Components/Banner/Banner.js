import React from 'react';
import image from './image/banner2.png';
import './Banner.css'

const Banner = () => {
    return (
        <div id='#home'>
            <div class="hero min-h-screen text-white">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img className='lg:w-1/3' src={image} alt='' />
                    <div className='px-6'>
                        <h1 class="text-5xl font-bold">Hi! I'am Kabbo</h1>
                        <h1 class="text-5xl font-bold title">A web developer</h1>
                        <p class="py-6">A passionate full stack web developer having an experience of building web applications with Javascript, reactjs, nodejs and some other cool library and frameworks.</p>
                        <a target='_blank' href='https://drive.google.com/file/d/1e8464FFb6J9ixX4kkR8IVnL47mjNf41z/view?usp=sharing'><button class="btn btn-primary text-white">Download Resume</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;