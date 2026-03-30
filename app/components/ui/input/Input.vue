<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import { useVModel } from "@vueuse/core";
import { Briefcase } from "lucide-vue-next";

const props = defineProps<{
  defaultValue?: string | number;
  modelValue?: string | number;
  class?: HTMLAttributes["class"];
}>();

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});
const isFocused = ref(false);
</script>

<template>
  <div
    :class="cn('', props.class)"
    class="flex items-center relative px-c-5 py-c-3 gap-c-4 border border-[#979797] rounded-lg"
  >
    <label
      class="absolute left-c-10 -translate-y-1/2 bg-slate-50 dark:bg-slate-900 px-c-2 text-c-4 font-medium transition-all duration-300 pointer-events-none ease-in-out"
      :class="[
        isFocused || modelValue ? 'top-0' : 'top-1/2 text-muted-foreground',
      ]"
    >
      Weight
    </label>
    <Briefcase class="size-c-4" />
    <input
      v-model="modelValue"
      type="number"
      data-slot="input"
      class="w-full outline-none text-c-4 font-medium bg-transparent [&::-webkit-inner-spin-button]:appearance-none"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
    <p class="text-c-4 font-medium">gram</p>
  </div>
</template>
