<script setup lang="ts">
const isDark = ref(true);

onMounted(() => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  } else {
    isDark.value = false;
    document.documentElement.classList.remove("dark");
  }
});

const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
};
</script>

<template>
  <nav
    class="container mx-auto px-6 py-6 flex justify-between items-center relative z-20"
  >
    <div class="flex items-center gap-2 cursor-pointer group">
      <div
        class="w-8 h-8 rounded-lg bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform"
      >
        <i class="ph ph-package text-white text-xl"></i>
      </div>
      <span
        class="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
      >
        Rate<span class="text-blue-500 dark:text-blue-400">Rush</span>
      </span>
    </div>

    <button
      @click="toggleTheme"
      class="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-slate-200/50 dark:hover:bg-white/10 transition-colors text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white"
      aria-label="Toggle Theme"
    >
      <i :class="isDark ? 'ph-sun' : 'ph-moon'" class="ph text-xl"></i>
    </button>
  </nav>
</template>
