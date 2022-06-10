import React from 'react';
import gadget from './image/gadget.png'
import car from './image/car-stock.png'
import tutor from './image/tutor-sheba.png'
import './Portfolio.css';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className='my-10 px-6 lg:px-20 text-white' id='portfolio'>
            <h1 className='text-3xl font-semibold'>My Projects : </h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-6'>
                <div class="card card-compact shadow-xl">
                    <figure><img src={gadget} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Gadget Depot</h2>
                        <p>This is a full-stack responsive react project where clients can buy bike parts. Users can go to the dashboard and pay for or cancel their orders. Only admins see all orders and their payment status in the dashboard. They can also ship paid orders. Admins can make normal users admin and add or delete products.</p>
                        {/* <div class="card-actions justify-end">
                            <a target="_blank" href="https://github.com/ahsanulhasankabbo/gadget-depot-client-side"><button class="button">Client Side Code</button></a>
                            <div class="card-actions justify-end">
                                <a target="_blank" href="https://gadget-depot.web.app/"><button class="button">Live Website</button></a>
                                <a target="_blank" href="https://github.com/ahsanulhasankabbo/gadget-depot-server-side"><button class="button">Server Side Code</button></a>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div class="card card-compact shadow-xl">
                    <figure><img src={car} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Car Stock</h2>
                        <p>This is another full stack responsive web application to manage store inventory. Where users can update the stock of a product by restocking or delivering products. The user can add or delete products from the list.</p>
                        {/* <div class="card-actions justify-end">
                            <a target='_blank' href="https://github.com/ahsanulhasankabbo/car-stock-client-side"><button class="button">Client Side Code</button></a>
                            <div class="card-actions justify-end">
                                <a target='_blank' href="https://car-store-73d89.web.app/"><button class="button">Live Website</button></a>
                                <a target='_blank' href="https://github.com/ahsanulhasankabbo/car-stock-server-side"><button class="button">Server Side Code</button></a>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div class="card card-compact shadow-xl">
                    <figure><img src={tutor} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Tutor Sheba</h2>
                        <p>This is a simple react website with routing and firebase authentication. Users can log in using email-password or google pop-up. Users cannot access the checkout page without logging in.</p>
                        {/* <div class="card-actions justify-end">
                            <a target='_blank' href="https://tutor-sheba.web.app/"><button class="button">Live Website</button></a>
                            <a target='_blank' href="https://github.com/ahsanulhasankabbo/tutor-sheba"><button class="button">Client Side Code</button></a>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <Link to='/details'><button className='btn btn-primary text-white'>Show Details</button></Link>
            </div>
        </div>
    );
};

export default Portfolio;