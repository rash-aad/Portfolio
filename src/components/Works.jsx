import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { profile } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProfileCard = ({
  index,
  name,
  description,
  image,
  source_code_link,
  icon,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='profile_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={icon}
                alt='source code'
                className='w-8 h-8 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>MY PRESENCE</p>
        <h2 className={`${styles.sectionHeadText}`}>Profiles.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          These platforms showcase my ongoing contributions, coding skills, and professional activities through real-world challenges and projects.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {profile.map((profile, index) => (
          <ProfileCard key={`profile-${index}`} index={index} {...profile} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
