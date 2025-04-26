<script setup lang="ts">
import {
    CLOUDINARY_URI,
} from '@/constants/constants';

interface ImageSource {
    url: string,
    width?: number,
    height?: number,
    media?: string,
    type?: string,
}

defineProps({
    defaultUrl: {
        type: String,
        required: true,
    },
    altText: {
        type: String,
        required: true,
    },
    width: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    sources: {
        type: Array<ImageSource>,
        default: undefined,
    },
    path: {
        type: String,
        default: '',
    },
});
</script>

<template>
  <picture>
    <template
      v-if="sources.length"
    >
      <source
        v-for="(source, key) in sources"
        :key="source.url + key.toString()"
        :srcset="CLOUDINARY_URI + path + source.url"
        :type="source.type"
        :media="source.media"
        :height="source.height"
        :width="source.width"
      >
    </template>

    <img
      :src="CLOUDINARY_URI + path + defaultUrl"
      :alt="altText"
      :width
      :height
    >
  </picture>
</template>
