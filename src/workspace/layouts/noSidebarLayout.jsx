import { Outlet } from "react-router-dom"
import AdminHeader from '../header'
import ChatPopup from '../chatPopup'
function NoSidebarLayout() {
  
	return (
      <>
        <AdminHeader />
        <Outlet />
        <ChatPopup />
      </>
		)
}

export default NoSidebarLayout;