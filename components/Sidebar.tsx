"use client"
import React from 'react';
import { CustomButton } from '.';
import { useRouter } from 'next/navigation';

const buttonStyles = {
  borderRadius: '9px', // You can adjust the percentage as needed
  borderWidth: '1px',
  color: '#1A1558',
  borderColor:'#1A1558'
};

const SideBar = () => {
  const router = useRouter(); // Initialize router

  let token: string | null = null;
  if (typeof window !== 'undefined') {
    // Access localStorage only in the browser environment
    token = localStorage.getItem('accessToken');
  }
  const handleLogout = async () => {
    try {
      const response = await fetch('https://myconnections1.onrender.com/auth/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
  
      const data = await response.json();
      console.log("DATA ", data)
     
      if (response.status === 200) {
        console.log('Logout successful');
  
        // Clear the JWT token from localStorage
      localStorage.removeItem('accessToken');

      // Navigate to the login page
      router.push('/');

      } else {
        console.error('Logout failed:', data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  // Function to go to Profile Page on button click.
  const handleToProfile=()=>{
    router.push('/profilepage');
  }

  const handleToConnections=()=>{
    router.push('/connections');
  }

  return (
    <div className="h-screen bg-gray-200">
    <nav className="bg-white flex flex-col justify-between h-full p-6 border-r border-black">
      <div className="space-y-4">
        <CustomButton
          title="Dashboard"
          btnType="button"
          containerStyles="text-primary-black rounded-full bg-white border border-black min-w-[130px]"
          customStyles={{ borderRadius: '9px', borderWidth: '1px',
          color: 'black',
          fontWeight:800,
          borderColor:'grey'}}
        />
        <CustomButton
          title="My Profile"
          btnType="button"
          containerStyles="text-primary-black rounded-full bg-white border border-black min-w-[130px]"
          customStyles={buttonStyles}
          handleClick={handleToProfile}
        />
        <CustomButton
          title="My Connections"
          btnType="button"
          containerStyles="text-primary-black rounded-full bg-white border border-black min-w-[130px]"
          customStyles={buttonStyles}
          handleClick={handleToConnections}
        />
      </div>
      <div>
          <CustomButton
            title="Logout"
            btnType="submit"
            containerStyles="text-primary-blue rounded-full bg-white border border-black min-w-[130px]"
            customStyles={buttonStyles}
            handleClick={handleLogout}
          />
      </div>
    </nav>
  </div>
  );
};


export default SideBar;
