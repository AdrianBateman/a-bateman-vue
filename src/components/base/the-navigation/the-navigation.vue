<template>
  <nav
    class="nav"
  >
    <ul
      class="list"
    >
      <li
        class="item"
      >
        <RouterLink
          to="/"
          exact-active-class="link--active"
          class="link"
        >
          Home
        </RouterLink>
      </li>

      <li
        class="item"
      >
        <RouterLink
          to="/hobbies"
          exact-active-class="link--active"
          class="link"
        >
          Hobbies
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  margin-bottom: var(--size-md);
}

.list {
    list-style: none;
    display: flex;
    gap: var(--size-md);
}

.link {
  padding: .5rem 1rem;
  font-weight: 600;
  text-decoration: none;
  color: inherit;
  border: 1px solid var(--primary-color);
}

.link--active {
  background-color: var(--primary-color);
  border-color: var(--primary-bkgd);
  color: var(--primary-bkgd);
}
</style>
