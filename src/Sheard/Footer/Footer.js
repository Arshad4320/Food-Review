import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-slate-900 text-neutral-content">
            <div >
                <span className="font-bold text-2xl text-orange-500">Services</span>
                <a href='/' className="link link-hover text-white font-semibold text-md">Branding</a>
                <a href='/' className="link link-hover text-white font-semibold text-md">Design</a>
                <a href='/' className="link link-hover text-white font-semibold text-md">Marketing</a>
                <a href='/' className="link link-hover text-white font-semibold text-md">Advertisement</a>
            </div>
            <div>
                <span className="font-bold text-2xl text-orange-500">Food Details</span>
                <a href='/' className="link link-hover text-white font-semibold text-md">About us</a>
                <a href='/' className="link link-hover text-white font-semibold text-md">Contact</a>
                <a href='/' className="link link-hover text-white font-semibold text-md">Jobs</a>
                <a href='/' className="link link-hover text-white font-semibold text-md">Press kit</a>
            </div>
            <div>
                <span className="font-bold text-2xl text-orange-500">Legal</span>
                <a href='/' className="link link-hover text-white font-semibold text-md">Terms of use</a>
                <a href='/' className="link link-hover text-white font-semibold text-md">Privacy policy</a>
                <a href='/' className="link link-hover text-white font-semibold text-md">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;