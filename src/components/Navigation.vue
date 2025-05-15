<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'AppNavigation',
  setup() {
    const isOpen = ref(false)

    const toggleMenu = () => {
      isOpen.value = !isOpen.value
    }

    const closeMenu = () => {
      isOpen.value = false
    }

    return { isOpen, toggleMenu, closeMenu }
  },
})
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <a href="#home" class="navbar-logo">HUA AUTO ELECTRICAL</a>
      <button class="hamburger" @click="toggleMenu">
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
      </button>
      <ul :class="['navbar-links', { show: isOpen }]">
        <li><a href="#home" @click="closeMenu">Home</a></li>
        <li><a href="#services" @click="closeMenu">Services</a></li>
        <li><a href="#testimonial" @click="closeMenu">Testimonial</a></li>
        <!-- ✅ Added this line -->
        <li><a href="#contact" @click="closeMenu">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: #1a2a44;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #f5f5f5;
  text-transform: uppercase;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.navbar-links a {
  text-decoration: none;
  color: #f5f5f5;
  font-weight: 500;
}

.navbar-links a:hover {
  color: #d3d3d3;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  border: none;
  background: transparent;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  background: #f5f5f5;
  border-radius: 2px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .navbar-links {
    position: absolute;
    top: 64px;
    right: 0;
    background: #1a2a44;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 1rem 1.5rem;
    gap: 1rem;
    display: none;
  }

  .navbar-links.show {
    display: flex;
  }

  .navbar-links a {
    color: #f5f5f5;
  }

  .navbar-links a:hover {
    color: #d3d3d3;
  }
}

.hamburger span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger span.open:nth-child(2) {
  opacity: 0;
}

.hamburger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}
</style>
