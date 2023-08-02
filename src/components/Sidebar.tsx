import React, { useEffect, useState } from 'react';
import { GiConqueror } from "react-icons/gi";
import { HiMenuAlt3 } from "react-icons/hi";
import { ImSearch } from "react-icons/im";
import { AiFillHome, AiOutlineClose, AiTwotoneAppstore, AiFillSave, AiOutlineLogout } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";

const Sidebar = () => {
  const [isMenuClose, setIsMenuClose] = useState(false);

  const listOfIcons = [
    {
      name: "Home",
      path: "/",
      icon: <AiFillHome />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <FaUserAlt />,
    },
    {
      name: "Applications",
      path: "/applications",
      icon: <AiTwotoneAppstore />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FcSettings />,
    },
    {
      name: "Saved",
      path: "/saved",
      icon: <AiFillSave />,
    },
    {
      name: "Logout",
      path: "/logout",
      icon: <AiOutlineLogout />,
    },
  ];


  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 768) {

       setIsMenuClose(true)
       
      } else if (windowWidth >= 768 && windowWidth < 1024) {
     
     setIsMenuClose(false)
        
      } else {
        
         setIsMenuClose(false)
      }
    };

    // Initial setup on component mount
    handleResize();

    // Attach event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div>
      {isMenuClose ? (
        <div className='bg-blue-950 text-white pb-5 h-full w-full'>
          <div className='flex flex-col space-y-10 px-5 py-5'>
            <div className='mx-auto cursor-pointer' onClick={()=>setIsMenuClose(false)}>
              <HiMenuAlt3 size={20} />
            </div>
            {listOfIcons.map((icon) => {
              return (
                <div key={icon.name} className='flex px-5 items-center space-x-5'>
                  {/* Add a key prop for each mapped element */}
                  <div className='text-2xl'>{icon.icon}</div>
                  
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className='bg-blue-950 text-white pb-5 h-full w-full pt-5'>
          <div className='flex space-x-5 justify-between items-center mx-auto px-2 py-3 lg:px-5 '>
            <div  classname=''>
              <GiConqueror size={50} />
            </div>
            <div className='font-bold text-yellow-400 text-xl lg:text-3xl lg:me-4'>
              RecruitYes
            </div>
            <a className='cursor-pointer'>
              <div className='text-xl lg:text-3xl font-bold' onClick={() => setIsMenuClose(true)}>
                <AiOutlineClose />
              </div>
            </a>
          </div>
          <div className='container mt-10 md:mt-4 lg:mt-10 relative flex items-center '>
            <div className='absolute top-[30%] left-10'>
              <ImSearch size={20} />
            </div>
            <input type="text" className='w-full rounded-lg h-10 bg-slate-500 placeholder:text-white ps-14 py-3 text-xl' placeholder='search..' />
          </div>
          <div className='flex flex-col my-10 space-y-8 md:space-y-6 lg:space-y-8'>
            {listOfIcons.map((icons) => {
              return (
                <div key={icons.name} className='flex ps-10 items-center space-x-4'>
                  {/* Add a key prop for each mapped element */}
                  <div className='text-2xl md:text-lg lg:text-xl font-bold'>{icons.icon}</div>
                  <div className='text-xl md:text-lg  font-bold '>{icons.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
