"use client"
// pages/TeamPage.js
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import JoinUs from '@/components/join-us';

const teamMembers = [
 
  {
    name: 'Fonyuy Patrick',
    position: 'Founder',
    image: 'https://images.pexels.com/photos/14940468/pexels-photo-14940468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icons:[{logo:'/facebook.png'}, {logo:'/instagram.png'}, {logo:'/linkedin.png'}]
  },

  {
    name: 'Fonyuy Jean Paul',
    position: 'Chief Executive Officer',
    image: 'https://images.pexels.com/photos/5816260/pexels-photo-5816260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Aspiring Teacher with a Bsc in Economics.',
    icons:[{logo:'/facebook.png'}, {logo:'/instagram.png'}, {logo:'/linkedin.png'}]
  },

  {
    name: 'Fonyuy Leonard',
    position: 'Chief Technical Officer',
    image: 'https://images.pexels.com/photos/4242520/pexels-photo-4242520.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icons:[{logo:'/facebook.png'}, {logo:'/instagram.png'}, {logo:'/linkedin.png'}]
  },

  {
    name: 'Fonyuy Gita',
    position: 'Software Engineer',
    image: 'https://images.pexels.com/photos/4242520/pexels-photo-4242520.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icons:[{logo:'/facebook.png'}, {logo:'/instagram.png'}, {logo:'/linkedin.png'}]
  },

  

  {
    name: 'John Doe',
    position: 'CEO',
    image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icons:[{logo:'/facebook.png'}, {logo:'/instagram.png'}, {logo:'/linkedin.png'}]
  },
  // Add more team members here
];

const TeamPage = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, []);
  return (
    <motion.section className='overflow-y-auto  '
    initial={{ y: "-200vh" }}
    animate={{ y: "0%" }}
    transition={{ duration: 1 }}>
    <div className="h-full overflow-scroll flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-yellow-300 to-yellow-800 ">
      <h1 className="text-4xl font-bold mt-8 mb-12">Our Team</h1>
      <div className="grid gap-8 grid-cols-1 mx-auto padding-5 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            
              initial={{y:60, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.9, type:"tween"}}
           
            className="relative  w-[320px]  mb-4mx-auto bg-gradient-to-b from-yellow-300 to-yellow-800 text-white rounded-lg shadow-md overflow-hidden"
            
          >
            <div className="relative h-50 mt-3">
              <Image
                src={member.image}
                alt={member.name}
              width={150}
              height={250}
               objectFit="cover"
                className="opacity-100 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center w-[250] h-[160px] mx-auto rounded-full"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl  text-center text-black font-bold">{member.name}</h2>
              <p className="text-blue-950 mb-4 text-center ">{member.position}</p>
              <p className="text-gray-900 text-center">{member.description}</p>
            <div className="absolute flex items-center flex-col  justify-center gap-5 top-6 left-4">
            {member.icons.map(icon=>(
              <Link href="" key={icon.logo}>
              <Image src={icon.logo} alt='socials' width={25} height={25} className='rounded-full'/>
              </Link>
            ))}
            
            </div>
            </div>
          </motion.div>
        ))}
      </div>
      <JoinUs/>
    </div>
    
    </motion.section>
  );
};

export default TeamPage;