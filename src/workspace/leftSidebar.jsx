// LeftSidebar.jsx
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import {
  faSwatchbook,
  faUsersRectangle,
  faUserCheck,
  faArrowRightFromBracket,
  faListAlt,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const adminLinks = [
  { to: "/workspace/dashboard", icon: faChartLine, label: "Dashboard" },
  { to: "/workspace/mangas", icon: faSwatchbook, label: "Mangas" },
  { to: "/workspace/users", icon: faUsersRectangle, label: "Users" },
  { to: "/workspace/companies", icon: faArrowRightFromBracket, label: "Exit" },
];

const superAdminLinks = [
  { to: "/admin/dashboard", icon: faChartLine, label: "Dashboard" },
  { to: "/admin/mangas", icon: faSwatchbook, label: "Mangas" },
  { to: "/admin/users", icon: faUsersRectangle, label: "Users" },
  { to: "/admin/roles", icon: faUserCheck, label: "Roles" },
  { to: "/admin/categories", icon: faListAlt, label: "Categories" },
];

function SidebarMenu({ large, onToggle }) {
  const { user } = useSelector((state) => state.auth);
  const links = user?.role === "super_admin" ? superAdminLinks : adminLinks;

  return (
    <ul className="left-menu">
      <li>
        <a
          href="#"
          className="js-sidebar-open sidebar-link"
          style={{ marginBottom: '5px', marginLeft: '3px' }}
          onClick={(e) => {
            e.preventDefault();
            onToggle();
          }}
        >
          <svg
            className={
              large
                ? "olymp-close-icon left-menu-icon"
                : "olymp-menu-icon left-menu-icon"
            }
          >
            <use
              href={large ? "#olymp-close-icon" : "#olymp-menu-icon"}
            ></use>
          </svg>
          {large && <span className="left-menu-title">Collapse Menu</span>}
        </a>
      </li>

      {links.map(({ to, icon, label }) => (
        <li key={to}>
          <Link
            to={to}
            data-bs-placement="right"
            title={label}
            className="sidebar-link"
            style={{marginBottom: '10px'}}
          >
            <FontAwesomeIcon
              icon={icon}
              className="left-menu-icon fa-icon"
              fixedWidth
            />
            {large && <span className="left-menu-title">{label}</span>}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function LeftSidebar() {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    const sidebar = document.querySelector(".fixed-sidebar.left");
    sidebar?.classList.toggle("open");
    setExpanded((prev) => !prev);
  };

  const toggleMobileSidebar = () => {
    const sidebar = document.querySelector(
      ".fixed-sidebar.left.fixed-sidebar-responsive"
    );
    sidebar?.classList.toggle("open");
  };

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach(
      (tooltipTriggerEl) => new window.bootstrap.Tooltip(tooltipTriggerEl)
    );
  }, [expanded]);

  useEffect(() => {
    // Apply small icon CSS globally
    const style = document.createElement("style");
    style.innerHTML = `
      .fa-icon {
        font-size: 1.25rem; /* ≈20px like Olympus default */
        width: 20px;
        height: 20px;
        vertical-align: middle;
        margin-right: 8px;
      }
      .sidebar-link {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .left-menu-title {
        font-size: 0.95rem;
        vertical-align: middle;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <>
      {/* Desktop sidebar */}
      <div className={`fixed-sidebar left ${expanded ? "open" : ""}`}>
        <div className="fixed-sidebar-left sidebar--small" id="sidebar-left">
          <a href="#" className="logo">
            <div className="img-wrap">
              <img
                loading="lazy"
                src="/img/logo.webp"
                alt="Olympus"
                width="34"
                height="34"
              />
            </div>
          </a>
          <div className="mCustomScrollbar" data-mcs-theme="dark">
            <SidebarMenu large={false} onToggle={toggleSidebar} />
          </div>
        </div>

        <div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1">
          <a href="#" className="logo">
            <div className="img-wrap">
              <img
                loading="lazy"
                src="/img/logo.webp"
                alt="Olympus"
                width="34"
                height="34"
              />
            </div>
            <div className="title-block">
              <h6 className="logo-title">bookworm</h6>
            </div>
          </a>
          <div className="mCustomScrollbar" data-mcs-theme="dark">
            <SidebarMenu large={true} onToggle={toggleSidebar} />
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="fixed-sidebar left fixed-sidebar-responsive">
        <div className="fixed-sidebar-left sidebar--small">
          <a
            href="#"
            className="logo js-sidebar-open"
            onClick={(e) => {
              e.preventDefault();
              toggleMobileSidebar();
            }}
          >
            <img
              loading="lazy"
              src="/img/logo.webp"
              alt="Olympus"
              width="34"
              height="34"
            />
          </a>
        </div>

        <div className="fixed-sidebar-left sidebar--large">
          <a href="#" className="logo">
            <div className="img-wrap">
              <img
                loading="lazy"
                src="/img/logo.webp"
                alt="Olympus"
                width="34"
                height="34"
              />
            </div>
            <div className="title-block">
              <h6 className="logo-title">bookworm</h6>
            </div>
          </a>
          <div className="mCustomScrollbar" data-mcs-theme="dark">
            <SidebarMenu large={true} onToggle={toggleMobileSidebar} />
          </div>
        </div>
      </div>
    </>
  );
}
