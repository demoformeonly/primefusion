<template>
  <section id="about-company" class="relative bg-white py-20 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden w-full h-full">
      <svg class="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <!-- First Wave (Darker Blue) -->
        <path fill="rgb(36, 84, 148)" d="M0,128L48,149.3C96,171,192,213,288,213.3C384,213,480,171,576,160C672,149,768,171,864,197.3C960,224,1056,256,1152,250.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L0,320Z" />
        <!-- Second Wave (Medium Blue) -->
        <path fill="rgb(24, 45, 99)" fill-opacity="0.7" d="M0,192L60,186.7C120,181,240,171,360,154.7C480,139,600,117,720,112C840,107,960,117,1080,144C1200,171,1320,213,1380,234.7L1440,256V320H0Z" />
        <!-- Third Wave (Lighter Blue) -->
        <path fill="rgb(96, 130, 182)" fill-opacity="0.5" d="M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,165.3C672,171,768,181,864,181.3C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z" />
      </svg>
    </div>

    <!-- Add Image with Large Blob Shape -->
    <div class="relative container mx-auto px-6 text-center">
      <div class="w-full max-w-4xl mx-auto mb-12">
        <img 
          src="https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Company Image"
          class="w-full h-full shadow-lg large-blob-image" 
        />
      </div>

  <!-- Added Text Content -->
  <div class="max-w-6xl mx-auto text-center mb-12">
      <h2 class="text-4xl font-semibold mb-8 tech-text">{{ $t('message.featuresHeader') }}</h2>
      <!-- Centered Grid Layout for Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center place-items-center">
        <div class="glass-card">
          <img src="@/assets/ecommerce.png" alt="Web Design" class="icon mb-4"/> <!-- Icon for Feature 1 -->
          <h3 class="text-2xl font-semibold mb-4 card-title">{{ $t('message.featureOneTitle') }}</h3>
          <p class="card-text">{{ $t('message.featureOneDescription') }}</p>
        </div>
        <div class="glass-card">
          <img src="@/assets/ecommerce.png" alt="E-commerce" class="icon mb-4"/> <!-- Icon for Feature 2 -->
          <h3 class="text-2xl font-semibold mb-4 card-title">{{ $t('message.featureTwoTitle') }}</h3>
          <p class="card-text">{{ $t('message.featureTwoDescription') }}</p>
        </div>
        <div class="glass-card">
          <img src="@/assets/ecommerce.png" alt="Services" class="icon mb-4"/> <!-- Icon for Feature 3 -->
          <h3 class="text-2xl font-semibold mb-4 card-title">{{ $t('message.featureThreeTitle') }}</h3>
          <p class="card-text">{{ $t('message.featureThreeDescription') }}</p>
        </div>
        <div class="glass-card">
          <img src="@/assets/ecommerce.png" alt="Technology" class="icon mb-4"/> <!-- Icon for Feature 4 -->
          <h3 class="text-2xl font-semibold mb-4 card-title">{{ $t('message.featureFourTitle') }}</h3>
          <p class="card-text">{{ $t('message.featureFourDescription') }}</p>
        </div>
        <div class="glass-card">
          <img src="@/assets/ecommerce.png" alt="Support" class="icon mb-4"/> <!-- Icon for Feature 5 -->
          <h3 class="text-2xl font-semibold mb-4 card-title">{{ $t('message.featureFiveTitle') }}</h3>
          <p class="card-text">{{ $t('message.featureFiveDescription') }}</p>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<style scoped>
/* Updated Styling */
.large-blob-image {
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70% !important;
}

/* Glass Effect for Feature Cards */
.glass-card {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  backdrop-filter: blur(12px);
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.glass-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

/* Centering the Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
  gap: 20px;
  justify-items: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  place-content: center; /* Ensure the whole grid content is centered */
}

/* Updated Icon Styling */
.icon {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
}

/* Title Styling */
.tech-text {
  color: #1e3a8a;
  text-shadow: 0 0 10px rgba(30, 58, 138, 0.6);
  letter-spacing: 0.1em;
}

.card-title {
  color: #1e3a8a;
}

.card-text {
  color: #2d3748;
  line-height: 1.6;
  letter-spacing: 0.05em;
}

/* Smooth Hover Effect */
button, a {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
</style>