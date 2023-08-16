import React from 'react'
import { CustomButton } from '.'

const buttonStyles = {
  borderRadius: '9px', // You can adjust the percentage as needed
  borderWidth: '1px',
  color: '#1A1558',
  borderColor:'#1A1558'
};

const TopBar = () => {
  return (
    <header className='header h-25'>
   <nav className='navBar h-25 flex justify-end items-center pt-3 pb-3'>
        <CustomButton 
          title="Sign In"
          btnType="button"
          containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
          customStyles={buttonStyles}
        />
        <CustomButton 
          title="Sign In"
          btnType="button"
          containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
          customStyles={buttonStyles}
        />
        <CustomButton 
          title="Sign In"
          btnType="button"
          containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
          customStyles={buttonStyles}
        />
      </nav>
   </header>
  )
}

export default TopBar