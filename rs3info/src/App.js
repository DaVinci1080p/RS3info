import { useEffect, useState } from 'react'
import React from 'react'
import './css/App.css'

//component & image imports
import SkillTable from './components/SkillTable'
import SearchIcon from './img/search.svg'

//API endpoints & cors workaround
const profile_URL = 'https://apps.runescape.com/runemetrics/profile?user='
const cors_server = 'https://vincis-cors.herokuapp.com/'

const App = () => {
	const [player, setPlayer] = useState([])
	const [searchTerm, setSearchTerm] = useState('')

	// Search a players skills
	const searchPlayer = async (PlayerName) => {
		const response = await fetch(`${cors_server}${profile_URL}${PlayerName}`)
		const data = await response.json()

		console.log(data.skillvalues)
		setPlayer(data.skillvalues)
	}
	useEffect(() => {
		searchPlayer('')
	}, [])

	return (
		<div className="app">
			<h1>Maxing competition</h1>
			<div className="search">
				<input
					placeholder="Search player"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					onKeyPress={(e) => {
						if (e.key === 'Enter') {
							searchPlayer(searchTerm)
						}
					}}
				/>
				<img
					src={SearchIcon}
					alt="search"
					onClick={() => searchPlayer(searchTerm)}
				/>
			</div>
			{player?.length > 0 ? (
				<SkillTable player={player} />
			) : (
				<div className="empty">
					<h2>No skills found</h2>
				</div>
			)}
		</div>
	)
}
export default App
