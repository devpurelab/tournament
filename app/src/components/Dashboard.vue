<script setup lang="ts">
import { ref } from 'vue'
import { getGames } from "../features/games";
import Table from './Table.vue'

interface OrderBy {
	win	: boolean,
	lost : boolean,
}

const stats = ref<Object>({});

const [data, error] = await getGames();

if(!error){
  stats.value = data;
}

const orderBy = ref<OrderBy>({
	win: true,
	lost: true,
});

const handleClickOrder = (event : string) => {
	if(orderBy.value[event as keyof OrderBy]){
		stats.value = Object.fromEntries(Object.entries(stats.value).sort(([,a],[,b]) => a[event]-b[event]));
	} else {
		stats.value = Object.fromEntries(Object.entries(stats.value).sort(([,a],[,b]) => b[event]-a[event]));
	}
	orderBy.value[event as keyof OrderBy] = !orderBy.value[event as keyof OrderBy];
}
</script>

<template>
	<Table :stats="stats" @order="handleClickOrder" />
</template>	