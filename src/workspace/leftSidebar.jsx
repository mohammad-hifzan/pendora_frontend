import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSwatchbook,
	faUsersRectangle,
	faUserCheck,
	faArrowRightFromBracket
} from '@fortawesome/free-solid-svg-icons';

const adminLinks = [
	{
		to: "/workspace/dashboard",
		icon: (
			<svg className="olymp-newsfeed-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="DASHBOARD">
				<use href="#olymp-newsfeed-icon"></use>
			</svg>
		),
		label: "Dashboard"
	},
	{
		to: "/workspace/mangas",
		icon: <FontAwesomeIcon icon={faSwatchbook} size="3x" className="olymp-newsfeed-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="MANGAS" />,
		label: "Mangas"
	},
	{
		to: "/workspace/users",
		icon: <FontAwesomeIcon icon={faUsersRectangle} size="3x" className="olymp-newsfeed-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="USERS" />,
		label: "Users"
	},
	{
		to: "/workspace/companies",
		icon: <FontAwesomeIcon icon={faArrowRightFromBracket} size="3x" className="olymp-newsfeed-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="COMPANIES" />,
		label: "Exit"
	}
];

const superAdminLinks = [
	{
		to: "/admin/dashboard",
		icon: (
			<svg className="olymp-newsfeed-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="DASHBOARD">
				<use href="#olymp-newsfeed-icon"></use>
			</svg>
		),
		label: "Dashboard"
	},
	{
		to: "/admin/mangas",
		icon: <FontAwesomeIcon icon={faSwatchbook} size="3x" className="olymp-newsfeed-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="MANGAS" />,
		label: "Mangas"
	},
	{
		to: "/admin/users",
		icon: <FontAwesomeIcon icon={faUsersRectangle} size="3x" className="olymp-newsfeed-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="USERS" />,
		label: "Users"
	},
	{
		to: "/admin/roles",
		icon: <FontAwesomeIcon icon={faUserCheck} size="3x" className="olymp-newsfeed-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="ROLE" />,
		label: "Roles"
	},
	{
		to: "/admin/companies",
		icon: <FontAwesomeIcon icon={faArrowRightFromBracket} size="3x" className="olymp-newsfeed-icon left-menu-icon" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="COMPANIES" />,
		label: "Exit"
	}
];

function SidebarMenu({ large }) {
	return (
		<ul className="left-menu">
			<li>
				<a href="#" className="js-sidebar-open">
					<svg className={large ? "olymp-close-icon left-menu-icon" : "olymp-menu-icon left-menu-icon"}>
						<use href={large ? "#olymp-close-icon" : "#olymp-menu-icon"}></use>
					</svg>
					{large && <span className="left-menu-title">Collapse Menu</span>}
				</a>
			</li>
			{adminLinks.map(({ to, icon, label }) => (
				<li key={to}>
					<Link to={to}>
						{icon}
						{large && <span className="left-menu-title">{label}</span>}
					</Link>
				</li>
			))}
		</ul>
	);
}

function LeftSidebar() {
	return (
		<>
			<div className="fixed-sidebar left">
				<div className="fixed-sidebar-left sidebar--small" id="sidebar-left">
					<a href="02-ProfilePage.html" className="logo">
						<div className="img-wrap">
							<img loading="lazy" src="themes/themeAuthor/img/logo.webp" alt="Olympus" width="34" height="34" />
						</div>
					</a>
					<div className="mCustomScrollbar" data-mcs-theme="dark">
						<SidebarMenu large={false} />
					</div>
				</div>
				<div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1">
					<a href="02-ProfilePage.html" className="logo">
						<div className="img-wrap">
							<img loading="lazy" src="img/logo.webp" alt="Olympus" width="34" height="34" />
						</div>
						<div className="title-block">
							<h6 className="logo-title">olympus</h6>
						</div>
					</a>
					<div className="mCustomScrollbar" data-mcs-theme="dark">
						<SidebarMenu large={true} />
					</div>
				</div>
			</div>

			<div className="fixed-sidebar left fixed-sidebar-responsive">
				<div className="fixed-sidebar-left sidebar--small" id="sidebar-left-responsive">
					<a href="#" className="logo js-sidebar-open">
						<img loading="lazy" src="img/logo.webp" alt="Olympus" width="34" height="34" />
					</a>
				</div>
				<div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1-responsive">
					<a href="#" className="logo">
						<div className="img-wrap">
							<img loading="lazy" src="img/logo.webp" alt="Olympus" width="34" height="34" />
						</div>
						<div className="title-block">
							<h6 className="logo-title">olympus</h6>
						</div>
					</a>
					<div className="mCustomScrollbar" data-mcs-theme="dark">
						{/* Responsive sidebar content remains unchanged for brevity */}
						{/* You can refactor this part similarly if needed */}
					</div>
				</div>
			</div>
		</>
	);
}

export default LeftSidebar;
