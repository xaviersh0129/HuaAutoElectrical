<template>
  <section id="services" class="services-section">
    <div class="services-container">
      <div class="services-header">
        <Wrench class="services-icon" />
        <h2 class="services-title">Our Services</h2>
      </div>
      <div class="services-grid">
        <div
          v-for="service in displayedServices"
          :key="service"
          class="service-card"
        >
          <p class="service-text">{{ service }}</p>
        </div>
      </div>
      <div v-if="services.length > 8" class="show-more-container" style="text-align: center; margin-top: 1rem;">
        <button @click="toggleShowServices" class="show-more-button" style="padding: 1rem 2rem; font-size: 1.25rem; border: none; background-color: #F5F5F5; color: #1A2A44; border-radius: 0.5rem; cursor: pointer;">
          {{ showAllServices ? 'Show Less' : 'Show More' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue'
import { Wrench } from 'lucide-vue-next'

export default defineComponent({
  name: 'ServicesSection',
  components: { Wrench },
  setup() {
    const services = ref<string[]>([])
    const showAllServices = ref(false)

    const displayedServices = computed(() => {
      return showAllServices.value ? services.value : services.value.slice(0, 8)
    })

    const toggleShowServices = () => {
      showAllServices.value = !showAllServices.value
    }

    onMounted(async () => {
      try {
        const response = await fetch('./services.json')
        if (!response.ok) {
          throw new Error('Failed to fetch services list')
        }
        services.value = await response.json()
      } catch (error) {
        console.error(error)
      }
    })

    return { services, showAllServices, displayedServices, toggleShowServices }
  }
})
</script>

<style scoped>
.services-section {
  padding: 5rem 1rem;
  background-color: #1A2A44;
}

.services-container {
  max-width: 72rem;
  margin: 0 auto;
}

.services-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0rem;
}

.services-icon {
  width: 2rem;
  height: 2rem;
  color: #F5F5F5;
}

.services-title {
  font-size: 2.25rem;
  font-weight: 700;
  background: linear-gradient(to right, #F5F5F5, #D3D3D3);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.service-card {
  background-color: #2A4058;
  padding: 0.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
}

.service-text {
  font-size: 1rem;
  font-weight: 500;
  color: #F5F5F5;
  text-align: center;
}

@media (max-width: 600px) {
  .services-section {
    padding: 3rem 1rem;
  }
  
  .services-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
  
  .services-title {
    font-size: 1.75rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>