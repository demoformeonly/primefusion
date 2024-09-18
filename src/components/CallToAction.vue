<template>
  <section id="cta" class="relative bg-white py-20 overflow-hidden">
    <!-- Background Decorative Elements -->
    <div class="absolute inset-0 w-full h-full pointer-events-none">
      <!-- Tech-Inspired Shapes -->
      <div class="absolute top-0 right-0 tech-shape-one"></div>
      <div class="absolute bottom-0 left-0 tech-shape-two"></div>
      <!-- Additional Random Shapes -->
      <div class="absolute top-1/4 left-1/4 tech-random-shape-one"></div>
      <div class="absolute bottom-1/4 right-1/4 tech-random-shape-two"></div>
      <div class="absolute top-1/2 left-3/4 transform -translate-y-1/2 tech-random-shape-three"></div>
    </div>

    <div class="relative container mx-auto px-6 text-center">
      <!-- Section Title -->
      <h2 class="text-4xl sm:text-5xl font-extrabold mb-8 text-[#245494] leading-tight tracking-wide tech-text">
        “Your Digital Success Begins Here”
      </h2>

      <!-- Company Description -->
      <p class="text-lg sm:text-xl text-[#4e617f] max-w-3xl mx-auto leading-relaxed mb-8 tech-paragraph">
        In today’s rapidly evolving digital world, building a strong online presence is no longer optional. It’s essential. We are here to bring your vision to life by creating innovative websites and professional online stores that perfectly reflect your brand identity. Let us take your ideas and transform them into an engaging digital experience that leaves a lasting impression.
      </p>

      <!-- Call to Action Buttons -->
      <div class="flex flex-wrap justify-center items-center space-x-4 gap-y-4 mb-8 relative z-10">
        <!-- Facebook Button -->
        <a href="https://www.facebook.com" target="_blank" class="flex items-center space-x-2 bg-gradient-to-r from-[#1877f2] to-[#004db3] hover:from-[#004db3] hover:to-[#1877f2] text-white py-3 px-5 rounded-full shadow-lg transition duration-300 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.404.597 24 1.325 24H12.82v-9.294H9.692V11.41h3.128V8.881c0-3.097 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.142v3.24H17.68c-1.382 0-1.65.656-1.65 1.618v2.118h3.3l-.43 3.296h-2.87V24h5.623c.728 0 1.325-.597 1.325-1.324V1.325C24 .597 23.403 0 22.675 0z"/>
          </svg>
          <span>Facebook</span>
        </a>

        <!-- LinkedIn Button -->
        <a href="https://www.linkedin.com" target="_blank" class="flex items-center space-x-2 bg-gradient-to-r from-[#0077b5] to-[#004080] hover:from-[#004080] hover:to-[#0077b5] text-white py-3 px-5 rounded-full shadow-lg transition duration-300 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22.23 0H1.77C.792 0 0 .774 0 1.722v20.555C0 23.225.792 24 1.77 24h20.46c.978 0 1.77-.775 1.77-1.722V1.722C24 .774 23.208 0 22.23 0zM7.11 20.453H3.56V9.28h3.55v11.174zM5.334 7.808c-1.13 0-1.944-.805-1.944-1.812 0-1.025.832-1.811 1.977-1.811 1.145 0 1.944.786 1.967 1.811 0 1.008-.822 1.812-2 1.812zM20.454 20.453h-3.554v-5.763c0-1.369-.489-2.304-1.71-2.304-.932 0-1.486.63-1.729 1.238-.089.216-.111.516-.111.818v6.01h-3.554s.046-9.755 0-11.173h3.554v1.581c.472-.73 1.304-1.769 3.174-1.769 2.317 0 4.05 1.498 4.05 4.714v6.647z"/>
          </svg>
          <span>LinkedIn</span>
        </a>

        <!-- WhatsApp Button -->
        <a href="https://wa.me/123456789" target="_blank" class="flex items-center space-x-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white py-3 px-5 rounded-full shadow-lg transition duration-300 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M.057 23.251l1.687-6.157A11.467 11.467 0 0 1 11.517.001c6.344 0 11.485 5.141 11.485 11.484c0 6.343-5.141 11.481-11.485 11.481c-1.958 0-3.842-.511-5.511-1.477l-6.011 1.762l.062-.001zm6.597-3.482c1.584.943 3.263 1.443 5.007 1.443c5.262 0 9.546-4.284 9.546-9.543c0-5.262-4.284-9.547-9.546-9.547c-5.261 0-9.546 4.285-9.546 9.547c0 2.037.595 3.983 1.726 5.67l-.993 3.623l3.806-1.193zM17.844 14.14c-.276-.138-1.631-.805-1.884-.897c-.252-.093-.435-.138-.618.139c-.184.276-.71.897-.87 1.082c-.161.184-.322.207-.598.069c-.276-.138-1.164-.429-2.22-1.365c-.822-.731-1.377-1.633-1.539-1.91c-.161-.276-.017-.426.122-.565c.126-.126.276-.322.414-.483c.138-.161.184-.23.276-.391c.092-.184.046-.322-.023-.46c-.069-.138-.593-.987-.814-1.345c-.207-.329-.397-.58-.576-.776c-.207-.233-.43-.23-.585-.138c-.184.069-.391.276-.544.426c-.276.253-.518.391-.706.373c-.207-.017-.489-.092-.694-.184c-.186-.092-.373-.207-.464-.542c-.138-.184-.09-.395-.046-.585c.092-.355.486-.853.684-1.137c.184-.276.792-.928 1.126-1.21c.435-.282.74-.49.947-.668c.69-.425 1.343-.721 1.957-.937c.476-.169.935-.185 1.382-.094c.451.092.963.462 1.146.743c.23.284.43.664.677.99c.246.284.527.54.812.724c.239.158.512.26.785.295c.118.023.226.092.332.184c.154.137.278.347.332.552c.092.373.046.747-.092 1.08c-.092.249-.295.519-.477.708c-.263.286-.566.538-.89.716c-.308.168-.604.26-.897.28c-.275.015-.56-.092-.794-.305z"/>
          </svg>
          <span>WhatsApp</span>
        </a>

        <!-- Email Button -->
        <a href="mailto:example@example.com" class="flex items-center space-x-2 bg-gradient-to-r from-[#0072ff] to-[#00c6ff] hover:from-[#00c6ff] hover:to-[#0072ff] text-white py-3 px-5 rounded-full shadow-lg transition duration-300 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M12 13.185L22.68 6.198c.77-.548.771-1.616.001-2.166L12.12.064a1.657 1.657 0 0 0-1.237-.144c-.208.1-.388.247-.546.41L1.325 4.577C.524 5.139.536 6.218 1.326 6.759l9.68 6.987c.64.462 1.574.376 2.142-.169zm1.51-5.229L12 8.059l-1.51-.984c-.41-.259-.62-.617-.511-.948.11-.331.46-.586.827-.586.178 0 .361.048.527.147L12 6.943l.662-.423c.257-.174.567-.247.869-.206.302.041.606.22.776.506.173.291.179.629.026.908-.154.285-.438.481-.762.595zM4.175 6.536L11.927 12l-7.783 5.657C3.357 18.373 4.22 18 4.656 17.526l.015-.015L12 13.185l4.319 3.044c.22.158.478.24.726.234.24-.006.477-.089.684-.254.16-.136.29-.315.385-.506.093-.204.147-.418.165-.634.016-.259-.036-.515-.124-.748-.085-.234-.212-.46-.381-.668L4.175 6.536zm15.316 10.954c-.322.278-.755.385-1.175.233-.321-.129-.601-.343-.772-.623-.155-.236-.242-.505-.284-.77-.038-.266.01-.54.138-.783l.131-.258L12 12.185l5.717 4.124c.04.025.086.053.134.08.263.188.568.339.882.428.318.09.641.126.969.096.347-.029.681-.135.96-.305.229-.154.444-.339.629-.545.225-.244.379-.54.493-.84.053-.168.084-.343.093-.52.015-.279-.019-.557-.12-.816-.055-.182-.16-.362-.285-.516l-9.68-6.987z"/>
          </svg>
          <span>Email</span>
        </a>

        <!-- Call Button -->
        <a href="tel:+123456789" class="flex items-center space-x-2 bg-gradient-to-r from-[#34b7f1] to-[#007a87] hover:from-[#007a87] hover:to-[#34b7f1] text-white py-3 px-5 rounded-full shadow-lg transition duration-300 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M21.278 16.846c-2.516 0-4.553-2.037-4.553-4.553 0-.814.153-1.588.431-2.306a.499.499 0 0 0-.095-.57l-1.872-1.87c-.173-.173-.419-.248-.651-.181l-1.976.394a.49.49 0 0 1-.563-.432l-.644-2.963a.496.496 0 0 0-.513-.412l-2.19.163a.5.5 0 0 0-.452.595l.163 2.188a.496.496 0 0 1-.41.512l-2.965.645a.49.49 0 0 1-.433-.564l.393-1.977a.493.493 0 0 0-.18-.652l-1.87-1.871a.495.495 0 0 0-.571-.096A4.548 4.548 0 0 0 3.153 5.724c0-2.517 2.037-4.553 4.553-4.553 1.26 0 2.446.496 3.318 1.381.851.857 1.562 1.838 2.09 2.917.576 1.14 1.111 2.33 1.565 3.528.462 1.217.691 2.528.575 3.85-.071.746-.36 1.468-.798 2.079-.732 1.01-1.722 1.793-2.881 2.32a4.547 4.547 0 0 1-1.981.264c-2.094 0-4.147-1.082-5.126-2.771l1.316-.659c.698-.348 1.469-.423 2.216-.146.366.092.757.015 1.025-.256.354-.354.493-.857.445-1.363-.038-.351.146-.696.462-.889.577-.343 1.237-.623 1.911-.764a4.27 4.27 0 0 0 2.17-1.04c.457-.476.823-1.016 1.094-1.577.485-.849.874-1.754 1.127-2.672.168-.615.239-1.284.12-1.926-.227-1.055-.655-2.086-1.272-2.967-.678-1.028-1.4-2.004-2.252-2.891a8.792 8.792 0 0 0-2.885-1.849c-1.379-.539-2.906-.78-4.36-.692-1.275.062-2.54.29-3.737.684-.47.144-.809.59-.809 1.087 0 .088.038.175.092.236a.5.5 0 0 0 .268.097.493.493 0 0 0 .465-.357c.221-.512.587-1.017 1.027-1.454.954-.923 2.12-1.609 3.346-2.079 1.546-.51 3.201-.748 4.833-.655a9.805 9.805 0 0 1 3.942.944c.709.464 1.374.98 1.986 1.572.975 1.196 1.843 2.49 2.564 3.89.694 1.255 1.216 2.585 1.48 3.967.274 1.432.35 2.896.215 4.331-.129 1.181-.4 2.348-.787 3.486a4.521 4.521 0 0 1-3.238 2.501z"/>
          </svg>
          <span>Call</span>
        </a>
      </div>
    </div>

    <!-- Floating Shapes for Tech Look -->
    <div class="absolute top-1/3 left-1/4 transform -translate-y-1/2">
      <div class="floating-tech-hexagon"></div>
    </div>
    <div class="absolute bottom-1/4 right-1/4">
      <div class="floating-tech-triangle"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CtaSection',
};
</script>

<style scoped>
/* Tech-Inspired Shapes with Glow */
.tech-shape-one {
  width: 250px;
  height: 250px;
  background: rgba(36, 84, 148, 0.1);
  clip-path: polygon(10% 0%, 90% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
  position: absolute;
  transform: translate(50%, -50%);
  box-shadow: 0 0 30px rgba(36, 84, 148, 0.4), 0 0 60px rgba(24, 45, 99, 0.4);
}

.tech-shape-two {
  width: 300px;
  height: 300px;
  background: rgba(36, 84, 148, 0.05);
  clip-path: circle(50%);
  position: absolute;
  transform: translate(-50%, 50%);
  box-shadow: 0 0 20px rgba(36, 84, 148, 0.3), 0 0 40px rgba(36, 84, 148, 0.5);
}

.tech-random-shape-one {
  width: 150px;
  height: 150px;
  background: rgba(24, 45, 99, 0.1);
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  position: absolute;
  transform: translate(-20%, 20%);
  box-shadow: 0 0 20px rgba(24, 45, 99, 0.3);
}

.tech-random-shape-two {
  width: 120px;
  height: 120px;
  background: rgba(24, 45, 99, 0.2);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  position: absolute;
  transform: translate(20%, -20%);
  box-shadow: 0 0 15px rgba(24, 45, 99, 0.3);
}

.tech-random-shape-three {
  width: 180px;
  height: 180px;
  background: rgba(24, 45, 99, 0.15);
  clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
  position: absolute;
  transform: translate(-40%, 40%);
  box-shadow: 0 0 20px rgba(24, 45, 99, 0.3);
}



/* Floating Tech Shapes */
.floating-tech-hexagon {
  width: 100px;
  height: 100px;
  background: rgba(36, 84, 148, 0.2);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  position: absolute;
  box-shadow: 0 10px 20px rgba(36, 84, 148, 0.3), 0 0 30px rgba(36, 84, 148, 0.5);
  animation: float 5s ease-in-out infinite;
}

.floating-tech-triangle {
  width: 100px;
  height: 100px;
  background: rgba(24, 45, 99, 0.2);
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  position: absolute;
  box-shadow: 0 10px 20px rgba(24, 45, 99, 0.3), 0 0 30px rgba(24, 45, 99, 0.5);
  animation: float 3s ease-in-out infinite;
}

/* Responsive Design */
@media (max-width: 768px) {
  .tech-text {
    font-size: 3xl;
  }

  .tech-paragraph {
    font-size: lg;
  }

  .cta-buttons a {
    flex-direction: column;
    text-align: center;
  }

  .tech-shape-one, .tech-shape-two, .tech-random-shape-one, .tech-random-shape-two, .tech-random-shape-three, .tech-curved-shape {
    width: 150px;
    height: 150px;
  }
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
</style>
