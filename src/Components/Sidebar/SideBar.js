import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/users",
    name: "Personal Information",
    icon: <FaUser />,
    
  },
  {
    path: "/messages",
    name: "Exams",
    icon: <MdMessage />,
  },
  {
    path: "/analytics",
    name: "Graphs",
    icon: <BiAnalyse />,
  },
  {
    path: "/file-manager",
    name: "Location",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Pune",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "Germany",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Bangalore",
        icon: <FaMoneyBill />,
      },
      {
        path: "/settings/hydrabad",
        name: "Hyderabad",
        icon: <FaMoneyBill />,

      },
    ],
  },
  
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/Feedback Form",
    name: "Feedback Form",
    icon: <AiFillHeart />,
  },
];


const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.5,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="flex h-screen bg-gray-200">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar bg-[#0A1C3E] text-white flex flex-col `}
        >
          <div className="flex items-center justify-between p-4">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Admin
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="flex items-center bg-gray-200 rounded p-2">
            <div className="mr-2">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                  className="bg-transparent outline-none"
                />
              )}
            </AnimatePresence>
          </div>

          <section className="routes">
            <div className="flex flex-col flex-wrap justify-between items-start overflow-y-auto">
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
                    <div className="flex items-center p-2">
                      <div className="mr-2">{route.icon}</div>
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

export default SideBar;
