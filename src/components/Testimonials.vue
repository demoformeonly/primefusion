<template>
  <section id="advantages" class="relative bg-blue-700 text-white py-16" style="background-color: rgb(20, 52, 164);">
    <!-- Layered Background Waves -->
    <div class="absolute inset-0 overflow-hidden w-full h-full">
      <svg class="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <!-- First Wave (Darker Blue) -->
        <path fill="rgb(20, 52, 164)" d="M0,128L48,149.3C96,171,192,213,288,213.3C384,213,480,171,576,160C672,149,768,171,864,197.3C960,224,1056,256,1152,250.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L0,320Z" />
        <!-- Second Wave (Medium Blue) -->
        <path fill="rgb(0, 71, 171)" fill-opacity="0.7" d="M0,192L60,186.7C120,181,240,171,360,154.7C480,139,600,117,720,112C840,107,960,117,1080,144C1200,171,1320,213,1380,234.7L1440,256V320H0Z" />
        <!-- Third Wave (Lighter Blue) -->
        <path fill="rgb(96, 130, 182)" fill-opacity="0.5" d="M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,165.3C672,171,768,181,864,181.3C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z" />
      </svg>
    </div>

    <div class="relative container mx-auto px-6 text-center z-10">
      <h2 class="text-5xl font-extrabold mb-8 animate-fadeIn">Why Choose Us?</h2>
      <p class="text-lg mb-12 max-w-2xl mx-auto text-gray-300 animate-fadeIn">Discover the benefits of working with a team committed to delivering superior results and support.</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 animate-fadeIn">
        <!-- Advantage Card 1 -->
        <div class="bg-white bg-opacity-10 p-8 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-white border border-blue-400 hover:border-teal-400">
          <div class="w-14 h-14 mb-6 mx-auto bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white">
            <svg class="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-3-3v6m9-9H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2z"/>
            </svg>
          </div>
          <h4 class="text-2xl font-semibold mb-3">High Quality</h4>
          <p class="text-base leading-relaxed text-gray-300">We offer premium services to help your business achieve peak performance and efficiency.</p>
        </div>

        <!-- Advantage Card 2 -->
        <div class="bg-white bg-opacity-10 p-8 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-white border border-blue-400 hover:border-teal-400">
          <div class="w-14 h-14 mb-6 mx-auto bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white">
            <svg class="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6a9 9 0 0018 0H3zm0 12h18a9 9 0 01-18 0z"/>
            </svg>
          </div>
          <h4 class="text-2xl font-semibold mb-3">Scalable Solutions</h4>
          <p class="text-base leading-relaxed text-gray-300">Our services are designed to grow with your business, ensuring long-term success and adaptability.</p>
        </div>

        <!-- Advantage Card 3 -->
        <div class="bg-white bg-opacity-10 p-8 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-white border border-blue-400 hover:border-teal-400">
          <div class="w-14 h-14 mb-6 mx-auto bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white">
            <svg class="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16M4 12h16"/>
            </svg>
          </div>
          <h4 class="text-2xl font-semibold mb-3">24/7 Support</h4>
          <p class="text-base leading-relaxed text-gray-300">Our dedicated support team is available around the clock to assist with all your needs.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AdvantagesSection',
};
</script>

<style scoped>
/* Animation for fadeIn */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeIn {
  animation: fadeIn 1s ease-in-out;
}

/* Card Hover Effects */
.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
