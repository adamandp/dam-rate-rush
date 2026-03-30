<template>
  <footer
    class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-white/5 pt-16 pb-8"
  >
    <div class="container mx-auto px-6">
      <div
        class="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12"
      >
        <div
          class="flex flex-col justify-center items-center md:items-start gap-4 text-center md:text-left w-full"
        >
          <div class="flex items-center gap-2 justify-center w-full">
            <div
              class="w-8 h-8 rounded-lg bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center"
            >
              <i class="ph ph-package text-white text-xl"></i>
            </div>
            <span class="text-xl font-bold text-slate-900 dark:text-white">
              Rate<span class="text-blue-500">Rush</span>
            </span>
          </div>
          <div class="w-full flex justify-center items-center">
            <p
              class="text-slate-500 dark:text-slate-400 text-sm text-center max-w-sm"
            >
              The smartest way to compare shipping rates and find the best
              delivery options in Indonesia.
            </p>
          </div>
        </div>
      </div>

      <div
        class="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p class="text-slate-500 dark:text-slate-400 text-sm">
          &copy; 2026 RateRush. All rights reserved.
        </p>
        <div class="flex gap-4 text-slate-400">
          <a
            href="https://github.com/adamandp"
            class="hover:text-blue-500 transition-colors"
            ><i class="ph ph-github-logo text-xl"></i
          ></a>
        </div>
      </div>
    </div>
  </footer>
</template>
