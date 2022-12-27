<script setup lang="ts">
import { ref } from 'vue'
import { getGames } from "../features/games";
import { Player, Stat } from '../interface/global';
import Table from './Table.vue'
import Chart from './Chart.vue'

interface OrderBy {
	win: boolean,
	lost: boolean,
	rateo: boolean,
}

const players = ref<Player>({});
const chartStats = ref<Object>({});

const [data, error] = await getGames();

if (!error) {
	players.value = data.players;
	chartStats.value = data.chart;
}

const orderBy = ref<OrderBy>({
	win: true,
	lost: true,
	rateo: true,
});

const handleClickOrder = (event: string) => {
	const keyStat = event as keyof Stat;
	const keyOrderBy = event as keyof OrderBy;

	switch (event) {
		case "rateo":
			if (orderBy.value.rateo) {
				players.value = Object.fromEntries(Object.entries(players.value).sort(([, a], [, b]) => a.rateo() - b.rateo()));
			} else {
				players.value = Object.fromEntries(Object.entries(players.value).sort(([, a], [, b]) => b.rateo() - a.rateo()));
			}
			break;
		default:
			if (orderBy.value[keyOrderBy]) {
				players.value = Object.fromEntries(Object.entries(players.value).sort(([, a], [, b]) => a[keyStat] - b[keyStat]));
			} else {
				players.value = Object.fromEntries(Object.entries(players.value).sort(([, a], [, b]) => b[keyStat] - a[keyStat]));
			}
			break;
	}

	orderBy.value[keyOrderBy] = !orderBy.value[keyOrderBy];
}
</script>

<template>
	<Table :players="players" @order="handleClickOrder" />
	<Chart :chartStats="chartStats" />
</template>	