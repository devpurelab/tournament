interface Player {
	[name: string]: Stat
}

interface Stat {
	win: Number
	lost: Number
	total: Function
	rateo: Function
}

export type { Player, Stat }