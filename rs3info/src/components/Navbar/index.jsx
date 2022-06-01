import React from 'react'
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements'

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<NavLink to="/home">Home</NavLink>
					<NavLink to="/PlayerProfile">Player Lookup</NavLink>
					<NavLink to="/MaxingCalc">Maxing Calc</NavLink>

					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
			</Nav>
		</>
	)
}

export default Navbar
