import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // const menuItems = <>
    //     <a href="#home">Home</a>
    //     <a href="#portfolio">Portfolio</a>
    //     <a href="#skill">Skill</a>
    //     <a href="#contact">Contact</a>
    //     <li><a className="btn text-white">Get started</a></li>
    // </>
    return (
        <div>
            <div className="navbar text-white lg:px-16">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#skill">Skills</a></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                            <li><a target='_blank' href='https://drive.google.com/file/d/1oswk8PGJJ7xXO4uCF-VpdVbIpHr6zP6l/view?usp=sharing'><button className='mobile-button'>Download Resume</button></a></li>
                        </ul>
                    </div>
                    <Link to='/'><p className=" text-xs lg:text-2xl font-semibold">AHSANUL HASAN KABBO</p></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#skill">Skills</a></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><a target='_blank' href='https://drive.google.com/file/d/1oswk8PGJJ7xXO4uCF-VpdVbIpHr6zP6l/view?usp=sharing' className="btn btn-primary text-white">Download Resume</a></li>
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;