import { useEffect, useState } from 'react';
import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import { trackPromise } from 'react-promise-tracker';
import '../css/App.css';

//component & image imports
import SkillTable from '../components/SkillTable';
import SearchIcon from '../img/search.svg';
import LoadingIndicator from '../components/LoadingIndicator';
import WaitingInput from '../components/WaitingInput';

//API endpoints & cors workaround
const profile_URL = 'https://apps.runescape.com/runemetrics/profile?user=';
const cors_server = 'https://vincis-cors.herokuapp.com/';

const PlayerProfile = () => {
	const [player, setPlayer] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [divChange, setDivChange] = useState(true);

	// Search a players skills
	const searchPlayer = async (PlayerName) => {
		const response = await fetch(`${cors_server}${profile_URL}${PlayerName}`);
		const data = await response.json();
		setPlayer(data.skillvalues);
	};
	useEffect(() => {
		searchPlayer('');
	}, []);

	return (
		<div className="app">
			<h1>Player Lookup</h1>
			<div className="search">
				<input
					placeholder="Search player"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					onKeyPress={(e) => {
						if (e.key === 'Enter') {
							trackPromise(searchPlayer(searchTerm)) &&
								setDivChange(!divChange);
						}
					}}
				/>
				<img
					src={SearchIcon}
					alt="search"
					onClick={() =>
						trackPromise(searchPlayer(searchTerm)) && setDivChange(!divChange)
					}
				/>
			</div>
			{player?.length > 0 ? (
				<SkillTable player={player} />
			) : (
				<div>{divChange ? <WaitingInput /> : <LoadingIndicator />}</div>
			)}
		</div>
	);
};
export default PlayerProfile;
