<script setup lang="ts">
import {
    RouterView, 
} from 'vue-router';
import TheHeader from './components/base/the-header/the-header.vue';
import TheFooter from './components/base/the-footer/the-footer.vue';
</script>

<template>
  <TheHeader />

  <RouterView />

  <TheFooter />
</template>
