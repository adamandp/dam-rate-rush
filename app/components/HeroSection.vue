<template>
  <section
    class="container mx-auto px-6 pt-12 pb-24 lg:pt-20 lg:pb-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
  >
    <!-- Hero Text -->
    <div
      class="flex-1 space-y-8 animate-fade-in-up w-full max-w-2xl lg:max-w-none text-center lg:text-left"
    >
      <div
        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-sm font-medium text-blue-600 dark:text-blue-300 mb-2"
      >
        <span class="relative flex h-2 w-2">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 dark:bg-blue-400 opacity-75"
          ></span>
          <span
            class="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-500"
          ></span>
        </span>
        New: Real-time tracking available
      </div>

      <h1
        class="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white"
      >
        Quick Check <br class="hidden sm:block" />
        <span
          class="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400"
        >
          Shipping Rates </span
        ><br />
        Instantly,
        <span class="text-slate-700 dark:text-slate-100">Anywhere.</span>
      </h1>

      <p
        class="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
      >
        Find the cheapest and fastest delivery options across Indonesia with
        just one click. Transparent pricing, no hidden fees.
      </p>

      <!-- Decorative Stats -->
      <div
        class="pt-4 flex items-center justify-center lg:justify-start gap-8 text-sm text-slate-500 font-medium"
      >
        <div class="flex flex-col gap-1">
          <span class="text-slate-900 dark:text-white text-xl font-bold"
            >15+</span
          >
          <span>Couriers</span>
        </div>
        <div class="w-px h-10 bg-slate-300 dark:bg-slate-700"></div>
        <div class="flex flex-col gap-1">
          <span class="text-slate-900 dark:text-white text-xl font-bold"
            >100%</span
          >
          <span>Accurate</span>
        </div>
        <div class="w-px h-10 bg-slate-300 dark:bg-slate-700"></div>
        <div class="flex flex-col gap-1">
          <span class="text-slate-900 dark:text-white text-xl font-bold"
            >24/7</span
          >
          <span>Updates</span>
        </div>
      </div>
    </div>

    <!-- Hero Graphic -->
    <div
      class="flex-1 w-full max-w-lg lg:max-w-none flex justify-center lg:justify-end animate-fade-in-up"
      style="animation-delay: 0.2s"
    >
      <div class="relative w-full aspect-square max-w-125 animate-float">
        <div
          class="absolute inset-0 bg-linear-to-tr from-blue-500/20 to-cyan-400/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen transition-colors duration-500"
        ></div>

        <!-- Main Card -->
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 glass-panel rounded-3xl overflow-hidden flex flex-col p-6"
        >
          <!-- Mock UI Header -->
          <div
            class="flex justify-between items-center border-b border-slate-200 dark:border-white/5 pb-4 mb-4"
          >
            <div
              class="w-24 h-4 bg-slate-200 dark:bg-white/10 rounded-full"
            ></div>
            <div class="flex gap-2">
              <div
                class="w-3 h-3 rounded-full bg-red-400/80 dark:bg-red-500/50"
              ></div>
              <div
                class="w-3 h-3 rounded-full bg-yellow-400/80 dark:bg-yellow-500/50"
              ></div>
              <div
                class="w-3 h-3 rounded-full bg-green-400/80 dark:bg-green-500/50"
              ></div>
            </div>
          </div>
          <!-- Mock Route -->
          <div class="flex-1 relative flex flex-col justify-center gap-6 px-4">
            <div class="flex items-center gap-4">
              <div
                class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 relative z-10 shadow-[0_0_15px_rgba(59,130,246,0.2)] dark:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              >
                <i class="ph ph-map-pin"></i>
              </div>
              <div class="flex-1 space-y-2">
                <div
                  class="w-1/3 h-3 bg-slate-200 dark:bg-white/20 rounded-full"
                ></div>
                <div
                  class="w-2/3 h-2 bg-slate-100 dark:bg-white/10 rounded-full"
                ></div>
              </div>
            </div>

            <div
              class="absolute left-8.75 top-[calc(50%-2rem)] bottom-[calc(50%-2rem)] w-0.5 bg-linear-to-b from-slate-300 to-blue-400 dark:from-slate-600 dark:to-blue-500 border-l border-dashed border-transparent z-0"
            ></div>

            <div class="flex items-center gap-4">
              <div
                class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 relative z-10 shadow-[0_0_15px_rgba(59,130,246,0.2)] dark:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              >
                <i class="ph ph-map-pin-line"></i>
              </div>
              <div class="flex-1 space-y-2">
                <div
                  class="w-1/2 h-3 bg-slate-200 dark:bg-white/20 rounded-full"
                ></div>
                <div
                  class="w-3/4 h-2 bg-slate-100 dark:bg-white/10 rounded-full"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Floating Badges -->
        <div
          class="absolute -right-4 top-1/4 glass-panel px-4 py-3 rounded-2xl flex items-center gap-3 animate-float"
          style="animation-delay: 1s"
        >
          <div
            class="w-8 h-8 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400"
          >
            <i class="ph ph-check"></i>
          </div>
          <div>
            <div class="text-xs text-slate-500 dark:text-slate-400">
              Best Price
            </div>
            <div class="text-sm font-bold text-slate-800 dark:text-white">
              Rp 15.000
            </div>
          </div>
        </div>

        <div
          class="absolute lg:-left-8 bottom-1/4 glass-panel px-4 py-3 rounded-2xl flex items-center gap-3 animate-float"
          style="animation-delay: 2s"
        >
          <div
            class="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-400"
          >
            <i class="ph ph-truck"></i>
          </div>
          <div class="text-sm font-bold text-slate-800 dark:text-white">
            Express Delivery
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
