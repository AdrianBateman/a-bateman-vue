<script setup lang="ts">
import theNavigation from '../the-navigation/the-navigation.vue';
</script>

<template>
  <header
    class="header"
  >
    <theNavigation />

    <p
      class="title"
    >
      Adrian Bateman

      <small
        class="title-sm"
      >
        BSc Honours (Open)
      </small>

      <em
        class="title-em"
      >
        Website
        <span
          class="title-em--blue"
        >
          Developer
        </span>
      </em>
    </p>
  </header>
</template>

<style scoped lang="scss">
.header {
  margin-bottom: var(--size-lg);
  font-family: var(--secondary-font);
}

.title {
  padding: 0;
  margin: 0;
  font-size: var(--size-lg);
  font-weight: 500;
  line-height: 1;

  &-sm {
    font-size: var(--size-sm);
    font-weight: 300;
  }

  &-em {
    display: block;
    font-size: var(--size-xxl);
    font-style: normal;
    font-weight: 900;
    letter-spacing: -4px;

    &--blue {
      display: block;
      color: var(--accent-color);
    }
  }
}
</style>
