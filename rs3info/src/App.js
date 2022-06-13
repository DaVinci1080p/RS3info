import React from 'react'
import './css/App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/index'
import PlayerProfile from './pages/PlayerProfile'
import MaxingCalc from './pages/MaxingCalc'
import TotalQuestReqs from './pages/TotalQuestReqs'

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/home" exact element={<Home />} />
				<Route path="/PlayerProfile" element={<PlayerProfile />} />
				<Route path="/MaxingCalc" element={<MaxingCalc />} />
				<Route path="/TotalQuestReqs" element={<TotalQuestReqs />} />
			</Routes>
		</Router>
	)
}

export default App
