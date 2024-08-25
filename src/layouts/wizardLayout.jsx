import $ from 'jquery';
import { Outlet } from "react-router-dom"

function WizardLayout() {
	return(
		<>
			<Outlet />
		</>
		)
}

export default WizardLayout