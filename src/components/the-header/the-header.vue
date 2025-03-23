<script setup lang="ts"></script>

<template>
  <header
    class="header"
  >
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
        Website Developer
      </em>
    </p>
  </header>
</template>

<style scoped lang="scss">
.header {
  margin-bottom: 4rem;
  padding-bottom: 2rem;
  font-family: var(--secondary-font);
  border-bottom: 1px solid var(--primary-color);
  text-wrap: balance;
}

.title {
  padding: 0;
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 1px;

  &-sm {
    font-size: 1rem;
  }

  &-em {
    display: block;
    font-size: 3rem;
    font-style: normal;
  }
}



</style>
