import React from 'react'
import '../css/SkillTable.css'

const id_dict = {
	0: 'Attack',
	1: 'Defence',
	2: 'Strength',
	3: 'Constitution',
	4: 'Ranged',
	5: 'Prayer',
	6: 'Magic',
	7: 'Cooking',
	8: 'Woodcutting',
	9: 'Fletching',
	10: 'Fishing',
	11: 'Firemaking',
	12: 'Crafting',
	13: 'Smithing',
	14: 'Mining',
	15: 'Herblore',
	16: 'Agility',
	17: 'Thieving',
	18: 'Slayer',
	19: 'Farming',
	20: 'Runecrafting',
	21: 'Hunter',
	22: 'Construction',
	23: 'Summoning',
	24: 'Dungeoneering',
	25: 'Divination',
	26: 'Invention',
	27: 'Archaeology',
}

function SkillTable({ player }) {
	const DisplayData = React.Children.toArray(
		player.map((info) => {
			const xp = (info.xp / 10) | 0
			return (
				<tr>
					<td>
						<img
							src={
								`./${id_dict[info.id]}.png` !== 'NULL'
									? `./${id_dict[info.id]}.png`
									: 'https://via.placeholder.com/25'
							}
							alt={id_dict[info.id]}
						></img>
					</td>
					<td>{id_dict[info.id]}</td>
					<td>{info.level}</td>
					<td>{xp.toLocaleString('en-US')}</td>
					<td>{info.rank.toLocaleString('en-US')}</td>
				</tr>
			)
		})
	)

	return (
		<div className="skillTable">
			<table className="skillTable" striped="true" borderd="true" hover="true">
				<thead>
					<tr>
						<th></th>
						<th>Skill</th>
						<th>Level</th>
						<th>Xp</th>
						<th>Rank</th>
					</tr>
				</thead>
				<tbody>{DisplayData}</tbody>
			</table>
		</div>
	)
}

export default SkillTable
