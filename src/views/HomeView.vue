<script setup lang="ts">
import WorkArticle from '@/components/work/work-article/work-article.vue';

import * as Work from '@/data/work-roles.json';

const roles = Work.roles;
</script>

<template>
  <main>
    <WorkArticle
      v-for="{
        company,
        companyLink,
        jobTitle,
        description,
        moreInfo,
      }, index in roles"
      :key="company + index.toString()"

      :title="jobTitle"
      :company
      :company-link
      :description
      :more-info
    />
  </main>
</template>
