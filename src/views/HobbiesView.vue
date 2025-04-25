<script setup lang="ts">
import AdvancedImage from '@/components/advanced-image/advanced-image.vue';

const INKSCAPE_PATH = '/art/inkscape/';
const ufoWebp = 'ufo-pattern_ez9amb.webp';
const ufoPng = 'ufo-pattern_v03y9u.png';
const ufoAvif = 'ufo-pattern_iepmks.avif';
</script>

<template>
  <main>
    <p>
      When not coding, I love to kick back and do some creative work using a range of media.
    </p>

    <AdvancedImage
      :default-url="INKSCAPE_PATH + ufoPng"
      alt-text="Line art of a UFO"
      :width="501"
      :height="331"
      :sources="[
        {
          url: INKSCAPE_PATH + ufoAvif,
          type: 'image/avif'
        },
        {
          url: INKSCAPE_PATH + ufoWebp,
          type: 'image/webp'
        }
      ]"
    />
  </main>
</template>

<style>

</style>
