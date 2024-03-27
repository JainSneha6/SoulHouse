import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signup', formData);
      console.log(response.data); 
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };
  return (
    <div className="bg-000215 min-h-screen bg-cover bg-center flex flex-wrap-row items-center justify-center">
      <div className="hidden md:block w-full max-w-md mt-5 p-6 md:p-8 bg-blue-900 border-black-300 shadow-2xl bg-opacity-50 relative h-[85vh]">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-white text-6xl font-bold mb-8 ml-15">Welcome!</h1>
        </div>
      </div>
      <div className="w-full max-w-md mt-5 p-6 md:p-8 bg-white border shadow-2xl bg-opacity-50 relative relative h-[85vh]">
        <div className="text-center md:mb-8">
          <h2 className="text-2xl font-bold text-black">Create an account</h2>
        </div>

        <form className="space-y-4 md:space-y-6 pl-4" action="#" method="POST">
          <div className="flex justify-between">
            <div className="flex flex-col mr-4">
              <label htmlFor="firstName" className="block text-sm font-medium leading-1 text-black">
                First Name
              </label>
              <div className="mt-0.5">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.0 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName" className="block text-sm font-medium leading-1 text-black">
                Last Name
              </label>
              <div className="mt-1">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.0 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-1 text-black">
              Email Address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.0 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Email Address"
                value={formData.email}
                  onChange={handleChange}
              />
            </div>
          </div>
<div>
            <label htmlFor="phone" className="block text-sm font-medium leading-1 text-black">
              Phone number
            </label>
            <div className="mt-1">
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="block w-full rounded-md border-0 py-1.0 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-1 text-black">
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="block w-full rounded-md border-0 py-1.0 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Password"
                value={formData.password}
                  onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium leading-1 text-black">
              Confirm Password
            </label>
            <div className="mt-1">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="block w-full rounded-md border-0 py-1.0 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="New Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button onClick={handleSubmit}
              type="submit"
              className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-1 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-2 text-center text-sm text-000215">
          Already have an account?{' '}
          
            <button className="font-semibold leading-6 text-black hover:text-blue-900 focus:outline-none">
              Log in
            </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;