<template>
  <nav
    class="the-nav"
  >
    <ul
      class="the-nav__list"
    >
      <li
        class="the-nav__item"
      >
        <RouterLink
          to="/"
          exact-active-class="the-nav--active"
          class="the-nav__link"
        >
          Home
        </RouterLink>
      </li>

      <li
        class="the-nav__item"
      >
        <RouterLink
          to="/hobbies"
          exact-active-class="the-nav--active"
          class="the-nav__link"
        >
          Hobbies
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.the-nav {
  margin-bottom: var(--size-xxl);
}

.the-nav__list {
    list-style: none;
    display: flex;
    gap: var(--size-md);
}

.the-nav__link {
  padding: .5rem 1rem;
  font-weight: 600;
  text-decoration: none;
  color: inherit;
  border: 1px solid var(--primary-color);
}

.the-nav--active {
  background-color: var(--primary-color);
  border-color: var(--primary-bkgd);
  color: var(--primary-bkgd);
}
</style>
