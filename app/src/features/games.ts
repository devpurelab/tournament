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

			if (!players[prop as keyof any]) {
				players[prop as keyof any] = {
					win: 0,
					lost: 0,
				};
			}

			if (el[prop as keyof any] === 1) {
				players[prop as keyof any].win++;
			} else {
				players[prop as keyof any].lost++;
			}
		}
	});

	return players;
}


export { getGames };