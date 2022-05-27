import React from 'react'
import './css/App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/index'
import PlayerProfile from './pages/PlayerProfile'
import MaxingRace from './pages/MaxingRace'

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/home" exact element={<Home />} />
				<Route path="/PlayerProfile" element={<PlayerProfile />} />
				<Route path="/MaxingRace" element={<MaxingRace />} />
			</Routes>
		</Router>
	)
}

export default App
