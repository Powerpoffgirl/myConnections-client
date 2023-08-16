"use client"
import React, { useState } from 'react';
import Link from 'next/link'; // Import Link for navigation
import { CustomButton } from '../../components'; // Import your CustomButton component
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
  const router = useRouter(); // Initialize router
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('https://myconnections1.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log("USER DATA AT AFTER LOGIN", data)
      if (response.status === 200) {
        const {_id, token } = data;

        console.log("TOKEN", token)
        // Store the token in localStorage or secure storage
        localStorage.setItem('accessToken', token);
        localStorage.setItem("userId", _id);
        console.log("LOGIN SUCCESSFULL")
  
        router.push('/profilepage'); // Navigate to profilepage
      } else {
        console.log('Login failed:', data.message);
        // Handle login failure, show error message, etc.
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className="flex justify-center items-center h-screen bg-indigo-900">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="w-full mb-3 px-3 py-2 rounded-md border"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-3 px-3 py-2 rounded-md border"
          onChange={handleInputChange}
        />
        <CustomButton
          title="Login"
          btnType="button"
          containerStyles="bg-indigo-700 text-white py-2 rounded-md"
          customStyles={{ width: '100%' }}
          handleClick={handleLogin}
        />
        <p className="text-center mt-4">
          Not registered?{' '}
          <Link href="/register">
            <p className="text-indigo-700 underline">Click here to register</p>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
