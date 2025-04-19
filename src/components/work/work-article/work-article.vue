
<script setup lang="ts">
import type {
    WorkRollInfo,
} from '@/interfaces/WorkRoll/WorkRoll';

defineProps({
    title: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    moreInfo: {
        type: Array<WorkRollInfo>,
        default: () => ([
        ]),
    },
});
</script>

<template>
  <article>
    <h3>
      {{ title }}

      <small
        v-if="company"
      >
        {{ company }}
      </small>
    </h3>

    <p
      v-dompurify-html="description"
    />

    <template
      v-if="moreInfo.length"
    >
      <div
        v-for="(info, index) in moreInfo"
        :key="info.title + index.toString()"
      >
        <h4>
          <a
            :href="info.anchor"
          >
            {{ info.title }}
          </a>
        </h4>

        <p
          v-dompurify-html="info.description"
        />
      </div>
    </template>
  </article>
</template>

