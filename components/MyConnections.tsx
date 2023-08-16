"use client"
import React, { useEffect, useState } from 'react';
import { CustomButton, CustomCard } from '.'; // Make sure to use the correct import path for CustomButton and CustomCard

const buttonStyles = {
  borderRadius: '25px',
  borderWidth: '1px',
  color: '#1A1558',
  borderColor: '#F0EFFA',
  backgroundColor: '#F0EFFA',
};

const skills = ["geography", "c++"]; // Fixed the typo

const MyConnections = () => {
  console.log("My Connections")
  // Fetch data from API and store in an array
  // const [followingList, setFollowingList] = useState([])
  const [followerList, setFollowerList] = useState([])
  let token: string | null = null;
  let _id: string | null = null;

  if (typeof window !== 'undefined') {
    token = localStorage.getItem('accessToken');
    _id = localStorage.getItem('userId');
  }
  useEffect(()=>{
   const fetchFollowers = async()=>{
      if (token) {
        console.log("Token",token)
        try {
          const response = await fetch('https://myconnections1.onrender.com/follow/follower-list', {
            method: 'POST', // Change to POST method
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
  
          const data = await response.json();
          console.log("DATA FROM FOLLOWERS LIST", data);
          setFollowerList(data.data); // Update the state with fetched data
        } catch (error) {
          console.error("Error fetching connections", error);
        }
      } else {
        console.warn("No access token available.");
      }
    }
    fetchFollowers();
  },[token, _id])

  // useEffect(() => {
  //   const fetchConnections = async () => {

  //     if (token) {
  //       try {
  //         const response = await fetch('https://myconnections1.onrender.com/follow/following-list', {
  //           method: 'POST', // Change to POST method
  //           headers: {
  //             'Authorization': `Bearer ${token}`,
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({
  //             followingUserId: _id,
  //           })
  //         });
  
  //         const data = await response.json();
  //         console.log("DATA FROM CONNECTIONS RESPONSE", data);
  //         setFollowingList(data.data); // Update the state with fetched data
  //       } catch (error) {
  //         console.error("Error fetching connections", error);
  //       }
  //     } else {
  //       console.warn("No access token available.");
  //     }
  //   };
  
  //   fetchConnections();
  // }, []);
  
  
  const connections = [
    {
      name: "Jyoti",
      profession: "FullStack Developer",
      companyName: "Oruphone"
    },
    {
      name: "Jyoti",
      profession: "FullStack Developer",
      companyName: "Oruphone"
    },
    {
      name: "Jyoti",
      profession: "FullStack Developer",
      companyName: "Oruphone"
    }
  ];

  return (
    <div>
      <h1 className="text-center">My Connections</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <CustomCard
            title='Your Name'
            description='Vishnu Swaroop'
            containerStyles=''
            customStyles={buttonStyles}
            skills={skills}
            customButton={<CustomButton
              title="Custom Button Title"
              btnType="button"
              containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
              customStyles={buttonStyles}
            />}
          />
        </div>
        {connections.map((connection, index) => (
          <div key={index}>
            <CustomCard
              title={connection.name}
              description={`${connection.profession} @ ${connection.companyName}`}
              containerStyles=''
              customStyles={buttonStyles}
              skills={skills}
              customButton={<CustomButton
                title="Custom Button Title"
                btnType="button"
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                customStyles={buttonStyles}
              />}
            />
          </div>
        ))}
        <br>
        </br>
        <h2>Pleope you can connect with</h2>
        {connections.map((connection, index) => (
          <div key={index}>
            <CustomCard
              title={connection.name}
              description={`${connection.profession} @ ${connection.companyName}`}
              containerStyles=''
              customStyles={buttonStyles}
              skills={skills}
              customButton={<CustomButton
                title="Custom Button Title"
                btnType="button"
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                customStyles={buttonStyles}
              />}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyConnections;
