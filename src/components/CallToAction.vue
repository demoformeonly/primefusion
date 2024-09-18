<template>
  <section id="cta" class="relative bg-white py-20 overflow-hidden">
    <!-- Background Decorative Elements -->
    <div class="absolute inset-0 w-full h-full pointer-events-none">
      <!-- Tech-Inspired Shapes -->
      <div class="absolute top-0 right-0 tech-shape-one" aria-hidden="true"></div>
      <div class="absolute bottom-0 left-0 tech-shape-two" aria-hidden="true"></div>
      <!-- Additional Random Shapes -->
      <div class="absolute top-1/4 left-1/4 tech-random-shape-one" aria-hidden="true"></div>
      <div class="absolute bottom-1/4 right-1/4 tech-random-shape-two" aria-hidden="true"></div>
      <div class="absolute top-1/2 left-3/4 transform -translate-y-1/2 tech-random-shape-three" aria-hidden="true"></div>
    </div>

    <div class="relative container mx-auto px-6 text-center">
      <!-- Section Title -->
      <h2 class="text-4xl sm:text-5xl font-extrabold mb-8 text-[#245494] leading-tight tracking-wide tech-text">
        {{ $t('cta.title') }}
      </h2>

      <!-- Company Description -->
      <p class="text-lg sm:text-xl text-[#4e617f] max-w-3xl mx-auto leading-relaxed mb-8 tech-paragraph">
        {{ $t('cta.description') }}
      </p>

      <!-- Call to Action Buttons -->
      <div class="flex flex-wrap justify-center items-center space-x-4 gap-y-4 mb-8 relative z-10">
        <!-- Facebook Button -->
        <a :href="$t('cta.facebookUrl')" target="_blank" class="flex items-center space-x-2 bg-gradient-to-r from-[#1877f2] to-[#004db3] hover:from-[#004db3] hover:to-[#1877f2] text-white py-3 px-5 rounded-full shadow-lg transition duration-300 ease-in-out" aria-label="Follow us on Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.404.597 24 1.325 24H12.82v-9.294H9.692V11.41h3.128V8.881c0-3.097 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.142v3.24H17.68c-1.382 0-1.65.656-1.65 1.618v2.118h3.3l-.43 3.296h-2.87V24h5.623c.728 0 1.325-.597 1.325-1.324V1.325C24 .597 23.403 0 22.675 0z"/>
          </svg>
          <span>{{ $t('cta.facebook') }}</span>
        </a>

        <!-- LinkedIn Button -->
        <a :href="$t('cta.linkedinUrl')" target="_blank" class="flex items-center space-x-2 bg-gradient-to-r from-[#0077b5] to-[#004080] hover:from-[#004080] hover:to-[#0077b5] text-white py-3 px-5 rounded-full shadow-lg transition duration-300 ease-in-out" aria-label="Connect with us on LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22.23 0H1.77C.792 0 0 .774 0 1.722v20.555C0 23.225.792 24 1.77 24h20.46c.978 0 1.77-.775 1.77-1.722V1.722C24 .774 23.208 0 22.23 0zM7.11 20.453H3.56V9.28h3.55v11.174zM5.334 7.808c-1.13 0-1.944-.805-1.944-1.812 0-1.025.832-1.811 1.977-1.811 1.145 0 1.944.786 1.967 1.811 0 1.008-.822 1.812-2 1.812zM20.454 20.453h-3.554v-5.763c0-1.369-.489-2.304-1.71-2.304-.932 0-1.486.63-1.729 1.238-.089.216-.111.516-.111.818v6.01h-3.554s.046-9.755 0-11.173h3.554v1.581c.472-.73 1.304-1.769 3.174-1.769 2.317 0 4.05 1.498 4.05 4.714v6.647z"/>
          </svg>
          <span>{{ $t('cta.linkedin') }}</span>
        </a>

        <!-- WhatsApp Button -->
        <a :href="$t('cta.whatsappUrl')" target="_blank" class="flex items-center space-x-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white py-3 px-5 rounded-full shadow-lg transition duration-300 ease-in-out" aria-label="Chat with us on WhatsApp">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M.057 23.251l1.687-6.157A11.467 11.467 0 0 1 11.517.001c6.344 0 11.485 5.141 11.485 11.484c0 6.343-5.141 11.481-11.485 11.481c-1.958 0-3.842-.511-5.511-1.477l-6.011 1.762l.062-.001zm6.597-3.482c1.584.943 3.263 1.443 5.007 1.443c5.262 0 9.546-4.284 9.546-9.543c0-5.262-4.284-9.547-9.546-9.547c-5.261 0-9.546 4.285-9.546 9.547c0 2.037.595 3.983 1.726 5.67l-.993 3.623l3.806-1.193zM17.844 14.14c-.276-.138-1.631-.805-1.884-.897c-.252-.093-.435-.138-.609.138c-.174.275-.676.897-.827 1.078c-.151.18-.33.287-.607.287c-.291 0-.639-.129-.938-.279c-.61-.258-1.207-.615-1.826-.992c-.615-.373-1.186-.841-1.685-1.342c-.68-.689-1.307-1.559-1.865-2.448c-.438-.748-.873-1.457-1.277-2.198c-.379-.672-.633-1.391-.633-2.178c0-1.51.706-2.842 1.661-3.847c.541-.5 1.174-.783 1.755-.817c.628-.04 1.226.157 1.771.455c.49.267.979.53 1.455.787c.299.127.579.27.864.419c.254.137.473.305.64.502c.176.22.303.456.41.701c.084.208.15.424.204.632c.057.228.094.462.094.693c0 .16-.015.317-.05.468c-.037.178-.103.355-.182.528c-.254.494-.568.973-.971 1.417c-.446.486-.87.906-1.334 1.342c-.156.091-.37.094-.544.018zm-2.171-3.793c-.552 0-1.03-.145-1.465-.429c-.435-.284-.726-.658-.87-1.065c-.161-.398-.207-.773-.138-1.09c.138-.68.676-1.103 1.407-1.277c.322-.065.709-.092 1.058-.092c.399 0 .805.061 1.22.167c.434.104.854.28 1.282.514c.309.134.563.297.741.472c.201.176.378.387.521.608c.118.2.209.44.247.692c.037.246.013.508-.086.746c-.103.258-.282.498-.542.699c-.307.236-.628.47-.939.704c-.395.258-.809.438-1.21.522c-.445.092-.878.141-1.301.141z"/>
          </svg>
          <span>{{ $t('cta.whatsapp') }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Tech Shapes Styling */
.tech-shape-one {
  background: #e0e6ef;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  transform: translate(50%, -50%);
  opacity: 0.5;
}

.tech-shape-two {
  background: #c3d0e3;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  transform: translate(-50%, 50%);
  opacity: 0.5;
}

.tech-random-shape-one {
  background: #dbe2eb;
  width: 120px;
  height: 120px;
  opacity: 0.5;
}

.tech-random-shape-two {
  background: #e0e6ef;
  width: 100px;
  height: 100px;
  opacity: 0.5;
}

.tech-random-shape-three {
  background: #c3d0e3;
  width: 80px;
  height: 80px;
  opacity: 0.5;
}

.tech-text {
  font-family: 'Roboto', sans-serif;
}

.tech-paragraph {
  font-family: 'Open Sans', sans-serif;
}
</style>
