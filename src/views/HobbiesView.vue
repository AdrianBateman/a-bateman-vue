<script setup lang="ts">
import PictureComponent from '@/components/picture-component/picture-component.vue';
import * as images from '@/data/images.json';

const path = '/art/inkscape';
</script>

<template>
  <main>
    <p>
      When not coding, I love to kick back and do some creative work using a range of media.
    </p>

    <article
      v-for="({
        title,
        description,
        defaultUrl,
        altText,
        width,
        height,
        sources,
      }, key) in images.art.inkscape"
      :key="defaultUrl + key.toString()"
    >
      <h2>{{ title }}</h2>

      <p>{{ description }}</p>

      <PictureComponent
        :default-url
        :alt-text
        :width
        :height
        :sources
        :path
      />
    </article>
  </main>
</template>

<style>

</style>
