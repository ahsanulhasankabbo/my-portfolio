import React from 'react';
import gadget from './image/gadget.png'
import car from './image/car-stock.png'
import tutor from './image/tutor-sheba.png'
import bike from './image/bike.png'
import phone from './image/gadget8.png'
import account from './image/monthly-account.png'

const ProjectDetails = () => {
    return (
        <div className='text-white px-4 lg:px-20'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-6'>
                <div class="card card-compact shadow-xl">
                    <figure><img src={gadget} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Gadget Depot</h2>
                        <p>This is a full-stack responsive react project where clients can buy bike parts. Users can go to the dashboard and pay for or cancel their orders. Only admins see all orders and their payment status in the dashboard. They can also ship paid orders. Admins can make normal users admin and add or delete products.</p>
                        <div class="card-actions justify-end">
                            <a target="_blank" href="https://github.com/ahsanulhasankabbo/gadget-depot-client-side"><button class="button">Client Side Code</button></a>
                            <div class="card-actions justify-end">
                                <a target="_blank" href="https://gadget-depot.web.app/"><button class="button">Live Website</button></a>
                                <a target="_blank" href="https://github.com/ahsanulhasankabbo/gadget-depot-server-side"><button class="button">Server Side Code</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-compact shadow-xl">
                    <figure><img src={car} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Car Stock</h2>
                        <p>This is another full stack responsive web application to manage store inventory. Where users can update the stock of a product by restocking or delivering products. The user can add or delete products from the list.</p>
                        <div class="card-actions justify-end">
                            <a target='_blank' href="https://github.com/ahsanulhasankabbo/car-stock-client-side"><button class="button">Client Side Code</button></a>
                            <div class="card-actions justify-end">
                                <a target='_blank' href="https://car-store-73d89.web.app/"><button class="button">Live Website</button></a>
                                <a target='_blank' href="https://github.com/ahsanulhasankabbo/car-stock-server-side"><button class="button">Server Side Code</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-compact shadow-xl">
                    <figure><img src={tutor} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Tutor Sheba</h2>
                        <p>This is a simple react website with routing and firebase authentication. Users can log in using email-password or google pop-up. Users cannot access the checkout page without logging in.</p>
                        <div class="card-actions justify-end">
                            <a target='_blank' href="https://tutor-sheba.web.app/"><button class="button">Live Website</button></a>
                            <a target='_blank' href="https://github.com/ahsanulhasankabbo/tutor-sheba"><button class="button">Client Side Code</button></a>
                        </div>
                    </div>
                </div>

                <div class="card card-compact shadow-xl">
                    <figure><img src={phone} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Gadget Colony</h2>
                        <p>This is a simple website with fake API. There are a search button on the top of the website. By hitting the search button with correct product name it can show all the products of the name in the bottom of the search box.</p>
                        <div class="card-actions justify-end">
                            <a target='_blank' href="https://gadget-depot-b82eb8.netlify.app/"><button class="button">Live Website</button></a>
                            <a target='_blank' href="https://github.com/ahsanulhasankabbo/gadget-depot"><button class="button">Client Side Code</button></a>
                        </div>
                    </div>
                </div>
                <div class="card card-compact shadow-xl">
                    <figure><img src={bike} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Bike Depot</h2>
                        <p>This is a simple react website with lot of Javascript function.A user can cart a product and it show on the side of the website.And also a user can randomly select a product from the cart product.</p>
                        <div class="card-actions justify-end">
                            <a target='_blank' href="https://bike-depot-fea9db.netlify.app/"><button class="button">Live Website</button></a>
                            <a target='_blank' href="https://github.com/ahsanulhasankabbo/bike-colony"><button class="button">Client Side Code</button></a>
                        </div>
                    </div>
                </div>
                <div class="card card-compact shadow-xl">
                    <figure><img src={account} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Monthly Account</h2>
                        <p>This is a simple website with lot of Javascript function.Here a user can set his income and expense and calculate his remaining balance and saving amount. It will show error if a user put invalid number.</p>
                        <div class="card-actions justify-end">
                            <a target='_blank' href="https://monthly-account-kabbo.netlify.app/"><button class="button">Live Website</button></a>
                            <a target='_blank' href="https://github.com/ahsanulhasankabbo/monthly-account"><button class="button">Client Side Code</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;