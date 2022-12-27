<script setup lang="ts">
import { Player } from '../interface/global';

interface Props {
	players: Player
}

const { players } = defineProps<Props>();


</script>

<template>
	<div class="table-grid" style="--col-template: 4, 1fr">
		<span class="header"><strong>Player</strong></span>
		<span class="header"><button @click="$emit('order', 'win')">Win</button></span>
		<span class="header"><button @click="$emit('order', 'lost')">Lost</button></span>
		<span class="header"><button @click="$emit('order', 'rateo')">Rateo</button></span>
		<template v-for="(value, player) in players">
			<span>
				<img class="avatar" :src="`https://avatars.dicebear.com/api/identicon/${player}.svg`" alt=""> {{ player }} </span>
			<span>{{ value.win }}</span>
			<span>{{ value.lost }}</span>
			<span>{{ value.rateo() }}</span>
		</template>
	</div>
</template>