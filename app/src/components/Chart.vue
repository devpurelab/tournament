<script setup lang="ts">
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Legend,
	Colors,
	Title
} from 'chart.js'

import { Line } from 'vue-chartjs'

interface Props {
	chartStats: {
		labels: String[]
		players: Object
	}
}

const { chartStats } = defineProps<Props>();

ChartJS.register(LinearScale, CategoryScale, PointElement, LineElement, Legend, Colors, Title)

const data = {
	labels: chartStats.labels,
	datasets: Object.entries(chartStats.players).map(el => {
		return {
			label: el[0],
			data: el[1],
			fill: false,
			tension: 0.1
		}
	})
};

const options = {
	responsive: true,
	scales: {
		y: {
			grid: {
				color: 'rgba(255, 255, 255, 0.3)',
			},
			ticks: {
				color: 'rgba(255, 255, 255, 0.3)',
			},
		},
		x: {
			grid: {
				color: 'rgba(255, 255, 255, 0.3)',
			},
			ticks: {
				color: 'rgba(255, 255, 255, 0.3)',
			},
		}
	},
	plugins: {
		legend: {
			labels: {
				color: 'rgba(255, 255, 255, 0.3)'
			}
		}
	}
}

</script>

<template>
	<h3>Andamento vittorie</h3>
	<Line :data="data" :options="options" />
</template>