<template>
  <section class="section section-testimonial">
    <div class="container">
      <h2 class="section__title">What People Say About Us</h2>
      <Carousel
        :items-to-show="settings.itemsToShow"
        :snap-align="settings.snapAlign"
        :wrap-around="true"
        :breakpoints="breakpoints"
        class="carousel"
      >
        <Slide v-for="(testimonial, index) in testimonials" :key="index">
          <div class="testimonial-card">
            <p class="testimonial-card__text">“{{ testimonial.text }}”</p>
            <h3 class="testimonial-card__author">{{ testimonial.author }}</h3>
            <p class="testimonial-card__role">{{ testimonial.role }}</p>
          </div>
        </Slide>

        <template #addons>
          <Pagination />
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import type { Breakpoints } from 'vue3-carousel';

const testimonials = [
  {
    text: "The service was amazing! I'm definitely coming back.",
    author: 'Jane Doe',
    role: 'Marketing Director',
  },
  {
    text: "Quick, reliable, and friendly. Couldn't ask for more.",
    author: 'John Smith',
    role: 'Software Engineer',
  },
  {
    text: 'Very professional and high quality work!',
    author: 'Lisa Wong',
    role: 'Project Manager',
  },
  {
    text: 'Their attention to detail is unmatched.',
    author: 'Carlos Martinez',
    role: 'Creative Director',
  },
  {
    text: 'Prompt responses and great results. Highly recommended.',
    author: 'Emily Zhang',
    role: 'Business Analyst',
  },
];

const settings = {
  itemsToShow: 1,
  snapAlign: 'center' as const,
};

const breakpoints: Breakpoints = {
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
  },
};
</script>

<style scoped>
.section-testimonial {
  padding: 80px 0;
  background: linear-gradient(
      rgba(26, 42, 68, 0.7),
      rgba(26, 42, 68, 0.7)
    ),
    url('./images/testimonial-background.jpg') center/cover no-repeat;
  color: #fff;
}

.section__title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
  font-weight: bold;
}

.carousel {
  max-width: 1200px;
  margin: 0 auto;
}

.testimonial-card {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.testimonial-card__text {
  font-style: italic;
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.testimonial-card__author {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.testimonial-card__role {
  font-size: 0.95rem;
  color: #ccc;
}
</style>
