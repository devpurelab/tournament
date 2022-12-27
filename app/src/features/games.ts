const getGames = async (): Promise<any[]> => {
	try {
		const response = await fetch('https://raw.githubusercontent.com/devpurelab/tournament/main/data/games.json');
		const stat = await response.json();
		return [countStat(stat), null];
	} catch (error) {
		return [null, error]
	}
}

const countStat = (stat: any) => {
	const players: any = {};

	stat.forEach((el: any) => {
		for (const prop in el) {
			if (prop === "date") continue;

			const key = prop as keyof any;

			if (!players[key]) {
				players[key] = {
					win: 0,
					lost: 0,
				};
			}

			if (el[key] === 1) {
				players[key].win++;
			} else {
				players[key].lost++;
			}
		}
	});

	return players;
}


export { getGames };