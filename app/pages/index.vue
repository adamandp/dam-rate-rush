<template>
  <div
    class="app-wrapper font-sans antialiased bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 min-h-screen relative selection:bg-blue-500/30"
  >
    <!-- Background Ambient Glows -->
    <div
      class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 dark:bg-blue-600/20 blur-[120px] pointer-events-none z-0 transition-colors duration-500"
    ></div>
    <div
      class="absolute top-[20%] right-[-10%] w-[30%] h-[30%] rounded-full bg-purple-400/10 dark:bg-purple-600/10 blur-[100px] pointer-events-none z-0 transition-colors duration-500"
    ></div>

    <!-- Main App Container -->
    <div class="relative z-10 flex flex-col min-h-screen">
      <!-- Navigation -->
      <Navbar />

      <!-- Main Content -->
      <main class="grow flex flex-col relative z-20">
        <!-- Hero Section -->
        <HeroSection />

        <!-- Floating Search Form Area -->
        <SearchSection />

        <!-- Features Section -->
        <FeaturesSection />

        <!-- Trusted By / Couriers Section -->
        <TrustSection />
      </main>

      <!-- Footer -->
      <FooterSection />
    </div>
  </div>
</template>
