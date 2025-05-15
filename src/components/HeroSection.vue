<template>
  <section class="hero-section" id="home">
    <div class="hero-overlay"></div>
    <div class="hero-container">
      <div class="profile-wrapper">
        <img :src="heroData?.profileImage" alt="HUA Auto Electrical" class="profile-img" />
      </div>
      <h1 class="hero-title">
        <span class="gradient-text">{{ heroData?.name }}</span>
      </h1>
      <p class="hero-subtitle">
        {{ heroData?.subtitle }}
      </p>
      <div class="hero-buttons">
        <a href="https://wa.me/60122035578" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <MessageCircle class="whatsapp-icon" />
          Whatsapp Us
        </a>
        <a href="#services" class="btn btn-outline">View Services</a>
      </div>
    </div>
    <a href="#services" class="arrow-link">
      <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636l1.414-1.414z"></path>
      </svg>
    </a>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { MessageCircle } from 'lucide-vue-next'

export default defineComponent({
  name: 'HeroSection',
  components: { MessageCircle },
  setup() {
    const heroData = ref<{
      profileImage: string;
      name: string;
      subtitle: string;
    } | null>(null)

    onMounted(async () => {
      try {
        const response = await fetch('./hero.json')
        if (!response.ok) {
          throw new Error('Failed to fetch hero data')
        }
        heroData.value = await response.json()
      } catch (error) {
        console.error('Error loading hero data:', error)
      }
    })

    return { heroData }
  }
})
</script>

<style scoped>
.hero-section {
  min-height: 95vh;
  background-image: url('https://static.wixstatic.com/media/5bfb6f_1b5da1d685c44d2fa48762cc0650e58e~mv2_d_4288_2848_s_4_2.jpg/v1/fill/w_2760,h_2048,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/5bfb6f_1b5da1d685c44d2fa48762cc0650e58e~mv2_d_4288_2848_s_4_2.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
  position: relative;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(26, 42, 68, 0.8); /* Semi-transparent navy overlay */
  z-index: 1;
}

.hero-container {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 2; /* Above the overlay */
}

.profile-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 0rem;
}

.profile-img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.hero-title {
  font-size: 2rem;
  font-weight: 700;
  color: #F5F5F5;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5); /* Added for better readability */
}

.gradient-text {
  background: linear-gradient(to right, #F5F5F5, #D3D3D3);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3.5rem;
}

.hero-subtitle {
  font-size: 1.125rem;
  color: #D3D3D3;
  max-width: 40rem;
  margin: 0 auto 2rem;
  line-height: 1.5;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5); /* Added for better readability */
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  text-decoration: none;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Space between icon and text */
}

.btn-primary {
  background-color: #25D366;
  color: #FFFFFF;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(37, 211, 102, 0.3); /* Adjusted shadow to match green */
}

.btn-outline {
  border: 2px solid #D3D3D3;
  color: #F5F5F5;
  background-color: #1A2A44;
}

.btn-outline:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

.whatsapp-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.arrow-link {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: #D3D3D3;
  animation: arrow-bounce 2s infinite;
  text-decoration: none;
  z-index: 2; /* Above the overlay */
}

.arrow-link:hover {
  opacity: 0.8;
}

@keyframes arrow-bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translate(-50%, 0);
  }
  40% {
    transform: translate(-50%, -10px);
  }
  60% {
    transform: translate(-50%, -5px);
  }
}

@media (max-width: 600px) {
  .hero-section {
    min-height: 100vh;
    padding: 1rem;
  }
  
  .profile-img {
    width: 150px;
    height: 150px;
  }
  
  .hero-title {
    font-size: 1.5rem;
  }
  .gradient-text {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>