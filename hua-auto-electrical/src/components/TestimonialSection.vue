<template>
  <section class="section-testimonial section pc" id ="testimonial">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <a
            href="https://www.google.com/maps/place/Hua+Auto+Electrical/@3.2077801,101.6163059,17z/data=!4m8!3m7!1s0x31cc4ba37c961ba1:0xbeb97a7ba35bead0!8m2!3d3.2077801!4d101.6211768!9m1!1b1!16s%2Fg%2F11byn046bl?entry=ttu&g_ep=EgoyMDI1MDUxMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            class="google-review-link"
          >
            <img
              style="display: block; max-width: 360px; width: 100%; margin: 0 auto 40px;"
              src="/images/google-review-new.png"
              alt="Google Reviews HUA AUTO ELECTRICAL"
            />
          </a>

          <Carousel 
            :settings="settings" 
            :breakpoints="breakpoints" 
            :wrap-around="false"
            class="testimonial-carousel"
          >
            <Slide v-for="testimonial in testimonials" :key="testimonial.id">
              <div class="testi-item">
                <div class="testi-box">
                  <div class="testi-content">
                    <div class="testi-imgs">
                      <img class="testi-pic" :src="testimonial.customerImage" :alt="testimonial.customerName" />
                      <img class="testi-ggl" :src="testimonial.googleImage" alt="Google Review" />
                    </div>
                    <div class="testi-monial" v-html="testimonial.testimonialText"></div>
                  </div>
                  <div class="testi-footer">
                    <img class="testi-star" :src="testimonial.starImage" alt="Star Rating" />
                    <div class="testi-cust">
                      <div class="testi-name">
                        <b>{{ testimonial.customerName }}</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
              <Pagination />
            </template>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const testimonials = ref([
  {
    id: 1,
    customerImage: '/images/customer-01.png',
    googleImage: '/images/google.png',
    testimonialText: "An expert wireman—he solved my Beemer's rear light wiring issue in under 10 minutes at an extremely reasonable price. Highly recommended!",
    starImage: '/images/5-stars.png',
    customerName: 'Jasmeet Randhawa'
  },
  {
    id: 2,
    customerImage: '/images/customer-02.png',
    googleImage: '/images/google.png',
    testimonialText: "Expert advice, thorough inspections, and excellent service. They've been around for a while—and it shows. 👍🏼",
    starImage: '/images/5-stars.png',
    customerName: 'Ryan Wong'
  },
  {
    id: 3,
    customerImage: '/images/customer-03.png',
    googleImage: '/images/google.png',
    testimonialText: 'Professional workers and satisfying results.',
    starImage: '/images/5-stars.png',
    customerName: 'Shah Zek'
  },
  {
    id: 4,
    customerImage: '/images/customer-04.png',
    googleImage: '/images/google.png',
    testimonialText: "Reliable one-stop car repair service—covering everything from engine and electrical work to detailing, A/C, and routine maintenance. Professional, efficient, and highly recommended!",
    starImage: '/images/5-stars.png',
    customerName: 'kelvin hua'
  }
]);

const settings = ref({
  itemsToShow: 1,
  snapAlign: 'center',
});

const breakpoints = ref({
  700: {
    itemsToShow: 2,
    snapAlign: 'start',
  },
  1024: {
    itemsToShow: 3,
    snapAlign: 'start',
  },
  1300: {
    itemsToShow: 3.5,
    snapAlign: 'start',
  }
});
</script>

<style scoped>
.section-testimonial {
  position: relative;
  padding: 5rem 1rem;
}

.section-testimonial::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(26, 42, 68, 0.7), rgba(26, 42, 68, 0.7)),
              url('./images/testimonial-background.jpg'); /* Replace with your path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
}


.container {
  position: relative; /* Ensure content stays above the background */
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  z-index: 1;
}

/* Rest of your existing styles remain the same */
.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}

.col-xs-12 {
  width: 100%;
  padding: 0 15px;
}

.google-review-link {
  display: block;
  text-align: center;
  margin-bottom: 40px;
}

/* Carousel fixes */
:deep(.testimonial-carousel) {
  opacity: 1 !important;
  visibility: visible !important;
}

.testi-item {
  padding: 0 16px;
  box-sizing: border-box;
  height: 100%;
}

.testi-box {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.testi-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.testi-content {
  flex: 1;
}

.testi-imgs {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.testi-pic {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
  border: 2px solid #eee;
}

.testi-ggl {
  width: 24px;
  height: 24px;
  margin-left: auto;
}

.testi-monial {
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.testi-footer {
  margin-top: auto;
}

.testi-star {
  width: 100px;
  height: auto;
  margin-bottom: 10px;
}

.testi-name {
  font-size: 15px;
  color: #333;
}

.testi-name b {
  font-weight: 600;
}

/* Carousel navigation styles */
:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  transition: background-color 0.3s ease;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  background-color: rgba(0, 0, 0, 0.8);
}

:deep(.carousel__pagination-button) {
  background-color: rgba(0, 0, 0, 0.3);
}

:deep(.carousel__pagination-button--active) {
  background-color: rgba(0, 0, 0, 0.7);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .testi-box {
    min-height: 280px;
  }
}
</style>