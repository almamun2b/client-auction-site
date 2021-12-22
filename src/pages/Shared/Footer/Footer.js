import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-left col-md-4 col-sm-6">
                    <p className="about">
                        <span>Auction Site</span> We offers a new, safe and convenient way of selling your Product throughout the world. Use our free Product valuation service regardless of make and model to determine the best used Product price. Take advantage of the professional and gratis Product inspection and the fast Product buying service by SellAnyProduct.com - the perfect alternative to time-consuming and tiring advertisements.
                    </p>

                </div>
                <div className="footer-center col-md-4 col-sm-6">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span> 420, Bhooter Goli</span> Dhaka, Bangladesh</p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p> 01710-000000</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><Link to="/home">office@company.com</Link></p>
                    </div>
                </div>
                <div className="footer-right col-md-4 col-sm-6">
                    <h2><span>Auction Site</span></h2>
                    <p className="menu">
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/home">Products</Link>
                        <Link to="/home">Contact</Link>
                    </p>
                    <p className="name">Auction Site &copy; 2021</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

