<template>
    <div class="container">这里是课程{{ route.params?.id }}</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();

</script>

<style scoped></style>
