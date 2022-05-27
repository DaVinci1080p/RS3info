import React from 'react'
import '../css/SkillTable.css'

const id_dict = {
	0: 'attack',
	1: 'defence',
	2: 'strength',
	3: 'constitution',
	4: 'ranged',
	5: 'prayer',
	6: 'magic',
	7: 'cooking',
	8: 'woodcutting',
	9: 'fletching',
	10: 'fishing',
	11: 'firemaking',
	12: 'crafting',
	13: 'smithing',
	14: 'mining',
	15: 'herblore',
	16: 'agility',
	17: 'thieving',
	18: 'slayer',
	19: 'farming',
	20: 'runecrafting',
	21: 'hunter',
	22: 'construction',
	23: 'summoning',
	24: 'dungeoneering',
	25: 'divination',
	26: 'invention',
	27: 'archaeology',
}

function SkillTable({ player }) {
	const DisplayData = React.Children.toArray(
		player.map((info) => {
			const xp = (info.xp / 10) | 0
			const source = id_dict[info.id]
			return (
				<tr>
					<td>
						<img
							src={
								`./img/${source}.png` !== 'NULL'
									? `./img/${source}.png`
									: 'https://via.placeholder.com/25'
							}
							alt={id_dict[info.id]}
						></img>
					</td>
					<td>
						{id_dict[info.id][0].toUpperCase() + id_dict[info.id].substring(1)}
					</td>
					<td>{info.level}</td>
					<td>{xp.toLocaleString('en-US')}</td>
					<td>{info.rank.toLocaleString('en-US')}</td>
				</tr>
			)
		})
	)

	return (
		<div className="tabel">
			<table className="skillTable" striped="true" hover="true">
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
