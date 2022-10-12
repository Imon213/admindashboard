import React from "react";
import "./Sidebar.css";
import logo from "../imgs/logo.png";
import { sidebar } from "../Data/Data";
import { UilSignOutAlt,UilBars } from "@iconscout/react-unicons";
import { useState } from "react";
import {motion} from 'framer-motion';
const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [Expanded, setExpended] = useState(true);
  const sidebarVariants = {
    true:{
      left: '0'
    },
    false:{
      left: '-90%'
    }
  }
  return (
   <>
   <div className="bars"style={Expanded?{left:'80%'}:{left:'5%'}}
   onClick={()=>setExpended(!Expanded)}
   >
        <UilBars/>
      </div>
    <motion.div className="sidebar"
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${Expanded}` :''}
    >
      <div className="logo">
        <img src={logo} alt="" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      <div className="menu">
        {sidebar.map((item, index) => (
          <div
            key={index}
            className={selected === index ? "menu-item active" : "menu-item"}
            onClick={() => setSelected(index)}
          >
            <div className="icon">
              <item.icon />
            </div>
            <span> {item.heading}</span>
          </div>
        ))}
        <UilSignOutAlt />
      </div>
    </motion.div>
   </>
  );
};

export default Sidebar;
