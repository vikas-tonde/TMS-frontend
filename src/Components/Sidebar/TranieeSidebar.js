import { BiAnalyse } from "react-icons/bi";
import { FaBars, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { NavLink } from "react-router-dom";
import {  FaHome} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/trainee/dashboard",
    name: "DashBoard",
    icon: <FaHome />,
    
  },
  {
    path: "/trainee/profile",
    name: "Personal Information",
    icon: <FaUser />,
    
  },
  {
    path: "/trainee/exams",
    name: "Exams",
    icon: <MdMessage />,
  },
  
  {
    path: "/logout",
    name: "Log out",
    icon: <FaSignOutAlt />,
  },
];


const TranieeSidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  

  const showAnimation = {
    hidden: {
      opacity: 1,
      padding: "5px 15px",
      width: "180px",
      transition: {
        duration: 0.9,
      },
    },
    show: {
      opacity: 1,
      padding: "5px 15px",
      width: "180px",
      transition: {
      duration: 0.9,

      },
    },
  };

  return (
    <>
      <div className=" sticky top-0 h-screen ">
        <motion.div
          animate={{
            width: isOpen ? "250px" : "50px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
        
          }}
          className={`sidebar bg-[#0A1C3E] text-white flex flex-col min-h-screen`}
        
        >
          <div className="flex flex-none content-center justify-between p-4">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                Trainee Dashboard
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars ">
              <FaBars onClick={toggle} />
            </div>
          </div>
          

          <section className="routes">
            <div className="flex flex-col flex-wrap justify-between items-start ">
              {routes.map((route, index) => {
                if (route.subRoutes) {
                  return (
                    <SidebarMenu
                      setIsOpen={setIsOpen}
                      route={route}
                      showAnimation={showAnimation}
                      isOpen={isOpen}
                      key={index}
                    />
                  );
                }

                return (
                  <NavLink
                    to={route.path}
                    key={index}
                    className="link"
                    activeClassName="active"
                  >
                    <div className="flex items-center p-4">
                      <div className="mr-4">{route.icon}</div>
                      <div>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              variants={showAnimation}
                              initial="hidden"
                              animate="show"
                              exit="hidden"
                              className="link_text"
                            >
                              {route.name}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </section>
        </motion.div>

        <div className="flex-grow">{children}</div>
      </div>
    </>
  );
};

export default TranieeSidebar;
