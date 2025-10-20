import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt="" />
                <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam libero earum quis dicta doloribus illum. Blanditiis nulla quaerat modi ratione praesentium minus voluptatibus eum tempore eligendi eos, ullam, labore maiores!</p>
            </div>
            <div></div>
            <div></div>
        </div>
        <div>
            <div></div>
        </div>
    </div>
  )
}

export default Footer
