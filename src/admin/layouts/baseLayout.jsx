import { Outlet } from "react-router-dom"
import Preloader  from '../preloader'
import LeftSidebar from '../leftSidebar'
import RightSidebar from '../rightSidebar'
import AdminHeader from '../header'
import ChatPopup from '../chatPopup'
function BaseLayout() {


	return (
      <>
        <Preloader />
        <LeftSidebar />
        {/* <RightSidebar /> */}
        <AdminHeader />
        <Outlet />
        <ChatPopup />
      </>
		)
}

export default BaseLayout;