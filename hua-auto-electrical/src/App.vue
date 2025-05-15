<template>
  <div class="min-h-screen bg-navy">
    <Navigation />
    <HeroSection />
    <ServicesSection />
    <TestimonialSection /> <!-- Inserted here -->
    <ContactSection />
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import Navigation from './components/Navigation.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import TestimonialSection from './components/TestimonialSection.vue' // Import testimonial section
import ContactSection from './components/ContactSection.vue'
import FooterComponent from './components/FooterComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navigation,
    HeroSection,
    ServicesSection,
    TestimonialSection, // Register the component
    ContactSection,
    FooterComponent
  },
  setup() {
    onMounted(() => {
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
      window.scrollTo(0, 0);

      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        observer.observe(section);
      });
    });
  }
})
</script>