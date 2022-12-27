<script setup lang="ts">

interface Props {
  stats: Object
}

const {stats} = defineProps<Props>();
	
</script>

<template>

	<div class="table-grid">
		<span class="header"><strong>Player</strong></span>
		<span class="header"><button @click="$emit('order', 'win')">Win</button></span>
		<span class="header"><button @click="$emit('order', 'lost')">Lost</button></span>
		<template v-for="(stat, player) in stats">
			<span>
				<img class="avatar" :src="`https://avatars.dicebear.com/api/identicon/${player}.svg`" alt="">
				{{ player }}
			</span>
			<span v-for="(value, key) in stat">
				{{ value }}
			</span>
		</template>
	</div>

</template>

<style scoped>
</style>