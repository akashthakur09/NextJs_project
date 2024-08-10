"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { z } from 'zod';
import { formSchema } from '@/Schema/formSchema';


function Formpage() {
    const [data, setData] = useState({
        full_name: '',
        email_id: '',
        phone_number: '',
        country_of_residence: '',
        message: ''
    });

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState<z.ZodIssue[]>([]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        const validation = formSchema.safeParse(data);

        if (!validation.success) {
            setErrors(validation.error.issues);
            return;
        }
        setErrors([]);

        console.log('Form data:', data);

        try {
            const res = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setMessage('Form submitted successfully!');
                setData({
                    full_name: '',
                    email_id: '',
                    phone_number: '',
                    country_of_residence: '',
                    message: ''
                });
            } else {
                const errorData = await res.json();
                console.error('Failed to submit form:', errorData); 
                setMessage('Failed to submit form.');
            }
        } catch (error) {
            console.error('An error occurred:', error); 
            setMessage('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {

        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Failed to fetch forms:', error);
            }

        }
        fetchUserData();

    }, []);


    return (
        <div className="flex flex-col md:flex-row justify-center items-center py-10 bg-white px-4 md:px-10">
            <div className="bg-blue-100 p-2 rounded-lg shadow-lg w-full md:w-1/2 mb-6 md:mb-0 border-2 border-blue-200">
                <form className="space-y-6 p-2 md:p-10" onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Full Name*"
                            name="full_name"
                            value={data.full_name}
                            onChange={(e) => setData({ ...data, full_name: e.target.value })}
                            className="w-full p-3 rounded-md border-2 border-blue-200 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {errors.find(err => err.path.includes('full_name')) && (
                            <p className="text-red-500 text-sm">
                                {errors.find(err => err.path.includes('full_name'))?.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email*"
                            name='email_id'
                            value={data.email_id}
                            onChange={(e) => setData({ ...data, email_id: e.target.value })}
                            className="w-full p-3 rounded-md border-2 border-blue-200 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {errors.find(err => err.path.includes('email_id')) && (
                            <p className="text-red-500 text-sm">
                                {errors.find(err => err.path.includes('email_id'))?.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <input
                            type="tel"
                            placeholder="Phone number*"
                            name='phone_number'
                            value={data.phone_number}
                            onChange={(e) => setData({ ...data, phone_number: e.target.value })}
                            className="w-full p-3 rounded-md border-2 border-blue-200 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {errors.find(err => err.path.includes('phone_number')) && (
                            <p className="text-red-500 text-sm">
                                {errors.find(err => err.path.includes('phone_number'))?.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Country of Residence*"
                            name="country_of_residence"
                            value={data.country_of_residence}
                            onChange={(e) => setData({ ...data, country_of_residence: e.target.value })}
                            className="w-full p-3 rounded-md border-2 border-blue-200 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {errors.find(err => err.path.includes('country_of_residence')) && (
                            <p className="text-red-500 text-sm">
                                {errors.find(err => err.path.includes('country_of_residence'))?.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <textarea
                            placeholder="How can we serve you"
                            name="message"
                            value={data.message}
                            onChange={(e) => setData({ ...data, message: e.target.value })}
                            className="w-full p-3 rounded-md border-2 border-blue-200 focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.find(err => err.path.includes('message')) && (
                            <p className="text-red-500 text-sm">
                                {errors.find(err => err.path.includes('message'))?.message}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 bg-gray-800 text-white rounded-md hover:bg-gray-700"
                        disabled={loading}
                    >
                        {loading ? 'Submitting...' : 'Request a callback'}
                    </button>
                    {message && <p className="mt-4">{message}</p>}
                </form>
            </div>

            <div className="flex flex-col space-y-6 w-full md:w-1/2 lg:w-1/3 md:ml-10">
                <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-100">
                    <h2 className="text-lg font-bold mb-2 text-center">Ontario Office</h2>
                    <p className="text-center">Mon-Fri 9:30am - 6pm</p>
                    <p className="text-gray-400 text-xs">Suite1500, 4 Robert Speck Pkwy, Mississauga, Ontario, Canada, L4Z 1S1</p>
                    <div className="flex justify-between mt-2">
                        <p className="text-xs text-blue-900"><a href="tel:+19057837708">+1-905-783-7708</a></p>
                        <p className="text-xs text-blue-900"><a href="mailto:info@admitspot.com">info@admitspot.com</a></p>
                    </div>
                    <Image src="/assets/firstmap.png" alt="Ontario Office Map" width={400} height={150} className="mt-4 rounded-md" />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-100">
                    <h2 className="text-lg font-bold mb-2 text-center">New Brunswick Office</h2>
                    <p className="text-center">Mon-Fri 9:30am - 6pm</p>
                    <p className="text-gray-400 text-xs">Suite 406, 82 Westmorland Street, Fredericton, New Brunswick, Canada, E3B 3L3</p>
                    <div className="flex justify-between mt-2">
                        <p className="text-xs text-blue-900"><a href="tel:+15069997708">+1-506-999-7708</a></p>
                        <p className="text-xs text-blue-900"><a href="mailto:info@admitspot.com">info@admitspot.com</a></p>
                    </div>
                    <Image src="/assets/secondmap.png" alt="New Brunswick Office Map" width={400} height={150} className="mt-4 rounded-md" />
                </div>
            </div>
        </div>
    );
}

export default Formpage;
