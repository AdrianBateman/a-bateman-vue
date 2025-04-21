
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

<style scoped lang="scss">
  .work-article {
    margin-bottom: var(--size-xxl);

    &__title {
      margin-bottom: var(--size-md);
      font-size: var(--size-lg);
      line-height: 1;
    }

    &__title-small {
      display: block;
      font-size: var(--size-md);
      font-weight: 300;
    }

    &__description {
      max-width: 65ch;
      margin-bottom: var(--size-lg);
      padding: 0;

      :deep(strong) {
        font-size: var(--size-sm);
        font-family: var(--secondary-font);
      }
    }
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

  .work-article-info {
    margin-bottom: var(--size-lg);

    &:last-of-type {
      margin-bottom: 0;
    }

    &__title {
      font-size: var(--size-md);
      font-family: var(--secondary-font);
      letter-spacing: 1px;
    }

    &__description {
      max-width: var(--max-text-width);

      :deep(p:last-of-type) {
        padding-bottom: 0;
      }

      :deep(strong) {
        font-size: var(--size-sm);
        font-family: var(--secondary-font);
      }
    }
  }
</style>
