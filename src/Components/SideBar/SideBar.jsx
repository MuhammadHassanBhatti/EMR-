import React, { useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");

  const handleMenuItemClick = (menuItemName) => {
    setSelectedMenuItem(menuItemName);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "scroll initial"
      }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#842d72">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          {selectedMenuItem && (
            <span className="text-decoration-none" style={{ color: "inherit" }}>
              {selectedMenuItem}
            </span>
          )}
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              exact
              to="/inbox"
              activeClassName="activeClicked"
              onClick={() => handleMenuItemClick("Inbox")}
            >
              <CDBSidebarMenuItem icon="envelope">Inbox</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/schedule-appointment"
              activeClassName="activeClicked"
              onClick={() => handleMenuItemClick("Schedule Appointment")}
            >
              <CDBSidebarMenuItem icon="fa-solid fa-calendar-check">
                Schedule Appointment
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/history"
              activeClassName="activeClicked"
              onClick={() => handleMenuItemClick("History")}
            >
              <CDBSidebarMenuItem
                className="user-icon-bar"
                icon="fa-solid fa-clock-rotate-left"
              >
                History
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/medications-refills"
              activeClassName="activeClicked"
              onClick={() => handleMenuItemClick("Medications & Refills")}
            >
              <CDBSidebarMenuItem icon="fa-solid fa-notes-medical">
                Medications & Refills
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/lab-results"
              activeClassName="activeClicked"
              onClick={() => handleMenuItemClick("Lab Results")}
            >
              <CDBSidebarMenuItem icon="fa-solid fa-square-poll-vertical">
                Lab Results
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/allergies"
              activeClassName="activeClicked"
              onClick={() => handleMenuItemClick("Allergies")}
            >
              <CDBSidebarMenuItem icon="fa-solid fa-virus">
                Allergies
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/bills"
              activeClassName="activeClicked"
              onClick={() => handleMenuItemClick("Bills")}
            >
              <CDBSidebarMenuItem icon="fa-solid fa-wallet">
                Bills
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default SideBar;
