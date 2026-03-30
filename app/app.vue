<script setup>
useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [
    { rel: "icon", href: "/favicon.ico" },
    {
      rel: "stylesheet",
      href: "https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css",
    },
  ],
});

const title = "Dam RateRush | Shipping Cost Checker";

const description =
  "Easily check and compare shipping costs from multiple couriers. Enter your origin and destination to get real-time delivery rates, estimated times, and the best shipping options.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: "website",
  twitterTitle: title,
  twitterDescription: description,
});
</script>

<template>
  <main class="bg-background min-h-screen">
    <NuxtPage />
  </main>
</template>
