
import React from 'react';
import Image from 'next/image';
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FaLinkedin, FaInstagramSquare, FaWhatsappSquare, FaTiktok, FaYoutube, FaFacebookSquare } from "react-icons/fa";

function Footer() {
    return (
        <>
        <Image src="/assets/img.png" alt="AdmitSpot Logo" width={1550} height={40} className="mb-4" />
        <div className="bg-gray-800 text-gray-300 py-10 px-4">
            <div className="max-w-6xl mx-auto">

                <div className="flex md:flex-wrap md:justify-between md:flex-row sm:flex-col">
                    
                    <div className="w-full sm:w-full md:w-1/3 mb-6">
                        <Image src="/assets/footerlogo.png" alt="AdmitSpot Logo" width={150} height={40} className="mb-4" />
                        <p className="text-sm">&copy; 2023 AdmitSpot, Inc. All rights reserved.</p>
                        <div className="mt-4">
                            <div className="flex items-center">
                                <CiLocationOn className="text-blue-500 mr-3" />
                                <span>Ontario, Canada <a href="#" className="text-blue-500">Get Directions</a></span>
                            </div>
                            <div className="flex items-center mt-2">
                                <CiLocationOn className="text-blue-500 mr-3" />
                                <span>New Brunswick, Canada <a href="#" className="text-blue-500">Get Directions</a></span>
                            </div>
                            <div className="flex items-center mt-2">
                                <IoCallOutline className="text-blue-500 mr-3" />
                                <span>+1-905-783-7708</span>
                            </div>
                            <div className="flex items-center mt-2">
                                <IoMailOutline className="text-blue-500 mr-3" />
                                <span>info@admitspot.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-full md:w-2/3 flex flex-wrap">
                        <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
                            <h2 className="text-lg font-bold mb-4 text-blue-300">Company</h2>
                            <ul>
                                <li><a href="#" className="hover:underline">About us</a></li>
                                <li><a href="#" className="hover:underline">Contact us</a></li>
                            </ul>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
                            <h2 className="text-lg font-bold mb-4 text-blue-300">Solutions</h2>
                            <ul>
                                <li><a href="#" className="hover:underline">Students</a></li>
                                <li><a href="#" className="hover:underline">Universities</a></li>
                                <li><a href="#" className="hover:underline">Employers</a></li>
                            </ul>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
                            <h2 className="text-lg font-bold mb-4 text-blue-300">Support</h2>
                            <ul>
                                <li><a href="#" className="hover:underline">Immigration services</a></li>
                                <li><a href="#" className="hover:underline">Blogs</a></li>
                                <li><a href="#" className="hover:underline">Virtual offices</a></li>
                            </ul>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
                            <h2 className="text-lg font-bold mb-4 text-blue-300">Legal</h2>
                            <ul>
                                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                                <li><a href="#" className="hover:underline">Privacy policy</a></li>
                                <li><a href="#" className="hover:underline">Cookies policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center space-x-4 mt-6">
                    <a href="#" aria-label="LinkedIn"><FaLinkedin className="text-2xl text-blue-500" /></a>
                    <a href="#" aria-label="Instagram"><FaInstagramSquare className="text-2xl text-blue-500" /></a>
                    <a href="#" aria-label="WhatsApp"><FaWhatsappSquare className="text-2xl text-blue-500" /></a>
                    <a href="#" aria-label="Facebook"><FaFacebookSquare className="text-2xl text-blue-500" /></a>
                    <a href="#" aria-label="YouTube"><FaYoutube className="text-2xl text-blue-500" /></a>
                    <a href="#" aria-label="TikTok"><FaTiktok className="text-2xl text-blue-500" /></a>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer;