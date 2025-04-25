<script setup lang="ts">
import PictureComponent from '@/components/picture-component/picture-component.vue';
import {
    INKSCAPE_PATH,
} from '@/constants/constants';

const inkscapeImages = [
    {
        title: 'UFO',
        description: 'foo bar',
        defaultUrl: `${INKSCAPE_PATH}/ufo-pattern_ez9amb.png`,
        altText: 'Line art of a UFO',
        width: 501,
        height: 331,
        sources: [
            {
                url: `${INKSCAPE_PATH}/ufo-pattern_iepmks.avif`,
                type: 'image/avif',
            },
            {
                url: `${INKSCAPE_PATH}/ufo-pattern_ez9amb.webp`,
                type: 'image/webp',
            },
        ],
    },
    {
        title: 'UFO 2',
        description: 'baz waz',
        defaultUrl: `${INKSCAPE_PATH}/ufo-pattern_ez9amb.png`,
        altText: 'Line art of a UFO',
        width: 501,
        height: 331,
        sources: [
            {
                url: `${INKSCAPE_PATH}/ufo-pattern_iepmks.avif`,
                type: 'image/avif',
            },
            {
                url: `${INKSCAPE_PATH}/ufo-pattern_ez9amb.webp`,
                type: 'image/webp',
            },
        ],
    },
];
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
      }, key) in inkscapeImages"
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
      />
    </article>
  </main>
</template>

<style>

</style>
