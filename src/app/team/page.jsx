"use client"
// pages/TeamPage.js
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const teamMembers = [
 
  {
    name: 'John Doe',
    position: 'CEO',
    image: 'https://images.pexels.com/photos/14940468/pexels-photo-14940468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },

  {
    name: 'John Doe',
    position: 'CEO',
    image: 'https://images.pexels.com/photos/5816260/pexels-photo-5816260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },

  {
    name: 'John Doe',
    position: 'CEO',
    image: 'https://images.pexels.com/photos/4242520/pexels-photo-4242520.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },

  {
    name: 'John Doe',
    position: 'CEO',
    image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    <div className="h-full overflow-scroll flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-4xl font-bold mt-8 mb-12">Our Team</h1>
      <div className="grid gap-8 grid-cols-1 mx-auto padding-5 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="w-[320px] mx-auto bg-gradient-to-b from-yellow-300 to-black text-white rounded-lg shadow-md overflow-hidden"
            
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
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-gray-500 mb-4">{member.position}</p>
              <p className="text-gray-600">{member.description}</p>
              <Link href="/" lassName="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300 mt-[2rem]">
               
                  View Profile
             
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </motion.section>
  );
};

export default TeamPage;