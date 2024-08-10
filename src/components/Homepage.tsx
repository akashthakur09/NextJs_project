
import React from 'react';
import Image from 'next/image';

function Homepage() {
    return (
        <div className="bg-white">
            <div className="bg-blue-200" style={{ height: "55px" }}></div>
            <div className="bg-white px-4 py-10 md:px-20">
                <div className="mb-10">
                    <h1 className="text-3xl font-bold mb-5">Contact Us</h1>
                    <p className="font-medium text-lg">Resolve your Education and Immigration Queries with our experts</p>
                    <p className="text-md text-blue-500">Reach out to us to inquire about various services offered at AdmitSpot</p>
                </div>

                <div className="flex flex-wrap justify-center md:justify-between mt-10 space-x-0 md:space-x-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg mb-4 md:mb-0 w-full md:w-auto">
                        <a href="tel:+19057837708" aria-label="Call">
                            <Image src="/assets/call.png" alt="call" width={50} height={50} />
                        </a>
                        <h1 className="pt-2 font-semibold">Call</h1>
                        <p className="pt-2">+1-905-783-7708</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg mb-4 md:mb-0 w-full md:w-auto">
                        <a href="mailto:info@admitspot.com" aria-label="Email">
                            <Image src="/assets/mail.png" alt="mail" width={50} height={50} />
                        </a>
                        <h1 className="pt-2 font-semibold">E-mail</h1>
                        <p className="pt-2">info@admitspot.com</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-auto">
                        <a href="https://wa.me/19057837708" aria-label="WhatsApp">
                            <Image src="/assets/whatsapp.jpeg" alt="whatsapp" width={50} height={50} />
                        </a>
                        <h1 className="pt-2 font-semibold">WhatsApp</h1>
                        <p className="pt-2">+1-905-783-7708</p>
                    </div>
                </div>
            </div>



            <div className="bg-white rounded-lg border-2 border-blue-200 flex flex-col md:flex-row md:m-20 md:p-0 sm:m-5 sm:p-10">
                <Image src="/assets/first.png" alt="first" width={400} height={200} className="rounded-lg mb-4 md:mb-0" />
                <div className="ml-0 md:ml-5 flex-grow">
                    <h1 className="text-2xl md:text-4xl font-bold mb-3 mt-10">Virtual Office</h1>
                    <p className="text-lg md:text-2xl mb-2">Schedule a session with one of our Experts.</p>
                    <ul className="list-none space-y-2">
                        <li className="text-lg text-blue-500 flex items-start">
                            <span className="mr-2 text-blue-500">✓</span>
                            Free consultation up to 30 mins
                        </li>
                        <li className="text-lg text-blue-500 flex items-start">
                            <span className="mr-2 text-blue-500">✓</span>
                            Join from anywhere
                        </li>
                        <li className="text-lg text-blue-500 flex items-start">
                            <span className="mr-2 text-blue-500">✓</span>
                            Get all your queries answered
                        </li>
                    </ul>
                </div>
                <div className="bg-blue-400 md:w-1/10 mt-4 md:mt-0" style={{width:"10%"}}></div>
            </div>
        </div>
    );
}

export default Homepage;
