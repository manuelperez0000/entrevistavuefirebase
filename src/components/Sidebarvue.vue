<template>
  <nav class="col-md-2 bg-light ">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link to="/products" class="nav-link text-dark">
            <i class="fas fa-shopping-cart"></i>
            Products
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Sidebarvue'
}
</script>