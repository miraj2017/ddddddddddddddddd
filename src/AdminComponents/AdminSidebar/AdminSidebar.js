import React, { useState } from "react";
import "./AdminSidebar.scss";
import adminSidebarMenus from "../../utilities/dashboardData";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const AdminSideBar = () => {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar">
          <div className="brand-logo">
            <h2>Logo</h2>
          </div>
          <nav className="sidebar-menus">
            {adminSidebarMenus.map((item, index) => (
              <SidebarMenuItem data={item} key={item.id} />
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default AdminSideBar;

const SidebarMenuItem = ({ data }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  return (
    <>
      <div className="sidebar-list-item d-flex justify-content-between align-items-center">
        <div>
          <span className="menu-icon">{data.icon}</span>
          <span className="menu-text">{data.text}</span>
        </div>
        {data.hasSubmenu && (
          <span onClick={() => setShowSubmenu(!showSubmenu)}>
            <IoIosArrowDropdownCircle />
          </span>
        )}
      </div>
      <div className="submenu-list-item">
        {showSubmenu && (
          <>
            {data.submenus.map((item) => (
              <div className="ps-3 mb-3">
                {/* <span className="menu-icon">{data.icon}</span> */}
                <span className="submenu-text">{data.text}</span>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};
