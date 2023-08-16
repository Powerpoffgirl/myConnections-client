"use client"
import Image from 'next/image';
import React, {useState, useEffect} from 'react';
import CustomButton from './CustomButton'; // Import the CustomButton component
import CustomCard from './CustomCard'; // Import the CustomCard component
// import { CustomCardProps } from '@/types';

const buttonStyles = {
  borderRadius: '25px', // You can adjust the percentage as needed
  borderWidth: '1px',
  color: '#1A1558',
  borderColor:'#F0EFFA',
  backgroundColor:'#F0EFFA'
};

const cardStyles = {
  borderRadius: '4px',
  borderWidth: '1px',
  color: 'black',
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 3.555555582046509px 5.333333492279053px 0px rgba(0, 0, 0, 0.0225)' // Adjust values as needed
};


const skills = [""]

const Myprofile = () => {

  const [userDetails, setUserDetails] = useState({
    name:"",
    username:"",
    email:"",
    phoneNo:"",
    about:"",
    certifications:[],
    skills:[],
    experience:[],
    education:[]
  })

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('accessToken');

      if (token) {
        try {
          const response = await fetch('https://myconnections1.onrender.com/auth/getUserDetails', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });

          const data = await response.json();
          console.log("DATA FROM RESPONSE", data.data);
          setUserDetails({
            name: data.data.name,
            username: data.data.username,
            email: data.data.email,
            phoneNo: data.data.phoneNo,
            about: data.data.about,
            certifications: data.data.certifications,
            skills: data.data.skills,
            experience: data.data.experience,
            education: data.data.education
          });
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      } else {
        console.warn("No access token available.");
      }
    };

    fetchUserData();
  }, []);
  

  return (
    <div>
       <div className='profileContainer' style={{ backgroundColor: '#FFFFFF', width:'618px', height:'600px', borderRadius:'5px',border:'3px solid #EBEBEE', marginLeft:'50px' , marginTop:'-81px', display:'flex', justifyContent:"space-evenly" }}>
        <div className='profileLeft'>
          <div>
            ProfileImage
            <Image src="/profilePic.jpg" alt="profilePic" width="100" height="100"/>
            <CustomButton
                title="Upload"
                btnType="button"
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                customStyles={buttonStyles}
            />
          </div>
          <div>
            ProfileContact
            <CustomCard
              title='Your Name'
              description={userDetails.name}
              containerStyles=''
              customStyles={cardStyles}
              skills={skills}
              customButton={<CustomButton
                title="Edit"
                btnType="button"
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                customStyles={buttonStyles}
              />}
            />
          </div>
          <div>
          <CustomCard
              title={`About ${userDetails.username}`}
              description={userDetails.about}
              containerStyles=''
              customStyles={cardStyles}
              skills={skills}
              customButton={<CustomButton
                title="Edit"
                btnType="button"
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                customStyles={buttonStyles}
              />}
            />
          </div>
          <div>
          <CustomCard
              title='Skills'
              description=''
              containerStyles=''
              customStyles={cardStyles}
              skills={userDetails.skills}
              customButton={<CustomButton
                title="Edit"
                btnType="button"
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                customStyles={buttonStyles}
              />}
            />
          </div>
        </div>
        <div className='profileRight'>
          <div>
          Professional Details
            <CustomCard
              title=''
              description='This aree the professional Details shown to users in the app.'
              containerStyles=''
              customStyles={cardStyles}
              skills={skills}
              customButton={<CustomButton
                title="Edit"
                btnType="button"
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                customStyles={buttonStyles}
              />}
            />
          </div>
          <div>
            Certifications
            <CustomCard
              title=''
              description=''
              containerStyles=''
              customStyles={cardStyles}
              skills={userDetails.certifications}
              customButton={<CustomButton
                title="Edit"
                btnType="button"
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                customStyles={buttonStyles}
              />}
            />
          </div>
          <div>
            Experience
            <CustomCard
              title=''
              description=''
              containerStyles=''
              customStyles={cardStyles}
              skills={userDetails.experience}
              customButton={<CustomButton
                title="Edit"
                btnType="button"
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                customStyles={buttonStyles}
              />}
            />
          </div>

          <div>
            Education
            <CustomCard
              title=''
              description=''
              containerStyles=''
              customStyles={cardStyles}
              skills={userDetails.education}
              customButton={<CustomButton
                title="Edit"
                btnType="button"
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                customStyles={buttonStyles}
              />}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Myprofile