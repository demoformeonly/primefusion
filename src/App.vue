<template>
  <div id="app">
    <Navbar />
    <HeroSection />
    <Features />
    <Testimonials />
    <CallToAction />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import Features from './components/Features.vue';
import CallToAction from './components/CallToAction.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    HeroSection,
    Features,
    CallToAction,
    Footer,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}
</style>
