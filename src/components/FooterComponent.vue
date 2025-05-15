<template>
  <footer class="footer">
    <div class="footer-container">
      <p class="footer-text">
        © {{ currentYear }} HUA AUTO ELECTRICAL. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'FooterComponent',
  setup() {
    const currentYear = computed(() => new Date().getFullYear())
    return { currentYear }
  }
})
</script>

<style scoped>
.footer {
  background-color: #1A2A44;
  padding: 1.5rem 1rem;    /* ↑ make this larger to fill the band */
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-text {
  color: #D3D3D3;
}
</style>
