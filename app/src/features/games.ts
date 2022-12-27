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
	const chart: any = {
		labels: [],
		players: {},
	}

	stat.forEach((el: any) => {
		for (const prop in el) {
			const key = prop as keyof any;

			if (prop === "date") {
				chart.labels.push(el[key])
				continue
			};

			if (!players[key]) {
				players[key] = {
					win: 0,
					lost: 0,
					total: function () { return this.win + this.lost },
					rateo: function () { return this.win / this.total() }
				};
			}

			players[key].win += el[key].win;
			players[key].lost += el[key].lost;

			if (!chart.players[key]) {
				chart.players[key] = []
			}

			chart.players[key].push(el[key].win)
		}
	});

	return { players, chart };
}


export { getGames };