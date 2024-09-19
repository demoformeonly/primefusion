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
        {{ $t('message.ourmessage') }}
      </h2>

      <!-- Company Description -->
      <p class="text-lg sm:text-xl text-[#4e617f] max-w-3xl mx-auto leading-relaxed mb-8 tech-paragraph">
        {{ $t('message.themessage') }}
      </p>

      <!-- Call to Action Buttons -->
      <div class="flex flex-wrap justify-center items-center space-x-4 gap-y-4 mb-8 relative z-10">
        <!-- Email Button -->
        <a :href="'mailto:primefusin77@gmail.com'" class="flex items-center space-x-2 bg-gradient-to-r from-[#f39c12] to-[#e67e22] hover:from-[#e67e22] hover:to-[#f39c12] text-white py-3 px-5 rounded-full shadow-lg transition duration-300 ease-in-out" aria-label="Email us">
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 13.065L1.2 6.7V19.2c0 .445.355.8.8.8h20c.445 0 .8-.355.8-.8V6.7l-10.8 6.365zm0-2.13L22 4.8c0-.445-.355-.8-.8-.8H2.8c-.445 0-.8.355-.8.8l10.8 6.135z"/>
  </svg>
  <span>email</span>
</a>


        <!-- Phone Button -->
        <a :href="'tel:+00972569857148'" class="flex items-center space-x-2 bg-gradient-to-r from-[#27ae60] to-[#2ecc71] hover:from-[#2ecc71] hover:to-[#27ae60] text-white py-3 px-5 rounded-full shadow-lg transition duration-300 ease-in-out" aria-label="Call us">
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22.42 16.24l-5.31-2.12c-.6-.24-1.27-.06-1.7.45l-1.72 2.1c-2.9-1.57-5.22-3.9-6.79-6.79l2.1-1.71c.5-.44.69-1.12.45-1.7l-2.12-5.31c-.29-.73-1.07-1.13-1.84-.96L2.1 3.09c-.72.15-1.26.79-1.26 1.53 0 9.94 8.06 18 18 18 .74 0 1.38-.54 1.53-1.26l1.2-5.12c.18-.77-.23-1.55-.96-1.84z"/>
  </svg>
  <span>phone</span>
</a>

        <!-- Facebook Button -->
        <a href="https://www.facebook.com/profile.php?id=61566132294240" target="_blank" class="flex items-center space-x-2 bg-gradient-to-r from-[#1877f2] to-[#004db3] hover:from-[#004db3] hover:to-[#1877f2] text-white py-3 px-5 rounded-full shadow-lg transition duration-300 ease-in-out" aria-label="Follow us on Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.404.597 24 1.325 24H12.82v-9.294H9.692V11.41h3.128V8.881c0-3.097 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.142v3.24H17.68c-1.382 0-1.65.656-1.65 1.618v2.118h3.3l-.43 3.296h-2.87V24h5.623c.728 0 1.325-.597 1.325-1.324V1.325C24 .597 23.403 0 22.675 0z"/>
          </svg>
          <span>facebook</span>
        </a>

        <!-- LinkedIn Button -->
        <a href="https://www.linkedin.com/in/prime-fusion-362844328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" class="flex items-center space-x-2 bg-gradient-to-r from-[#0077b5] to-[#004080] hover:from-[#004080] hover:to-[#0077b5] text-white py-3 px-5 rounded-full shadow-lg transition duration-300 ease-in-out" aria-label="Connect with us on LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22.23 0H1.77C.792 0 0 .774 0 1.722v20.555C0 23.225.792 24 1.77 24h20.46c.978 0 1.77-.775 1.77-1.722V1.722C24 .774 23.208 0 22.23 0zM7.11 20.453H3.56V9.28h3.55v11.174zM5.334 7.808c-1.13 0-1.944-.805-1.944-1.812 0-1.025.832-1.811 1.977-1.811 1.145 0 1.944.786 1.967 1.811 0 1.008-.822 1.812-2 1.812zM20.454 20.453h-3.554v-5.763c0-1.369-.489-2.304-1.71-2.304-.932 0-1.486.63-1.729 1.238-.089.216-.111.516-.111.818v6.01h-3.554s.046-9.755 0-11.173h3.554v1.581c.472-.73 1.304-1.769 3.174-1.769 2.317 0 4.05 1.498 4.05 4.714v6.647z"/>
          </svg>
          <span>linkedin</span>
        </a>

        <!-- WhatsApp Button with Custom Icon -->
        <a :href="`https://wa.me/00972569857148`" target="_blank" class="flex items-center space-x-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white py-3 px-5 rounded-full shadow-lg transition duration-300 ease-in-out" aria-label="Chat with us on WhatsApp">
          <img src="@/assets/whatsapp.png" alt="WhatsApp Icon" class="w-6 h-6" />
          <span>whatsapp</span>
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

/* WhatsApp icon adjustments */
a[aria-label="Chat with us on WhatsApp"] img {
  width: 24px;
  height: 24px;
}
</style>
