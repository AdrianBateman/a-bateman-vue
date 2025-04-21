
<script setup lang="ts">
import type {
    WorkRoleInfo,
} from '@/interfaces/WorkRole/WorkRole';

defineProps({
    title: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    companyLink: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    moreInfo: {
        type: Array<WorkRoleInfo>,
        default: () => ([
        ]),
    },
});
</script>

<template>
  <article
    class="work-article"
  >
    <h3
      class="work-article__title"
    >
      {{ title }}

      <small
        v-if="company"
        class="work-article__title-small"
      >
        <a
          :href="companyLink"
          rel="noopener noreferrer nofollow"
          target="_blank"
          class="work-article__title-link"
        >
          {{ company }}
        </a>
      </small>
    </h3>

    <p
      v-dompurify-html="description"
      class="work-article__description"
    />

    <template
      v-if="moreInfo.length"
    >
      <div
        v-for="(info, index) in moreInfo"
        :key="info.title + index.toString()"
        class="work-article-info"
      >
        <h4
          class="work-article-info__title"
        >
          <a
            v-if="info.anchor"
            :href="info.anchor"
            class="work-article-info__link"
          >
            {{ info.title }}
          </a>

          <template
            v-else
          >
            {{ info.title }}
          </template>
        </h4>

        <div
          v-dompurify-html="info.description"
          class="work-article-info__description"
        />
      </div>
    </template>
  </article>
</template>

<style scoped>
  .work-article {
    margin-bottom: 8rem;
  }

  .work-article__title {
    margin-bottom: 2rem;
    font-size: 2.5rem;
    line-height: 1;
  }

  .work-article__title-small {
    display: block;
    font-size: 1.5rem;
    font-weight: 300;
  }

  .work-article__title-link,
  .work-article-info__link {
    border-radius: 50%;
    color: inherit;
  }

  .work-article__title-link:hover,
  .work-article-info__link:hover {
    border-bottom: 1px solid var(--primary-color);
    transition: border-radius 150ms ease-out;
    border-radius: 0;
  }

  .work-article__description {
    max-width: 65ch;
    margin-bottom: 2rem;
    padding: 0;
  }

  .work-article-info {
    margin-bottom: 2rem;
  }

  .work-article-info:last-of-type {
    margin-bottom: 0;
  }

  .work-article-info__title {
    font-family: var(--secondary-font);
    letter-spacing: 1px;
    font-size: 1.5rem;
  }

  .work-article-info__description {
    max-width: 65ch;
  }

  .work-article-info__description :deep(p:last-of-type) {
    padding-bottom: 0;
  }

  .work-article-info__description :deep(strong) {
    font-size: 1.2rem;
    font-family: var(--secondary-font);
  }
</style>
