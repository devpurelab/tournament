<script setup lang="ts">
import Dashboard from "./components/Dashboard.vue";
</script>

<template>
  <div class="container">
  <Suspense>
      <Dashboard />
      <template #fallback>
        Loading...
      </template>
    </Suspense>
  </div>
</template>

<style scoped>

</style>
