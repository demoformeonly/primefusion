<template>
  <nav class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center">
        <!-- Increase the height for a bigger logo -->
        <img src="@/assets/logo.png" alt="Brand Logo" class="h-16 mr-3" />
      </div>

      <!-- Mobile Menu Button (Hamburger) -->
      <button @click="toggleMenu" class="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-8">
        <a href="#features" class="text-gray-600 hover:text-blue-600 transition duration-300">{{ $t('message.features') }}</a>
        <a href="#cta" class="text-gray-600 hover:text-blue-600 transition duration-300">{{ $t('message.getStartedCTA') }}</a>

        <!-- Language Switcher -->
        <div class="flex space-x-4">
          <button @click="changeLanguage('en')" class="px-4 py-2 bg-gradient-to-r from-[#245494] to-[#182d63] text-white rounded-full shadow-md">EN</button>
          <button @click="changeLanguage('ar')" class="px-4 py-2 bg-gradient-to-r from-[#245494] to-[#182d63] text-white rounded-full shadow-md">AR</button>
        </div>
      </div>
    </div>

    <!-- Mobile Sidebar Menu -->
    <transition name="slide">
      <div v-if="isMenuOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40">
        <div class="fixed top-0 right-0 w-64 bg-white shadow-lg h-full z-50">
          <div class="flex items-center justify-between px-4 py-4 border-b">
            <!-- Adjust the logo height here as well -->
            <img src="@/assets/logo.png" alt="Brand Logo" class="h-12" />
            <button @click="toggleMenu" class="text-gray-600 hover:text-blue-600 focus:outline-none">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Menu Links -->
          <div class="mt-6 px-4">
            <a href="#features" class="block py-2 text-gray-600 hover:text-blue-600">{{ $t('message.features') }}</a>
            <a href="#cta" class="block py-2 text-gray-600 hover:text-blue-600">{{ $t('message.getStartedCTA') }}</a>

            <!-- Language Switcher -->
            <div class="mt-6 flex space-x-4">
              <button @click="changeLanguage('en')" class="w-full px-4 py-2 bg-gradient-to-r from-[#245494] to-[#182d63] text-white rounded-full shadow-md">EN</button>
              <button @click="changeLanguage('ar')" class="w-full px-4 py-2 bg-gradient-to-r from-[#245494] to-[#182d63] text-white rounded-full shadow-md">AR</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>

<style scoped>
/* Smooth slide-in animation for the mobile sidebar */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}
</style>
