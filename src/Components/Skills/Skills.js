import React from 'react';

const Skills = () => {
    return (
        <div className='my-10 px-6 lg:px-20 text-white' id='skill'>
            <h1 className='text-3xl font-semibold my-6' >My Skills</h1>
            <div className='w-full lg:w-1/2'>
                <p>HTML</p>
                <progress class="progress progress-primary w-full" value="90" max="100"></progress>
                <p>CSS</p>
                <progress class="progress progress-primary w-full" value="85" max="100"></progress>
                <p>Javascript</p>
                <progress class="progress progress-primary w-full" value="65" max="100"></progress>
                <p>Bootstrap CSS</p>
                <progress class="progress progress-primary w-full" value="80" max="100"></progress>
                <p>Tailwind CSS</p>
                <progress class="progress progress-primary w-full" value="85" max="100"></progress>
                <p>ReactJs</p>
                <progress class="progress progress-primary w-full" value="70" max="100"></progress>
                <p>NodeJs</p>
                <progress class="progress progress-primary w-full" value="60" max="100"></progress>
                <p>ExpressJs</p>
                <progress class="progress progress-primary w-full" value="65" max="100"></progress>
                <p>MongoDB</p>
                <progress class="progress progress-primary w-full" value="72" max="100"></progress>
            </div>
        </div>
    );
};

export default Skills;