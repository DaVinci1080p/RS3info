import React from 'react'
import { useState, useEffect } from 'react'
import '../css/App.css'

const profile_URL = 'https://apps.runescape.com/runemetrics/profile?user='
const cors_server = 'https://vincis-cors.herokuapp.com/'

const MaxingCalc = () => {
	const [player, setPlayer] = useState([])
	const [searchTerm, setSearchTerm] = useState('')

	// Search a players skills
	const searchPlayer = async (PlayerName) => {
		const response = await fetch(`${cors_server}${profile_URL}${PlayerName}`)
		const data = await response.json()
		setPlayer(data.skillvalues)
	}
	useEffect(() => {
		searchPlayer('')
	}, [])


	return (
		<div className='app'>
			<h1>Maxing calc</h1>
			<div className='empty'>
				<h2>Under construction!!!</h2>
			</div>
		</div>
	)
}

export default MaxingCalc