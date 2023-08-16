import React from 'react';
import { CustomCardProps } from '@/types';

const buttonStyles = {
    borderRadius: '25px', // You can adjust the percentage as needed
    borderWidth: '1px',
    color: '#1A1558',
    borderColor:'#F0EFFA',
    backgroundColor:'#F0EFFA'
  };
  

const CustomCard = ({ title, description, customStyles, containerStyles, skills, customButton }: CustomCardProps) => { // Changed the prop name from CustomButton to customButton
  return (
    <div
      className={`custom-card ${containerStyles}`}
      style={customStyles}
    >
      <span className={`flex-1`}>{title}</span>
      <p>{description}</p>
      <ul>
        {skills.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {customButton} {/* Render the customButton component */}
    </div>
  );
}

export default CustomCard;
