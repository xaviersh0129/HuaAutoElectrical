<template>
  <section id="contact" class="contact-section">
    <div class="contact-container">
      <!-- Header -->
      <div class="contact-header">
        <Mail class="contact-icon" />
        <h2 class="contact-title">Get In Touch</h2>
      </div>

      <!-- Google Map Embed -->
      <div class="contact-map">
        <iframe
          width="100%"
          height="350"
          style="border:0;"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=3.2077801,101.6211768&z=17&output=embed"
        ></iframe>
      </div>


      <!-- Contact cards -->
      <div class="contact-grid">
        <a
          v-for="(link, i) in contactData?.links"
          :key="i"
          :href="link.url"
          class="contact-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <component :is="getIconComponent(link.icon)" class="card-icon" />
          <span class="card-label" v-html="link.label"></span>
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { Mail, Phone, MapPin } from 'lucide-vue-next'

export default defineComponent({
  name: 'ContactSection',
  components: { Mail },
  setup() {
    const contactData = ref<{
      introText: string
      links: { label: string; url: string; icon: string }[]
    } | null>(null)

    const iconMap: Record<string, any> = {
      phone: Phone,
      location: MapPin,
      email: Mail
    }

    const getIconComponent = (iconName: string) => {
      return iconMap[iconName.toLowerCase()] || Mail
    }

    onMounted(async () => {
      // load copy
      try {
        const res = await fetch('./contact.json')
        contactData.value = await res.json()
      } catch (e) {
        console.error(e)
      }

      // fade‑in observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('animate-fade-in')
            observer.unobserve(e.target)
          }
        })
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

      const sec = document.getElementById('contact')
      if (sec) {
        sec.style.opacity = '0'
        observer.observe(sec)
      }
    })

    return { contactData, getIconComponent }
  }
})
</script>

<style scoped>
.contact-section {
  background-color: #1A2A44;
  padding: 4rem 1rem;
}

.contact-container {
  max-width: 72rem;
  margin: 0 auto;
  text-align: center;
}

.contact-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.contact-icon {
  width: 2rem; height: 2rem;
  color: #F5F5F5;
}

.contact-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #F5F5F5;
}

.contact-intro {
  background: #2A4058;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
}

.contact-intro p {
  color: #D3D3D3;
  font-size: 1.125rem;
  line-height: 1.6;
  margin: 0;
}

/* grid of cards */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.5rem;
}

/* each CTA card */
.contact-card {
  background: #2A4058;
  padding: 1.5rem;
  border-radius: 0.75rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.contact-card:hover,
.contact-card:focus {
  transform: translateY(-4px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

.card-icon {
  width: 2rem; height: 2rem;
  color: #F5F5F5;
}

.card-label {
  color: #F5F5F5;
  font-weight: 600;
}

/* fade-in animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

/* mobile tweaks */
@media (max-width: 600px) {
  .contact-section { padding: 3rem 1rem; }
  .contact-header { gap: 0.5rem; }
  .contact-title { font-size: 1.75rem; }
  .contact-intro { padding: 1.5rem; }
  .contact-intro p { font-size: 1rem; }
}

.contact-map {
  border-radius: 0.75rem;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

</style>
