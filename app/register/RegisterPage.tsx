"use client"
import React, { useState } from 'react';
import { CustomButton } from '../../components'; // Import your CustomButton component
import Link from 'next/link';

const RegisterPage = () => {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    phoneNo: "",
    about: "",
    skills: [],
    certifications: [],
    experience: [],
    education: [],
    image: null, // Add a new property for the image file
  });

    // Handle image file selection
    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setFormData({
          ...formData,
          image: selectedImage,
        });
      };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // For array fields, split the comma-separated values and convert to an array
    if (name === 'skills' || name === 'certifications' || name === 'experience' || name === 'education') {
      const valuesArray = value.split(',').map(item => item.trim());
      setFormData({
        ...formData,
        [name]: valuesArray,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleRegister = () => {
    const formDataWithImage = new FormData();
    formDataWithImage.append('image', formData.image);
    
    // Append other form data properties
    for (const key in formData) {
      if (key !== 'image') {
        formDataWithImage.append(key, formData[key]);
      }
    }


    fetch('https://myconnections1.onrender.com/register', {
      method: 'POST',
      body: formDataWithImage,
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); // You can handle the response data here
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };
  return (
     <div className="flex justify-center items-center h-screen bg-indigo-900">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full mb-3 px-3 py-2 rounded-md border"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="w-full mb-3 px-3 py-2 rounded-md border"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          className="w-full mb-3 px-3 py-2 rounded-md border"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full mb-3 px-3 py-2 rounded-md border"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="phoneNo"
          placeholder="Phone Number"
          className="w-full mb-3 px-3 py-2 rounded-md border"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="about"
          placeholder="About"
          className="w-full mb-3 px-3 py-2 rounded-md border"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="skills"
          placeholder="Skills"
          className="w-full mb-3 px-3 py-2 rounded-md border"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="certifications"
          placeholder="Certifications"
          className="w-full mb-3 px-3 py-2 rounded-md border"
          onChange={handleInputChange}
        />
         <input
          type="text"
          name="experience"
          placeholder="Experience"
          className="w-full mb-3 px-3 py-2 rounded-md border"
          onChange={handleInputChange}
        />
         <input
          type="text"
          name="education"
          placeholder="Education"
          className="w-full mb-3 px-3 py-2 rounded-md border"
          onChange={handleInputChange}
        />
       
       <input
          type="file" // Set the input type to "file" for image upload
          name="image"
          accept="image/*"
          className="w-full mb-3 px-3 py-2 rounded-md border"
          onChange={handleImageChange}
        />

        <CustomButton
          title="Register"
          btnType="button"
          containerStyles="bg-indigo-700 text-white py-2 rounded-md"
          customStyles={{ width: '100%' }}
          handleClick={handleRegister}
        />
        <p className="text-center mt-4">
          Not registered?{' '}
          <Link href="/login">
            <p className="text-indigo-700 underline">If aready registered? Click here to login.</p>
          </Link>
        </p>
       
        {/* Add a feature to upload an image from my PC */}
      </div>
    </div>
  )
}

export default RegisterPage