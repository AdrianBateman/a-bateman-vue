<script setup lang="ts">
import WorkArticle from '@/components/work/work-article/work-article.vue';

import * as Work from '@/data/work-roles.json';

const roles = Work.roles;
</script>

<template>
  <main>
    <h2>Work</h2>

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

    <!-- <ol>
      <li>
        2012 - 2014 <strong>Website developer</strong> - Personal projects, holistic web shop
      </li>
    </ol> -->
  </main>
</template>
