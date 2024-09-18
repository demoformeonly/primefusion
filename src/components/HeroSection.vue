<template>
  <section id="about-company" class="relative bg-white py-20 overflow-hidden">
    <!-- Background Decorative Elements -->
    <div class="absolute inset-0 w-full h-full pointer-events-none">
      <!-- Tech-Inspired Shapes -->
      <div class="absolute top-0 right-0 tech-circuit-board"></div>
      <div class="absolute bottom-0 left-0 tech-digital-grid"></div>
    </div>

    <div class="relative container mx-auto px-6 text-center">
      <!-- Section Title -->
      <h2 class="text-5xl font-extrabold mb-8 text-[#245494] leading-tight tracking-wide tech-text">
        {{ $t('message.aboutCompany') }}
      </h2>

      <!-- Company Description -->
      <p class="text-lg text-[#4e617f] max-w-3xl mx-auto leading-relaxed mb-8 tech-paragraph">
        {{ $t('message.companyDescription') }}
      </p>

      <!-- Call to Action Button -->
      <a href="#services" class="mt-6 inline-block bg-gradient-to-r from-[#245494] to-[#182d63] text-white font-semibold py-3 px-8 rounded-full shadow-xl transition duration-300 ease-in-out hover:bg-[#182d63] transform hover:scale-105 hover:shadow-2xl">
        {{ $t('message.getStarted') }}
      </a>
    </div>

    <!-- Floating Shapes for Tech Look -->
    <div class="absolute top-1/2 left-1/3 transform -translate-y-1/2">
      <div class="floating-tech-sphere-glow"></div>
    </div>
    <div class="absolute bottom-20 right-1/4">
      <div class="floating-tech-polygon-glow"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutCompany',
};
</script>

<style scoped>
/* Tech-Inspired Circuit Board with Glow */
.tech-circuit-board {
  width: 300px;
  height: 300px;
  background: rgba(36, 84, 148, 0.1);
  clip-path: polygon(0% 10%, 10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%);
  position: absolute;
  transform: translate(50%, -50%);
  box-shadow: 0 0 30px rgba(36, 84, 148, 0.4), 0 0 60px rgba(24, 45, 99, 0.4);
}

/* Tech-Inspired Digital Grid with Glow */
.tech-digital-grid {
  width: 400px;
  height: 400px;
  background: rgba(36, 84, 148, 0.05);
  clip-path: inset(10% 10% 10% 10%);
  position: absolute;
  transform: translate(-50%, 50%);
  box-shadow: 0 0 20px rgba(36, 84, 148, 0.3), 0 0 40px rgba(36, 84, 148, 0.5);
}

/* Floating Sphere with Glow */
.floating-tech-sphere-glow {
  width: 150px;
  height: 150px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(36, 84, 148, 0.3), 0 0 30px rgba(36, 84, 148, 0.5);
  animation: float 5s ease-in-out infinite;
}

/* Floating Polygon with Glow */
.floating-tech-polygon-glow {
  width: 100px;
  height: 100px;
  background: rgba(24, 45, 99, 0.2);
  clip-path: polygon(20% 0%, 80% 0%, 100% 40%, 80% 80%, 20% 80%, 0% 40%);
  box-shadow: 0 10px 20px rgba(24, 45, 99, 0.3), 0 0 30px rgba(24, 45, 99, 0.5);
  animation: float 3s ease-in-out infinite;
}

/* Text Tech Styling */
.tech-text {
  color: #245494; /* Dark Blue */
  text-shadow: 0 0 10px rgba(36, 84, 148, 0.6);
  letter-spacing: 0.1em;
}

.tech-paragraph {
  color: #4e617f; /* Soft Gray-Blue */
  line-height: 1.75;
  letter-spacing: 0.05em;
}

/* Floating Animation */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* Button Hover Effect */
button:hover, a:hover {
  filter: brightness(1.1);
}

/* Smooth Hover Transformations */
button, a {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
</style>
